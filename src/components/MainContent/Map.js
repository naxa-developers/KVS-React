import React, { Component, createRef } from 'react';
import {
  Map as LeafletMap,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  FeatureGroup,
  withLeaflet
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const { BaseLayer } = LayersControl;
import L from 'leaflet';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { Ring } from 'react-awesome-spinners';
import MeasureControlDefault from 'react-leaflet-measure';
import PrintControlDefault from 'react-leaflet-easyprint';
import { Button } from 'react-bootstrap';
import refresh from '../../img/refresh.png';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import marker from '../../img/home.png';
import './MapHousehold.css';

const PrintControl = withLeaflet(PrintControlDefault);
const MeasureControl = withLeaflet(MeasureControlDefault);

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
    this.markerref = createRef();

    this.state = {
      // isLoading: true,
      center: [26.676631, 86.892794],
      zoom: 12
    };
  }

  componentWillMount() {
    this.updateDimensions();
  }

  updateDimensions = () => {
    const height = window.innerHeight;
    const heightNav = window.innerWidth >= 992 ? 82 : 121;
    // const heightNav = this.props.reference.current.clientHeight
    this.setState({ height: JSON.stringify(height - heightNav) });
  };

  clickHandler = () => {
    console.log('clicked');
    setTimeout(() => {
      this.mapRef.current.leafletElement.fitBounds(
        this.props.markerref.current.leafletElement.getBounds()
      );
    }, 1000);
  };

  componentDidMount() {
    console.log('map is mounted');
    window.mapRef = this.mapRef;
    setTimeout(() => {
      window.markerref = this.props.markerref.current;
      // console.log(window.markerref.leafletElement, 'ggg');
    }, 190);

    var refresh = L.control({
      position: 'topleft'
    });

    refresh.onAdd = function(mapRef) {
      this._div = L.DomUtil.create('div', 'refresh'); // create a div with a class "refresh"
      this._div.innerHTML =
        '<button id="button_refresh" type="button" class="btn btn-primary" style= "background: white; padding: 4.5px;"><img src="82c10fb2aa193cfc75e0528afe126e1f.png" style="height: 20px; margin: 1px;"></button>';
      this._div.onclick = function() {
        setTimeout(() => {
          window.mapRef.current.leafletElement.fitBounds(
            window.markerref.leafletElement.getBounds()
          );
        }, 200);
      };

      return this._div;
    };

    refresh.addTo(window.mapRef.current.leafletElement);

    var measureResult = L.control({
      position: 'topright'
    });

    measureResult.onAdd = function(mapRef) {
      this._div = L.DomUtil.create('div', 'measureResult'); // create a div with a class "refresh"
      this.update();

      return this._div;
    };
    measureResult.update = function(props) {
      setTimeout(() => {
        this._div.innerHTML = document.getElementsByClassName(
          'results'
        )[0].innerHTML;
      }, 100);
    };

    // window.mapRef.current.leafletElement.addEventListener(
    //   'mouseover',
    //   function() {
    //     console.log('measureresult', measureResult._div);
    //     console.log(
    //       'measureresult',
    //       document.getElementsByClassName('results')[0].innerHTML
    //     );
    //     measureResult.update();
    //   }
    // );

    measureResult.addTo(window.mapRef.current.leafletElement);

    //measure icon css
    setTimeout(() => {
      console.log(
        document.getElementsByClassName('leaflet-control-measure')[0]
      );

      document
        .getElementsByClassName('leaflet-control-measure')[0]
        .addEventListener('mouseover', function() {
          console.log('asdfasfdasfdas');
          document.getElementsByClassName('start')[0].click();
        });
    }, 1000);
  }

  render() {
    console.log('on map', this.props.householdData);

    const measureOptions = {
      position: 'topleft',
      primaryLengthUnit: 'meters',
      secondaryLengthUnit: 'kilometers',
      primaryAreaUnit: 'sqmeters',
      secondaryAreaUnit: 'acres',
      activeColor: '#db4a29',
      completedColor: '#9b2d14'
    };

    return (
      // animation on view
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 30
        }}
      >
        <LeafletMap
          center={this.state.center}
          zoom={this.state.zoom}
          maxZoom={21}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
          ref={this.mapRef}
          style={{
            height: `${this.state.height}px`,

            overflow: 'hidden'
          }}
        >
          <div
            id='Spinner'
            style={{
              display: `${this.props.display}`,
              background: 'white',
              opacity: '0.8',
              position: 'absolute',
              zIndex: '500',
              textAlign: 'center',
              height: '100%',
              width: '100%',
              padding: '30vh 40% 43vh'
            }}
          >
            <Ring />
            <br />
            <span style={{ color: 'black' }}>
              <strong>Map data is loading</strong>
            </span>
          </div>
          <LayersControl position='topright'>
            <BaseLayer name='OpenStreetMap'>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                noWrap={true}
              />
            </BaseLayer>
            <BaseLayer name='Google Streets'>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>
            <BaseLayer name='Google Hybrid'>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>
            <BaseLayer name='Google Satellite'>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>
            <BaseLayer name='Google Terrain'>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>

            <BaseLayer name='Mapbox Streets' checked={true}>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='https://api.mapbox.com/styles/v1/rowheat02/ck3h10kz80mnq1cmz5v34i1wi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm93aGVhdDAyIiwiYSI6ImNqeGQwZWNybjA5NXIzb21zZ3NzN290encifQ.51qM62lMBZUj2cBeykTG6g'
                maxZoom={20}
                // subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
            </BaseLayer>
          </LayersControl>
          <FeatureGroup ref={this.props.markerref}>
            <MarkerClusterGroup
              ref={this.props.clusterRef}
              disableClusteringAtZoom={18}
            >
              {this.props.householdData != '' &&
                this.props.householdData.map((e, i) => {
                  return (
                    <Marker
                      key={i}
                      position={[e.latitude, e.longitude]}
                      icon={L.icon({ iconUrl: marker, iconSize: [25, 25] })}
                    >
                      <Popup
                        style={{ padding: '10px 20px', background: '#1f3be3' }}
                      >
                        <h5>{e.owner_name}</h5>
                        <p>
                          Citizenship Number : {'  '}
                          {e.owner_citizenship_no === 'nan'
                            ? '-'
                            : e.owner_citizenship_no}
                        </p>
                        <p>
                          Phone Number :{'  '}
                          {e.contact_no === 'nan' ? '-' : e.contact_no}
                        </p>
                        <Link
                          to={{
                            pathname: '/about',
                            state: {
                              index: e.id
                            }
                          }}
                        >
                          <button>View More Details</button>
                        </Link>
                      </Popup>
                    </Marker>
                  );
                })}
            </MarkerClusterGroup>
          </FeatureGroup>
          <MeasureControl {...measureOptions} />

          <PrintControl
            position='topleft'
            sizeModes={['A4Portrait', 'A4Landscape']}
            hideControlContainer={true}
            title='Export as PNG'
            exportOnly
          />
        </LeafletMap>
      </motion.div>
    );
  }
}
export default Map;
