import React, { Component } from "react";

import Introduction from "./InsideMain/Introduction";
import SystemFeatures from "./InsideMain/SystemFeatures";
import Summary from "./InsideMain/Summary";
import Footer from "./InsideMain/Footer";
import FirstSection from "./InsideMain/FirstSection";
import NavBarHome from "./InsideMain/NavBarHome";
import Axios from "axios";

import {
  Map as LeafletMap,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  FeatureGroup,
  withLeaflet,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
const { BaseLayer } = LayersControl;
import L from "leaflet";

class Home extends Component {
  constructor(props) {
    super(props);

    this.introductionRef = React.createRef();
    this.summaryRef = React.createRef();
    this.featureRef = React.createRef();
    this.topRef = React.createRef();

    this.state = {
      districts: [],
      household: [],
      people: [],
      seniorCitizen: [],
      children: [],
    };
  }

  summaryData = () => {
    Axios.get("http://139.59.67.104:8019/api/v1/highlight").then((res) => {
      const districts = res.data.data[0].district;
      const household = res.data.data[0].house_hold_count;
      const people = res.data.data[0].num_of_people;
      const seniorCitizen = res.data.data[0].senior_citizen;
      const children = res.data.data[0].num_of_children;
      this.setState({
        districts,
        household,
        people,
        seniorCitizen,
        children,
      });
      this.scroll(this.topRef);
    });
  };

  componentWillMount() {
    localStorage.removeItem("myValueInLocalStorage");
    this.scroll(this.topRef);
  }

  componentDidMount() {
    this.summaryData();
  }

  // scroll = ref => {
  //   ref.current.scrollIntoView({ behavior: 'smooth' });
  // };

  scroll = () => {
    if (this.topRef.current) {
      this.topRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  scrollToIntroduction = () => {
    if (this.introductionRef.current) {
      this.introductionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  scrollToSummary = () => {
    if (this.summaryRef.current) {
      this.summaryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  scrollToFeature = () => {
    if (this.featureRef.current) {
      this.featureRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  render() {
    return (
      <body className="">
        <div className="kvs-wrapper">
          {/* <div ref={this.topRef}></div> */}
          <NavBarHome
            intro={this.scrollToIntroduction}
            summary={this.scrollToSummary}
            feature={this.scrollToFeature}
            top={this.scroll}
          />
          <FirstSection intro={this.scrollToIntroduction} />
          <div>
            <Introduction />
          </div>
          <div>
            <Summary
              introRef={this.introductionRef}
              districts={this.state.districts}
              household={this.state.household}
              people={this.state.people}
              seniorCitizen={this.state.seniorCitizen}
              children={this.state.children}
            />
          </div>
          <div ref={this.featureRef}>
            <SystemFeatures />
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}

export default Home;
