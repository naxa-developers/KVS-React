import React, { Component } from 'react'

 class FamilyNo extends Component {
    render() {
        return (
            <div className="overview-row label-row">
            <h5>No. of family members</h5>
            <div className="overview-item ">
                <label>2 -4 nos.</label>
                <div className="overview-content">
                    <h4>28,486</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            54%;
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>4 - nos.</label>
                <div className="overview-content">
                    <h4>3,486</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            25%;
                        </span>
                    </div>
                </div>

            </div>
            <div className="overview-item ">
                <label>6 - 8 nos.</label>
                <div className="overview-content">
                    <h4>1,455</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            15%;
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>8 - 12 nos.</label>
                <div className="overview-content">
                    <h4>9,455</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            6%;
                        </span>
                    </div>
                </div>

            </div>

        </div>
        )
    }
}
export default FamilyNo;
