import React, { Component } from 'react'

class Language extends Component {
    render() {
        return (
            <div className="overview-row label-row">
                                    <h5>Mother Tongue</h5>
                                    <div className="overview-item ">
                                        <label>Nepali</label>
                                        <div className="overview-content">
                                            <h4>8,486</h4>
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
                                        <label>Tharu</label>
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
                                        <label>maithili</label>
                                        <div className="overview-content">
                                            <h4>1,455</h4>
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
                                </div>
        )
    }
}
export default Language;
