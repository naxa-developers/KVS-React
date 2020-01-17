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
           table: false,
           i: 0
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
                                placeholder="Search by name or citizenship…" onKeyDown={(e) => e.key==="Enter" && this.props.searchTable(e.target.value)}  />
                        </div>
                        <div className="navbar-right">
                            {/* <!-- User Account --> */}
                            <UserNav />
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="map-wrapper">
                        <div className="tab ">
                            <ul>
                                <li className={this.state.i===0 ? "current" : ""} onClick={() => this.setState({...this.state,i:0})}>Map</li>
                                <li className={this.state.i!==0 ? "current" : ""} onClick={() => this.setState({...this.state,i:1})}>data</li>
                            </ul>
                            {/* <button className="common-button-border no-border is-icon"><i className="material-icons">vertical_align_bottom</i>Export All</button> */}
                        </div>
                        {/* {this.state.i===0 ?
                        <Map householdData={this.props.householdData} markerref={this.props.markerref} display={this.props.display} />
                        :
                        <Table householdData={this.props.householdData} /> } */}

                        <div style={{zIndex:`${this.state.i!==0 ? '500' : '0'}`,position:'absolute'}}><Table householdData={this.props.householdData} /></div>
                        <div style={{visibility: `${this.state.i===0 ? 'visible' : 'hidden'}`}}><Map householdData={this.props.householdData} markerref={this.props.markerref} display={this.props.display} /></div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;