import React, { Component } from 'react'
import UserNav from './UserNav';
import MaterialIcon from "material-icons-react";
import Table from './Table';
import Map from './Map'

 class Main extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           map: true,
           table: false
    
        }
      }
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
                            <li className={this.state.map == true ? "current" : ""} onClick={() => this.setState({map: !this.state.map, table: !this.state.table})}>Map</li>
                            <li className={this.state.table == true ? "current" : ""}onClick={() => this.setState({table: !this.state.table, map: !this.state.map})}>data</li>
                        </ul>
                    </div>
                 {   this.state.map==true ?
                    <Map />
                    :
                    <Table /> }

               
               

                </div>
            </main>
     </div>
        )
    }
}

export default Main;