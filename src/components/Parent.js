import React, { Component } from "react";


import Main from "./MainContent/Main";
import Filter from "./Filter/Filter";

import Axios from 'axios'


class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      householdData: ''
       
    }
  }
  
  fetchData = () => {
    Axios.get(`http://139.59.67.104:8019/api/v1/house_hold/`)
    .then(res => {
      this.setState({
        householdData: res.data
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

  componentDidMount() {
    this.fetchData();
  }



  
  render() {
  
    
    return (
      <div className="">
        <div className="kvs-wrapper">
        <div className="container-fluid main-wrapper p-0">
      
          <Filter />
          <Main 
          householdData={this.state.householdData}
          searchTable = {this.searchTable}
          
          />
        </div>
       
        </div>
        </div>
    );
  }
}
export default Parent;
