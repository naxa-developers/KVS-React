import React, { Component } from "react";
import Header from "../partials/Header";
import HeaderFilter from "../Filter/HeaderFilter";
import Overview from "../Overview/Overview";

import ScrollBar from "react-perfect-scrollbar";


class Filter extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="card">
          <Header />
          <div style={{ height: "100vh" }}>
            <ScrollBar component="div">
              <div className="card-body">
                <HeaderFilter />
                <Overview />
                <Overview />
                {/* <Overview /> */}
              </div>
            </ScrollBar>
          </div>
        </div>
      </aside>
    );
  }
}
export default Filter;
