import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Axios from 'axios'

import Man from '../../img/man-shape.png';
import Women from '../../img/women-shape.png';
import Cross from '../../img/cross.png';
import Check from '../../img/check.png';




 class Overview extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              overviewData: ''
         }
     }
     

    fetchOverview = () => {
        Axios.get(`http://139.59.67.104:8019/api/v1/overview`)
        .then(res => {
            this.setState({
                overviewData: res.data.data
            })
            console.log(this.state.overviewData[0]);
            
        })
    }
     componentDidMount() {
         this.fetchOverview()
     }
    render() {
        return (
            <div className="overview">
                            <div className="overview-header">
                                <h3>Overview</h3>
                                <button onClick={() => this.props.clicked()}role="button" className="common-button-border">{console.log('Hello')}View more</button>
                            </div>
                            <div className="overview-body overview-home-body">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="overview-row">
                                            <div className="overview-item">
                                                <div className="overview-data">
        <h4>{this.state.overviewData&&this.state.overviewData[0].total_house}</h4>
                                                    <h6>Total houses</h6>
                                                </div>

                                            </div>
                                            <div className="overview-item">
                                                <div className="overview-data">
        <h4>{this.state.overviewData&&this.state.overviewData[0].total_population}</h4>
                                                    <h6>Total population</h6>
                                                </div>

                                            </div>
                                            <div className="overview-item overview-inline">
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>{this.state.overviewData&&this.state.overviewData[0].house_ownership_male} </span>
                                                        <i className=""> <img src={Man} alt="man" /></i>
                                                    </h4>
                                                    <h4>
                                                        <span>{this.state.overviewData&&this.state.overviewData[0].house_ownership_female} </span>
                                                        <i className=""> <img src={Women} alt="man" /></i>
                                                    </h4>
                                                    
                                                </div>
                                                <h6>House ownership</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="overview-row">
                                            <div className="overview-item overview-inline">
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>{this.state.overviewData&&this.state.overviewData[0].social_security_received} </span>
                                                        <i className=""> <img src={Check} alt="check" /></i>
                                                    </h4>
                                                    <h4>
                                                        <span>{this.state.overviewData&&this.state.overviewData[0].social_security_not_received} </span>
                                                        <i className=""> <img src={Cross} alt="cross" /></i>
                                                    </h4>
                                                 
                                                </div>
                                                <h6>Social security Received</h6>
                                            </div>
                                        </div>
                                        <div className="overview-row">
                                            <div className="overview-item overview-inline">
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>{this.state.overviewData&&this.state.overviewData[0].male_population} </span>
                                                        <i className=""> <img src={Man} alt="man" /></i>
                                                    </h4>
                                                    <h4>
                                                        <span>{this.state.overviewData&&this.state.overviewData[0].female_population} </span>
                                                        <i className=""> <img src={Women} alt="man" /></i>
                                                    </h4>
                                                    
                                                </div>
                                                <h6>population counts</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


        )
    }
}
export default Overview ;
