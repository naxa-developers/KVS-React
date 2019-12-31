import React, { Component } from 'react'
import Man from '../../../img/man-shape.png';
import Women from '../../../img/women-shape.png';
import Cross from '../../../img/cross.png';
import Check from '../../../img/check.png';
import YellowMan from '../../../img/man-shape-yellow.png';
import DarkWoman from '../../../img/woman-shape-dark.png'

 class SocialSecurity extends Component {
    render() {
        return (
            <div className="overview-row">
            <div className="overview-item overview-inline">
                <div className="overview-data">
                    <h4>
                        <span>55</span>
                        <i className=""> <img src={Check}alt="check" /></i>
                    </h4>
                    <h4>
                        <span>69 </span>
                        <i className=""> <img src={Cross} alt="cross" /></i>
                    </h4>
                </div>
                <h6>Social security Received</h6>
                <div className="progress-data flex-data">
                    <div className="progress-wrapper">
                        <span className="progress-value" style={{width:'50%'}}></span>
                    </div>
                    <span className="progress-result">
                        44.35%
                    </span>
                </div>
            </div>
            <div className="overview-item overview-inline">
                <div className="overview-data">
                    <h4>
                        <span>27,632</span>
                        <i className=""> <img src={Man} alt="check" /></i>
                    </h4>
                    <h4>
                        <span>20,350 </span>
                        <i className=""> <img src={Women} alt="cross" /></i>
                    </h4>
                </div>
                <h6>Population Counts</h6>
                <div className="progress-data">
                    <div className="progress-wrapper">
                        <span className="progress-value" style={{width:'50%'}}></span>
                    </div>
                </div>
                <div className="male-female-percent">
                    <div className="male-female-item">
                        <i><img src={YellowMan} alt="men" /></i>
                        <span>57.59% </span>
                    </div>
                    <div className="male-female-item">
                        <i><img src={DarkWoman} alt="women" /></i>
                        <span>57.59% </span>
                    </div>
                </div>
            </div>
            <div className="overview-item">
                <div className="overview-data">
                    <h4>47,982</h4>
                    <h6>Total population</h6>
                </div>

            </div>
        </div>
        )
    }
}
export default SocialSecurity;
