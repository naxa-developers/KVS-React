import React, { Component } from 'react'
import Man from '../../img/man-shape.png';
import Women from '../../img/women-shape.png';
import Cross from '../../img/cross.png';
import Check from '../../img/check.png';

 class Overview extends Component {
    render() {
        return (
            <div className="overview">
                            <div className="overview-header">
                                <h3>Overview</h3>
                                <button role="button" className="common-button-border">View more</button>
                            </div>
                            <div className="overview-body">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="overview-row">
                                            <div className="overview-item">
                                                <div className="overview-data">
                                                    <h4>124</h4>
                                                    <h6>Total houses</h6>
                                                </div>

                                            </div>
                                            <div className="overview-item">
                                                <div className="overview-data">
                                                    <h4>47,982</h4>
                                                    <h6>Total population</h6>
                                                </div>

                                            </div>
                                            <div className="overview-item overview-inline">
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>27,632</span>
                                                        <i className=""> <img src={Man} alt="man" /></i>
                                                    </h4>
                                                    <h6>House ownership</h6>
                                                </div>
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>20,350 </span>
                                                        <i className=""> <img src={Women} alt="man" /></i>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="overview-row">
                                            <div className="overview-item overview-inline">
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>55</span>
                                                        <i className=""> <img src={Check} alt="check" /></i>
                                                    </h4>
                                                    <h6>Social security Received</h6>
                                                </div>
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>69 </span>
                                                        <i className=""> <img src={Cross} alt="cross" /></i>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overview-row">
                                            <div className="overview-item overview-inline">
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>27,632</span>
                                                        <i className=""> <img src={Man} alt="man" /></i>
                                                    </h4>
                                                    <h6>population counts</h6>
                                                </div>
                                                <div className="overview-data">
                                                    <h4>
                                                        <span>20,350 </span>
                                                        <i className=""> <img src={Women} alt="man" /></i>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


        )
    }
}
export default Overview;
