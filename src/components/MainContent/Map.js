import React, { Component, createRef } from "react";
import {
  Map as LeafletMap,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  FeatureGroup,
  withLeaflet,
  MapControl,
} from "react-leaflet";
import Control from 'react-leaflet-control';
import "leaflet/dist/leaflet.css";
const { BaseLayer } = LayersControl;
import L from "leaflet";
import { motion } from "framer-motion";
import "leaflet-ajax";
import { Link, withRouter } from "react-router-dom";
import { Ring } from "react-awesome-spinners";
import MeasureControlDefault from "react-leaflet-measure";
import PrintControlDefault from "react-leaflet-easyprint";
import { Button } from "react-bootstrap";
import refresh from "../../img/refresh.png";
import MarkerClusterGroup from "react-leaflet-markercluster";
import marker from "../../img/home.png";
import redmarker from "../../img/home-red.png";
import orangemarker from "../../img/home-orange.png";
import "./MapHousehold.css";
import Axios from "axios";
import { connect } from "react-redux";
import redMarker from "../../img/home-red.png";
import orangeMarker from "../../img/home-orange.png";
import blueMarker from "../../img/home.png";
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
      zoom: 12,
      layersDemo: null,
    };
    this.legendRef = React.createRef();
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
    console.log("clicked");
    setTimeout(() => {
      this.mapRef.current.leafletElement.fitBounds(
        this.props.markerref.current.leafletElement.getBounds()
      );
    }, 1000);
  };

  getLayers = () => {
    var body = new FormData();
    body.set("municipality", "524 2 15 3 004");
    // console.log("getting layers", body);

    Axios({
      method: "post",
      url: "https://vca.naxa.com.np/api/kvs_map_data_layers",
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      // console.log("layers aayo", response.data );

      // console.log("file", response.data['Category:Resources'][0].file);

      this.setState({
        layersDemo: response.data,
      });

      // console.log("file", response.data['Category:Resources'][0].file);

      // var url = response.data['Category:Resources'][0].file;

      // var geojsonLayer = new L.geoJSON.ajax("https://vca.naxa.com.np/static/jsons/सामुदायिकभवन-5E917C-geojson.json");
      // console.log("geo", geojsonLayer);
      // const mapEl1= window.mapRef.current.leafletElement;

      // geojsonLayer.addTo(mapEl1);
    });
  };

  componentDidMount() {
    let wardBoolean = localStorage.getItem("ward");
    //  console.log("bool", wardBoolean);

    wardBoolean !== "null" ? this.fetchSingleWard() : this.fetchMunicipality();
    window.mapRef = this.mapRef;
    setTimeout(() => {
      window.markerref = this.props.markerref.current;
      // console.log(window.markerref.leafletElement, 'ggg');
    }, 190);

    var refresh = L.control({
      position: "topleft",
    });

    refresh.onAdd = function (mapRef) {
      console.log("refresh");

      this._div = L.DomUtil.create("div", "refresh"); // create a div with a class "refresh"
      this._div.innerHTML =
        '<button id="button_refresh" type="button" class="btn"><i class="icon-refresh"></i></button>';
      this._div.onclick = function () {
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
      position: "topright",
    });

    measureResult.onAdd = function (mapRef) {
      this._div = L.DomUtil.create("div", "measureResult"); // create a div with a class "measureResult"
      this.update();

      return this._div;
    };
    measureResult.update = function (props) {
      setTimeout(() => {
        this._div.innerHTML = document.getElementsByClassName(
          "results"
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
        document.getElementsByClassName("leaflet-control-measure")[0]
      );

      document
        .getElementsByClassName("leaflet-control-measure")[0]
        .addEventListener("mousedown", function () {
          // console.log('asdfasfdasfdas');
          document.getElementsByClassName("start")[0].click();
        });
    }, 1000);
  }

  fetchSingleWard = () => {
    let ward = localStorage.getItem("ward");
    var bodyFormData = new FormData();
    bodyFormData.append("ward", ward);
    bodyFormData.append("municipality", "524 2 15 3 004");

    Axios({
      method: "post",
      url: "https://vca.naxa.com.np/api/ward_geojson_kvs",
      data: bodyFormData,
      headers: {
        "Content-type": "multipart/form-data",
      },
    }).then((res) => {
      wardJson = L.geoJSON(res.data, {
        style: { color: "#f59e42", fillOpacity: "0.1" },
      });
      wardJson.addTo(window.mapRef.current.leafletElement);
      console.log("boounds", wardJson.getBounds());

      let wardJson = L.geoJSON(res.data, {
        style: { color: "#f59e42", fillOpacity: "0.1" },
      });
      wardJson.addTo(window.mapRef.current.leafletElement);

      setTimeout(() => {
        window.mapRef.current.leafletElement.fitBounds(wardJson.getBounds());
      }, 1000);
      //  window.mapRef.current.leafletElement.zoomIn(2.3);
      //  window.mapRef.current.leafletElement.panTo([this.state.center])
    });
  };

  fetchMunicipality = () => {
    Axios.get(
      `${process.env.BASE_URL}api/v1/municipality_geo_json?id=${localStorage.getItem(
        "mun_id"
      )}`
    ).then((res) => {
      let munJson = L.geoJSON(res.data, {
        style: { color: "#f59e42", fillOpacity: "0.1" },
      });
      munJson.addTo(window.mapRef.current.leafletElement);
      setTimeout(() => {
        window.mapRef.current.leafletElement.fitBounds(munJson.getBounds());
      }, 100);

      // this.setState({
      //   geoSingle: res.data
      // })
    });
  };
  render() {


    // console.log("gdata",this.props.VCALayers['Category:Resources'][0].file);

    // console.log("from redux", this.props.layerToShow);

    //  this.state.layersDemo &&   console.log('on map', ((this.state.layersDemo['Category:Resources'][0].file)));
    //  var a = this.state.layersDemo && this.state.layersDemo['Category:Resources'][0].file;

    const measureOptions = {
      position: "topleft",
      primaryLengthUnit: "meters",
      secondaryLengthUnit: "kilometers",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "acres",
      activeColor: "#db4a29",
      completedColor: "#9b2d14",
    };

    return (
      // animation on view
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
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

            overflow: "hidden",
          }}
        >
          <div
            id="Spinner"
            style={{
              display: `${this.props.display}`,
              background: "white",
              opacity: "0.8",
              position: "absolute",
              zIndex: "500",
              textAlign: "center",
              height: "100%",
              width: "100%",
              padding: "30vh 40% 43vh",
            }}
          >
            <Ring />
            <br />
            <span style={{ color: "black" }}>
              <strong>Please wait, data is loading</strong>
            </span>
          </div>
          <LayersControl position="topright">
            <BaseLayer name="OpenStreetMap">
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap={true}
              />
            </BaseLayer>
            <BaseLayer name="Google Streets">
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
            </BaseLayer>
            <BaseLayer name="Google Hybrid">
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
            </BaseLayer>
            <BaseLayer name="Google Satellite">
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
            </BaseLayer>
            <BaseLayer name="Google Terrain">
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
            </BaseLayer>

            <BaseLayer name="Mapbox Streets" checked={true}>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url="https://api.mapbox.com/styles/v1/rowheat02/ck3h10kz80mnq1cmz5v34i1wi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm93aGVhdDAyIiwiYSI6ImNqeGQwZWNybjA5NXIzb21zZ3NzN290encifQ.51qM62lMBZUj2cBeykTG6g"
                maxZoom={20}
              // subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
            </BaseLayer>
          </LayersControl>
          <FeatureGroup ref={this.props.markerref}>
            <MarkerClusterGroup
              ref={this.props.clusterRef}
              disableClusteringAtZoom={17}
            >
              {this.props.householdData != "" &&
                this.props.householdData.map((e, i) => {
                  // const riskScore =Math.floor(Math.random() * 100); 
                  const riskScore = Math.round(+e.risk_score);
                  // console.log(e, "e");
                  let conditionalMarker = marker;
                  if (riskScore < 50) {
                    conditionalMarker = marker;
                  } else if (riskScore >= 50 && riskScore < 60) {
                    conditionalMarker = orangemarker;
                  } else if (riskScore >= 60) {
                    conditionalMarker = redmarker;
                  }
                  // if (riskScore > 0 && riskScore < 30) {
                  //   conditionalMarker = marker;
                  // } else if (riskScore >= 30 && riskScore < 70) {
                  //   conditionalMarker = orangemarker;
                  // } else if (riskScore >= 70) {
                  //   conditionalMarker = redmarker;
                  // }
                  return (
                    <Marker
                      key={i}
                      position={[e.latitude, e.longitude]}
                      icon={L.icon({
                        iconUrl: conditionalMarker,
                        iconSize: [25, 25],
                      })}
                    >
                      <Popup
                        style={{ padding: "10px 20px", background: "#1f3be3" }}
                      >
                        <h5>{e.owner_name}</h5>
                        <p className="para_info">
                          <span className="c_id">Citizenship No. {"  "}</span>
                          {e.owner_citizenship_no === "nan"
                            ? "-"
                            : e.owner_citizenship_no}
                        </p>
                        <p className="para_info"><span className="c_id">Risk Score:</span> {Math.round(e.risk_score)}</p>
                        <p className="para_contact">
                          <span className="p_no">
                            <i class="material-icons">call</i>
                            {"  "}
                          </span>
                          {e.contact_no === "nan" ? "-" : e.contact_no}
                        </p>
                        <Link
                          to={{
                            pathname: "/about",
                            state: {
                              index: e.id,
                            },
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
          {/* {this.state.layersDemo &&   <GeoJSON key="layer-vca" data={new L.geoJSON.ajax(this.state.layersDemo['Category:Resources'][0].file)} /> } */}
          {/* { this.state.layersDemo &&      <GeoJSON key='vca-layer' data ={a} />} */}
          <MeasureControl {...measureOptions} />
          {/* {this.props.location && this.props.location.pathname === '/home' &&<Legend />} */}
          <Control position="bottomright" >
            <div class="info legend leaflet-control">
              <div className="legend-data">
                <img src={blueMarker} />
                {/* <div style={{paddingLeft: "3px"}}>  */}
                <label>
                Least Vulnerable</label>
                {/* <label style={{
                    display: "block",
                    marginBottom: 0,
                    textAlign: "center",
                    // color: "blue"
                  }}
                  >Count: <span className="count is-blue">{this.props.totalVulnerabilityCount.leastVul}</span></label> */}
                {/* </div> */}
              </div>
              <div className="legend-data">
                <img src={orangeMarker} />
                {/* <div style={{paddingLeft: "3px"}}>  */}
                Moderate Vulnerable
                {/* <label style={{
                    display: "block",
                    marginBottom: 0,
                    textAlign: "center",
                    // color: "blue"
                  }}
                  >Count: <span className="count is-orange">{this.props.totalVulnerabilityCount.normalVul}</span></label> */}
                {/* </div> */}
              </div>
              <div  className="legend-data">
                <img src={redMarker} />
                {/* <div style={{paddingLeft: "3px"}}>  */}
                Highly Vulnerable
                {/* <label style={{
                    display: "block",
                    marginBottom: 0,
                    textAlign: "center",
                    // color: "blue"
                  }}
                  >Count: <span className="count is-red">{this.props.totalVulnerabilityCount.highVul}</span></label> */}
                {/* </div> */}
              </div>
            </div>
          </Control>
          {/* <Legend ref={()=>this.legendRef} /> */}
          <PrintControl
            position="topleft"
            sizeModes={["A4Portrait", "A4Landscape"]}
            hideControlContainer={true}
            title="Export as PNG"
            exportOnly
          />
        </LeafletMap>
      </motion.div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    layerToShow: state.layerToShow,
  };
};
export default connect(mapStateToProps)(withRouter(Map));
