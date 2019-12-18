import React, { Component } from "react";

import Header from "./partials/Header";
import HeaderFilter from "./Filter/HeaderFilter";
import Overview from "./Overview/Overview";
import Main from "./MainContent/Main";

class Parent extends Component {
  render() {
    return (
        <div className="kvs-wrapper">
        <div className="container-fluid main-wrapper p-0">
          <aside className="sidebar">
            <div className="card">
              <Header />
              <div className="card-body">
                <HeaderFilter />
                <Overview />
              </div>
            </div>
          </aside>
          <Main />
        </div>
       
        </div>
    );
  }
}
export default Parent;
