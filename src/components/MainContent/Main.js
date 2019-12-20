import React, { Component } from 'react'
import UserNav from './UserNav';
import MaterialIcon from "material-icons-react";
import Table from './Table';

 class Main extends Component {
    render() {
        return (
          
            <div className="main-content">
            <header className="main-header">
                <nav className="navbar">
                    <div className="input-group search">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <MaterialIcon icon= "search" ></MaterialIcon>
                            </span>
                        </div>
                        <input type="text" name="query" id="search-input" className="form-control"
                            placeholder="Search by name or citizenship…" />
                    </div>
                    <div className="navbar-right">
                        {/* <!-- User Account --> */}
                       <UserNav />
                    </div>
                </nav>
            </header>
            <main>
                <div className="map-wrapper">
                    <div className="tab">
                        <ul>
                            <li className="current">Map</li>
                            <li>data</li>
                        </ul>
                    </div>
                    <div className="map" id="map"></div>
                  <Table />
                </div>
            </main>
     </div>
        )
    }
}

export default Main;