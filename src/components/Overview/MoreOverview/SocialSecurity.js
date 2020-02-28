import React, { Component } from 'react'
import Man from '../../../img/man-shape.png';
import Women from '../../../img/women-shape.png';
import Cross from '../../../img/cross.png';
import Check from '../../../img/check.png';
import YellowMan from '../../../img/man-shape-yellow.png';
import DarkWoman from '../../../img/woman-shape-dark.png'

class SocialSecurity extends Component {

    calcVal = (a, b) => {
        return ((a / b) * 100).toFixed(2);
    }

    render() {
        // const socialData = this.props.moreoverviewData
        // const percent = (socialData.social_security_received / (socialData.social_security_received + socialData.social_security_not_received)) * 100
        // console.log(socialData[0])
        const percent = (this.props.securityReceivedCount / (this.props.securityReceivedCount + this.props.securityNotReceivedCount)) * 100
        return (
            <div className="overview-row">
                <div className="overview-item overview-inline">
                    <div className="overview-data">
                        <h4>
                            <span>{this.props.securityReceivedCount}  </span>
                            <i className=""> <img src={Check} alt="check" /></i>
                        </h4>
                        <h4>
                            <span>{this.props.securityNotReceivedCount}  </span>
                            <i className=""> <img src={Cross} alt="cross" /></i>
                        </h4>
                    </div>
                    <h6>Social security Received (In Family)</h6>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{ width: `${percent}%`, backgroundColor: 'white' }}></span>
                        </div>
                        <span className="progress-result">
                            {((this.props.securityReceivedCount / (this.props.securityReceivedCount + this.props.securityNotReceivedCount)) * 100).toFixed(2)}%
                    </span>
                    </div>
                </div>

                <div className="overview-item overview-inline">
                    <div className="overview-data">
                        <h4>
                            <span>{this.props.familySocialReceivedCount}  </span>
                            <i className=""> <img src={Check} alt="check" /></i>
                        </h4>
                        <h4>
                            <span>{this.props.familySocialNotReceivedCount}  </span>
                            <i className=""> <img src={Cross} alt="cross" /></i>
                        </h4>
                    </div>
                    <h6>Social security Received</h6>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{ width: `${percent}%`, backgroundColor: 'cyan' }}></span>
                        </div>
                        <span className="progress-result">
                            {((this.props.familySocialReceivedCount / (this.props.familySocialReceivedCount + this.props.familySocialNotReceivedCount)) * 100).toFixed(2)}%
                    </span>
                    </div>
                </div>

                <div className="overview-item overview-inline">
                    <div className="overview-data">
                        <h4>
                            <span>{this.props.malePopnCountNo}  </span>
                            <i className=""> <img src={Man} alt="check" /></i>
                        </h4>
                        <h4>
                            <span>{this.props.femalePopnCountNo}  </span>
                            <i className=""> <img src={Women} alt="cross" /></i>
                        </h4>
                    </div>
                    <h6>Population Counts</h6>
                    <div className="progress-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{ width: '50%' }}></span>
                        </div>
                    </div>
                    <div className="male-female-percent">
                        <div className="male-female-item">
                            <i><img src={YellowMan} alt="men" /></i>
                            <span>  {this.calcVal(this.props.malePopnCountNo, this.props.familyCount)}%</span>
                        </div>
                        <div className="male-female-item">
                            <i><img src={DarkWoman} alt="women" /></i>
                            <span>{this.calcVal(this.props.femalePopnCountNo, this.props.familyCount)}%</span>
                        </div>
                    </div>
                </div>
                <div className="overview-item">
                    <div className="overview-data">
                        <h4>{this.props.familyCount}</h4>
                        <h6>Total population</h6>
                    </div>

                </div>
            </div>
        )
    }
}
export default SocialSecurity;
