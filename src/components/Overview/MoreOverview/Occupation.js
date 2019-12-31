import React, { Component } from 'react'

 class Occupation extends Component {
    render() {
        return (
            <div className="overview-row label-row">
            <h5>Occupation</h5>
            <div className="overview-item ">
                <label>Agriculture</label>
                <div className="overview-content">
                    <h4>28,486</h4>
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
                <label>Government service</label>
                <div className="overview-content">
                    <h4>3,486</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            25%
                        </span>
                    </div>
                </div>

            </div>
            <div className="overview-item ">
                <label>seasnal labor</label>
                <div className="overview-content">
                    <h4>1,455</h4>
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
                    <h4>9,455</h4>
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
                <label>Agriculture wages</label>
                <div className="overview-content">
                    <h4>9,455</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            21%
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>Others</label>
                <div className="overview-content">
                    <h4>9,455</h4>
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
