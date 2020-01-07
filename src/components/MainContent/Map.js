import React, { Component, createRef } from "react";
import { Map as LeafletMap, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const { BaseLayer } = LayersControl;
import L from "leaflet";
import {motion} from "framer-motion"
 class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
  }

  componentDidMount() {}

  render() {
    var bounds =[ [ 25.710836919640595, 79.79365377708339],
    [ 30.798474179567847 , 88.54975729270839]];

    return (
      <  motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30
      }}
           >
      <LeafletMap
        center={[27, 85]}
        bounds ={bounds}
        zoom={4}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        // bounds={bounds}
        ref={this.props.mapRef}
        style={{
          height: "85vh" ,

          overflow: "hidden"
        }}
      >
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
      </LeafletMap>
    </motion.div>
    );
  }
}
export default Map;




