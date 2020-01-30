import React, { Component } from 'react'
import Man from '../../../img/man-shape.png';
import Women from '../../../img/women-shape.png';
import Cross from '../../../img/cross.png';
import Check from '../../../img/check.png';
import YellowMan from '../../../img/man-shape-yellow.png';
import DarkWoman from '../../../img/woman-shape-dark.png'

class SocialSecurity extends Component {
    render() {
        const socialData = this.props.moreoverviewData
        const percent = (socialData.social_security_received / (socialData.social_security_received + socialData.social_security_not_received)) * 100
        // console.log(socialData[0])
        return (
            <div className="overview-row">
                <div className="overview-item overview-inline">
                    <div className="overview-data">
                        <h4>
                            <span>{socialData.social_security_received}  </span>
                            <i className=""> <img src={Check} alt="check" /></i>
                        </h4>
                        <h4>
                            <span>{socialData.social_security_not_received}  </span>
                            <i className=""> <img src={Cross} alt="cross" /></i>
                        </h4>
                    </div>
                    <h6>Social security Received</h6>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{ width: `${percent.toFixed(2)}%`, backgroundColor: 'white' }}></span>
                        </div>
                        <span className="progress-result">
                            {((socialData.social_security_received / (socialData.social_security_received + socialData.social_security_not_received)) * 100).toFixed(2)}%
                    </span>
                    </div>
                </div>
                <div className="overview-item overview-inline">
                    <div className="overview-data">
                        <h4>
                            <span>{socialData.male_population}  </span>
                            <i className=""> <img src={Man} alt="check" /></i>
                        </h4>
                        <h4>
                            <span>{socialData.female_population}  </span>
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
                            <span>  {((socialData.male_population / socialData.total_population) * 100).toFixed(2)}%</span>
                        </div>
                        <div className="male-female-item">
                            <i><img src={DarkWoman} alt="women" /></i>
                            <span>  {((socialData.female_population / socialData.total_population) * 100).toFixed(2)}%</span>
                        </div>
                    </div>
                </div>
                <div className="overview-item">
                    <div className="overview-data">
                        <h4>{socialData.total_population}</h4>
                        <h6>Total population</h6>
                    </div>

                </div>
            </div>
        )
    }
}
export default SocialSecurity;
