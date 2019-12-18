import React, { Component } from 'react'
import Header from '../partials/Header'
import HeaderFilter from "../Filter/HeaderFilter";
import Overview from "../Overview/Overview";

 class Filter extends Component {
    render() {
        return (
            <aside className="sidebar">
            <div className="card">
              <Header />
              <div className="card-body">
                <HeaderFilter />
                <Overview />
              </div>
            </div>
          </aside>
        )
    }
}
export default Filter;
