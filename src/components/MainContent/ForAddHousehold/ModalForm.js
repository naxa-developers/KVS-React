import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { Map, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import './map.css';

const { BaseLayer } = LayersControl;

export default class ModalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 51.505,
        lng: -0.09
      },
      marker: {
        lat: 51.505,
        lng: -0.09
      },
      zoom: 13,
      draggable: true
    };
    // this.mapRef = React.createRef();
    this.markerRef = React.createRef();
  }

  updatePosition = () => {
    const marker = this.markerRef.current;
    marker.leafletElement.openPopup();
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng()
      });
    }
  };

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];

    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Your Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Map here */}
            <Map
              ref={this.props.mapRef}
              center={position}
              zoom={this.state.zoom}
            >
              <LayersControl>
                <BaseLayer checked name='OpenStreetMap.Mapnik'>
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />
                </BaseLayer>
                <BaseLayer name='OpenStreetMap.BlackAndWhite'>
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
                  />
                </BaseLayer>

                <Marker
                  position={markerPosition}
                  draggable={this.state.draggable}
                  onDragend={this.updatePosition}
                  ref={this.markerRef}
                >
                  <Popup>
                    <span>
                      {this.state.marker.lat}, {this.state.marker.lng}
                    </span>
                  </Popup>
                </Marker>
              </LayersControl>
            </Map>
            <div>Locate your place in the map and click submit</div>
            <div>
              <span>Latitude </span>
              <input value={this.state.marker.lat} disabled />
            </div>
            <div>
              <span>Longitude </span>
              <input value={this.state.marker.lng} disabled />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={this.props.handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
