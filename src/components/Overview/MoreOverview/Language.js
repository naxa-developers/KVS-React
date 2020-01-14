import React, { Component } from 'react'

class Language extends Component {

    calculateData = (a,b) => {
        return (
            ((a/b)*100).toFixed(2)
        )
    }

    render() {
        const languageData = this.props.moreoverviewData
        let otherData= languageData.mother_tongue_tamang + languageData.mother_tongue_other + languageData.mother_tongue_newari + languageData.mother_tongue_limbu + languageData.mother_tongue_rajbanshi
        return (
            <div className="overview-row label-row">
                <h5>Mother Tongue</h5>
                <div className="overview-item ">
                    <label>Nepali</label>
                    <div className="overview-content">
                        <h4>{languageData.total_population}</h4>
                        <div className="progress-data flex-data">
                            <div className="progress-wrapper">
                                <span className="progress-value" style={{width:`${this.calculateData(languageData.total_population,languageData.total_population)}%`}}></span>
                            </div>
                            <span className="progress-result">
                                {this.calculateData(languageData.total_population,languageData.total_population)}%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="overview-item ">
                    <label>Tharu</label>
                    <div className="overview-content">
                        <h4>{languageData.mother_tongue_tharu}</h4>
                        <div className="progress-data flex-data">
                            <div className="progress-wrapper">
                                <span className="progress-value" style={{width:`${this.calculateData(languageData.mother_tongue_tharu,languageData.total_population)}%`}}></span>
                            </div>
                            <span className="progress-result">
                                {this.calculateData(languageData.mother_tongue_tharu,languageData.total_population)}%
                            </span>
                        </div>
                    </div>

                </div>
                <div className="overview-item ">
                    <label>maithili</label>
                    <div className="overview-content">
                        <h4>{languageData.mother_tongue_maithi}</h4>
                        <div className="progress-data flex-data">
                            <div className="progress-wrapper">
                                <span className="progress-value" style={{width:`${this.calculateData(languageData.mother_tongue_maithi,languageData.total_population)}%`}}></span>
                            </div>
                            <span className="progress-result">
                                 {this.calculateData(languageData.mother_tongue_maithi,languageData.total_population)}%
                            </span>
                        </div>
                    </div>

                </div>
                <div className="overview-item ">
                    <label>other</label>
                    <div className="overview-content">
                        <h4>{otherData}</h4>
                        <div className="progress-data flex-data">
                            <div className="progress-wrapper">
                                <span className="progress-value" style={{width:`${this.calculateData(otherData,languageData.total_population)}%`}}></span>
                            </div>
                            <span className="progress-result">
                                {this.calculateData(otherData,languageData.total_population)}%
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Language;
