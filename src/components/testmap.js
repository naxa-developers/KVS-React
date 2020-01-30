import React, { Component, createRef } from "react";
import { Map as LeafletMap, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const { BaseLayer } = LayersControl;
import L from "leaflet";
import { motion } from "framer-motion"
import 'leaflet-draw/dist/leaflet.draw-src.css';
import './testcss.css';
import 'leaflet-draw/dist/leaflet.draw.css';
// import icon from './image.png'
import html2canvas from 'html2canvas';
require('leaflet.browser.print/dist/leaflet.browser.print')


// import {leafletImage} from 'leaflet-image'
require('leaflet.animatedmarker/src/AnimatedMarker');



require('leaflet-draw');



class Map extends Component {
    constructor(props) {
        super(props);
        this.mapRef = createRef();

    }

    saveAs=(uri, filename)=> {

        var link = document.createElement('a');
    
        if (typeof link.download === 'string') {
    
            link.href = uri;
            link.download = filename;
    
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
    
            //simulate click
            link.click();
    
            //remove the link when done
            document.body.removeChild(link);
    
        } else {
    
            window.open(uri);
    
        }
    }

    componentDidMount() {
        var drawnItems = new L.FeatureGroup();

        var drawControl = new L.Control.Draw({
            position: 'bottomright',
            edit: {
                featureGroup: drawnItems,
                remove: true,
                edit: true
            },
            draw: {
                circlemarker: false,
            }
        });
        console.log(this.mapRef)

        this.mapRef.current.leafletElement.addControl(drawControl);
        // L.control.scale({position:'topleft'}).addTo(map);

        this.mapRef.current.leafletElement.on(L.Draw.Event.CREATED, (e) => {
            var type = e.layerType,
                layer = e.layer;

            if (type === 'marker') {
                layer.bindPopup('A popup!');
            }

            drawnItems.addLayer(layer);
            this.mapRef.current.leafletElement.addLayer(drawnItems);
        });
        // leafletImage(this.mapRef.current.leafletElement, (err, canvas)=> {

        //     var img = document.createElement('img');
        //     var dimensions = map.getSize();
        //     img.width = dimensions.x;
        //     img.height = dimensions.y;
        //     img.src = canvas.toDataURL();
        //     document.getElementById('images').innerHTML = '';
        //     document.getElementById('images').appendChild(img);
        // });

        var A = [27.729623, 85.330061];
        var B = [27.7296592, 85.3288943];

        function slope(a, b) {
            if (a[0] == b[0]) {
                return null;
            }

            return (b[1] - a[1]) / (b[0] - a[0]);
        }

        function intercept(point, slope) {
            if (slope === null) {
                // vertical line
                return point[0];
            }

            return point[1] - slope * point[0];
        }

        var m = slope(A, B);
        var b = intercept(A, m);

        var coordinates = [];
        for (var x = A[0]; x <= B[0]; x = x + 0.0005) {
            var y = m * x + b;
            coordinates.push([x, y]);
        }

        this.mapRef.current.leafletElement.fitBounds(L.polygon([A, B]).getBounds())
        console.log(coordinates);
        for (var i = 0; i < coordinates.length; i++) {
            var m = L.circleMarker(coordinates[i], { radius: 10, color: 'green' });
            // this.mapRef.current.leafletElement.addLayer(m);
        }
        var line = L.polyline(coordinates)
        var myIcon = L.icon({
            // iconUrl: '../src/components/image.png',
            iconSize: [16, 16]
        });

        var animatedMarker = L.animatedMarker(line.getLatLngs(), { icon: myIcon, autoStart: false });


        this.mapRef.current.leafletElement.addLayer(animatedMarker);
        
        animatedMarker.start();

        setTimeout(() => {
            animatedMarker.stop();
        }, 2000);

        L.marker([27,85],{icon:myIcon}).addTo(this.mapRef.current.leafletElement)

       




        // setTimeout(()=>{
        //     html2canvas(document.body,{allowTaint : false,
        //         logging : true,
        //         taintTest: false,
        //         useCORS: true}).then(canvas => {
        //         var cvs = canvas.toDataURL('image/jpg');
        //         document.body.appendChild(canvas)
            
        //         this.saveAs(canvas.toDataURL(), 'name.jpg');
        //         console.log(canvas)
        //     });


        // },3000)
        L.control.browserPrint({}).addTo(this.mapRef.current.leafletElement)
        var cntrl=L.control({ position: 'bottomleft' });
        cntrl.onAdd = (map) => {
            var div = L.DomUtil.create('div', `routeWrapper `)
          div.innerHTML = ''
        

          div.innerHTML += "<h6 id='legendtitle'>Control</h6>"
          return div
        }
        cntrl.addTo(this.mapRef.current.leafletElement)


      


    }

    render() {
        var bounds = [[25.710836919640595, 79.79365377708339],
        [30.798474179567847, 88.54975729270839]];

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
                    id="mapp"
                    center={[27, 85]}
                    bounds={bounds}
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
                    ref={this.mapRef}
                    style={{
                        height: "90vh",

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




