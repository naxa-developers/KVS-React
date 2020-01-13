import React, { Component, createRef } from "react";


import Main from "./MainContent/Main";
import Filter from "./Filter/Filter";

import Axios from 'axios'


class Parent extends Component {
  constructor(props) {
    super(props)
    this.markerref = createRef()

    this.state = {
      householdData: ''

    }
  }

  fetchDataF = () => {
    var bodyFormData = new FormData();


    bodyFormData.append('ward', JSON.stringify([6,2]));
    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: { 'Content-type': 'multipart/form-data' }
    })
      .then(res => {
        console.log("Data is here");
        console.log(res.data.data);
        this.setState({ householdData: res.data.data }, () => {
          window.mapRef.current.leafletElement.fitBounds(this.markerref.current.leafletElement.getBounds())
        })



      })
  }

  searchTable = (keyword) => {
    let filteredData = this.state.householdData.filter(data =>
      data.owner_name.toLowerCase().includes(keyword)
    )

    this.setState({
      householdData: filteredData
    })



  }
  fetchDatafilter = () => {
    var bodyFormData = new FormData();


    bodyFormData.append('ward', JSON.stringify([6, 3]));
    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: { 'Content-type': 'multipart/form-data' }
    })
      .then(res => {
        console.log("Data is here");
        console.log(res.data.data);
        this.setState({ householdData: res.data.data }, () => {
          window.mapRef.current.leafletElement.fitBounds(this.markerref.current.leafletElement.getBounds())
        })



      })
  }


  componentDidMount() {
    // this.fetchData();
    this.fetchDatafilter();
  }




  render() {


    return (
      <div className="">
        <div className="kvs-wrapper">
          <div className="container-fluid main-wrapper p-0">

            <Filter />
            <Main
              householdData={this.state.householdData}
              searchTable={this.searchTable}
              markerref={this.markerref}

            />
          </div>

        </div>
      </div>
    );
  }
}
export default Parent;
