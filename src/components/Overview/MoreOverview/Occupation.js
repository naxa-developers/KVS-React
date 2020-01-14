import React, { Component } from 'react'

 class Occupation extends Component {

    calculateValue = (a,b) => {
        return(((a/b)*100).toFixed(2))
    }
    render() {
        const occupationData = this.props.moreoverviewData
        let totalOccuptaion = occupationData.occupation_agriculture + occupationData.occupation_agriculture_wages + occupationData.occupation_daily_wages + occupationData.occupation_government_service + occupationData.occupation_non_government_service + occupationData.occupation_foreign_employment + occupationData.occupation_entrepreneur + occupationData.occupation_business + occupationData.occupation_labour_india + occupationData.occupation_foreign_labour_nepal + occupationData.occupation_student + occupationData.occupation_other
        return (
            <div className="overview-row label-row">
            <h5>Occupation</h5>
            <div className="overview-item ">
                <label>Agriculture</label>
                <div className="overview-content">
                    <h4>{occupationData.occupation_agriculture}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:`${this.calculateValue(occupationData.occupation_agriculture,totalOccuptaion)}%`}}></span>
                        </div>
                        <span className="progress-result">
                           {this.calculateValue(occupationData.occupation_agriculture, totalOccuptaion)}%
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
                            <span className="progress-value" style={{width:`${this.calculateValue(occupationData.occupation_business,totalOccuptaion)}%`}}></span>
                        </div>
                        <span className="progress-result">
                            {this.calculateValue(occupationData.occupation_business, totalOccuptaion)}%
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
                            <span className="progress-value" style={{width:`${this.calculateValue(occupationData.occupation_foreign_employment,totalOccuptaion)}%`}}></span>
                        </div>
                        <span className="progress-result">
                             {this.calculateValue(occupationData.occupation_foreign_employment, totalOccuptaion)}%
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
                            <span className="progress-value" style={{width:`${this.calculateValue(occupationData.occupation_other,totalOccuptaion)}%`}}></span>
                        </div>
                        <span className="progress-result">
                            {this.calculateValue(occupationData.occupation_other, totalOccuptaion)}%
                        </span>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
export default Occupation;
