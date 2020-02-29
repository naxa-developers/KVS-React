import React, { Component } from "react";
import Header from "../partials/Header";
import HeaderFilter from "../Filter/HeaderFilter";
import Overview from "../Overview/Overview";

import ScrollBar from "react-perfect-scrollbar";
import Axios from "axios";
import { LoopCircleLoading, SolarSystemLoading } from "react-loadingg";
import { connect } from 'react-redux';
import TestFilter from "./TestFilter";
import MoreOverview from "../Overview/MoreOverview/MoreOverview";
import Layers from "./Layers/Layers";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
   
      Categories: [],
      filterparam: [],
      isTrue: true,
      multiselectIndex: 0,
      uniqueArray: [],
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
    };
  }

  clicked = () => {
    this.setState({
      isTrue: !this.state.isTrue
    });
  };

  fetchdropdown = () => {
    Axios.get("http://139.59.67.104:8019/api/v1/unique",
      {
        headers: {
        
          Authorization: `Token ${this.state.token}`
        }
      })
      .then(response => {
        let alldropdown = [];
        let id = 1;
        Object.keys(response.data.data[0]).forEach((e, i) => {
         
          this.state.filterparam.push(e);
          alldropdown.push({
            id: id,
            dropdown: response.data.data[0][e],
            field: e
          });
          id++;
        });
      
        this.headerfiilter.storeselectedvalue();

        
        this.setState({ Categories: alldropdown });
   
      });
  };

  componentDidMount() {
    this.fetchdropdown();


    // cbox.map((e)=>console.log(e,"e"))
  }
  setUniqueID = () => {
    let cbox = document.getElementsByClassName("custom-control-input");
    console.log(cbox, "CBOX");
  };

  render() {

  
    return (
      <aside className="sidebar ">
        <div
          className="card"
          style={{ display: `${this.state.isTrue ? "block" : "none"}` }}
        >
          {/* <Header /> */}
          {/* <TestFilter /> */}
          <div style={{ height: "100vh" }}>
            <ScrollBar component="div">
              <div className="card-body">
                <HeaderFilter
                  markerref={this.props.markerref}
                  fetchedData={this.props.fetchedData}
                  householdData={this.props.householdData}
                  onApply={this.props.onApply}
                  ref={re => (this.headerfiilter = re)}
                  filterparam={this.state.filterparam}
                  Categories={this.state.Categories}
                 
                  dataReset={this.props.dataReset}
                  onApplyMore={this.props.onApplyMore}
                />
                  <Layers 
                  update
                  updateMap = {this.props.updateMap}
                  markerref={this.props.markerref}
                  addLayers = {this.props.addLayers}
                  removeLayers = {this.props.removeLayers}
                  fetchVCALayers = {this.props.fetchVCALayers}
                  dropArr = {this.props.dropArr}
                  dropArrHazard = {this.props.dropArrHazard}
                  />
                <Overview clicked={this.clicked} householdData={this.props.householdData} />
              
              </div>
            </ScrollBar>
          </div>
        </div>
        <div
          className="card"
          style={{ display: `${this.state.isTrue ? "none" : "block"}` }}
        >
          <Overview
            clicked={this.clicked}
            householdData={this.props.householdData}
          />
        </div>
        {/* {!this.state.isTrue&&console.log("Success") && <Overview />} */}
      </aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    wardValue: state.wardID
  };
}

export default connect(mapStateToProps)(Filter);
