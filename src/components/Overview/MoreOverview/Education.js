import React, { Component } from 'react'

 class Education extends Component {
    render() {
        return (
            <div className="overview-row label-row">
            <h5>Level of education</h5>
            <div className="overview-item ">
                <label>Illiterate</label>
                <div className="overview-content">
                    <h4>8,486</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:'50%'}}></span>
                        </div>
                        <span className="progress-result">
                            31%
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>literate</label>
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
                <label>Secondary level (9-12)</label>
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
        </div>
        )
    }
}
export default Education;
