import { MapControl, withLeaflet } from "react-leaflet";
import L, { marker } from "leaflet";
import redMarker from "../img/home-red.png";
import orangeMarker from "../img/home-orange.png";
import blueMarker from "../img/home.png";

class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = ["Least Vulnerable", "Vulnerable", "Highly Vulnerable"];
      let markersImg = [blueMarker, orangeMarker, redMarker];
      let labels = [];
      let from;
      let to;

      for (let i = 0; i < grades.length; i++) {
        from = grades[i];

        labels.push(`<img src=${markersImg[i]}></img> ${from}`);
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }
}

export default withLeaflet(Legend);
