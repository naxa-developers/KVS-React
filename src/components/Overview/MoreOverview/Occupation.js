import React, { Component } from 'react'

 class Occupation extends Component {
    render() {
        const occupationData = this.props.moreoverviewData
        return (
            <div className="overview-row label-row">
            <h5>Occupation</h5>
            <div className="overview-item ">
                <label>Agriculture</label>
                <div className="overview-content">
                    <h4>{occupationData.occupation_agriculture}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            54%
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>Business</label>
                <div className="overview-content">
                    <h4>{occupationData.occupation_business}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            15%
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>Foreign employment</label>
                <div className="overview-content">
                    <h4>{occupationData.occupation_foreign_employment}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            6%
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>Others</label>
                <div className="overview-content">
                    <h4>{occupationData.occupation_other}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            6%
                        </span>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
export default Occupation;
