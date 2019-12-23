import React, { Component } from "react";


import Main from "./MainContent/Main";
import Filter from "./Filter/Filter";

class Parent extends Component {

  
  render() {
    return (
      <body className="">
        <div className="kvs-wrapper">
        <div className="container-fluid main-wrapper p-0">
          <Filter />
          <Main />
        </div>
       
        </div>
        </body>
    );
  }
}
export default Parent;
