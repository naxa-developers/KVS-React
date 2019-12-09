import React, { Component } from 'react'
import UserNav from './UserNav';
import MaterialIcon from "material-icons-react";

 class Main extends Component {
    render() {
        return (
          
            <div class="main-content">
            <header class="main-header">
                <nav class="navbar">
                    <div class="input-group search">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <MaterialIcon icon= "search" ></MaterialIcon>
                            </span>
                        </div>
                        <input type="text" name="query" id="search-input" class="form-control"
                            placeholder="Search by name or citizenship…" />
                    </div>
                    <div class="navbar-right">
                        {/* <!-- User Account --> */}
                       <UserNav />
                    </div>
                </nav>
            </header>
            <main>
                <div class="map-wrapper">
                    <div class="tab">
                        <ul>
                            <li class="current">Map</li>
                            <li>data</li>
                        </ul>
                    </div>
                    <div class="map" id="map"></div>
                </div>
            </main>
     </div>
        )
    }
}

export default Main;