import React, { Component } from 'react'

 class FamilyNo extends Component {

    calculateData = (a,b) => {
        return (
            ((a/b)*100).toFixed(2)
        )
    }
    render() {
        const familyData = this.props.moreoverviewData
        const totalFamilies= familyData.member_2_to_4 + familyData.member_4_to_6 + familyData.member_6_to_8 + familyData.member_8_to_10 + familyData.member_above_10
        return (
            <div className="overview-row label-row">
            <h5>No. of family members</h5>
            <div className="overview-item ">
                <label>2 -4 nos.</label>
                <div className="overview-content">
                    <h4>{familyData.member_2_to_4}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:`${this.calculateData(familyData.member_2_to_4,totalFamilies)}%`}}></span>
                        </div>
                        <span className="progress-result">
                            {((familyData.member_2_to_4/totalFamilies)*100).toFixed(2)}%
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>4 - nos.</label>
                <div className="overview-content">
                    <h4>{familyData.member_4_to_6}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:`${this.calculateData(familyData.member_4_to_6,totalFamilies)}%`}}></span>
                        </div>
                        <span className="progress-result">
                            {((familyData.member_4_to_6/totalFamilies)*100).toFixed(2)}%
                        </span>
                    </div>
                </div>

            </div>
            <div className="overview-item ">
                <label>6 - 8 nos.</label>
                <div className="overview-content">
                    <h4>{familyData.member_6_to_8}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:`${this.calculateData(familyData.member_6_to_8,totalFamilies)}%`}}></span>
                        </div>
                        <span className="progress-result">
                            {((familyData.member_6_to_8/totalFamilies)*100).toFixed(2)}%
                        </span>
                    </div>
                </div>
            </div>
            <div className="overview-item ">
                <label>8 - 10 nos.</label>
                <div className="overview-content">
                    <h4>{familyData.member_8_to_10}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:`${this.calculateData(familyData.member_8_to_10,totalFamilies)}%`}}></span>
                        </div>
                        <span className="progress-result">
                            {((familyData.member_8_to_10/totalFamilies)*100).toFixed(2)}%
                        </span>
                    </div>
                </div>

            </div>
            <div className="overview-item ">
                <label>Above 10 nos.</label>
                <div className="overview-content">
                    <h4>{familyData.member_above_10}</h4>
                    <div className="progress-data flex-data">
                        <div className="progress-wrapper">
                            <span className="progress-value" style={{width:`${this.calculateData(familyData.member_above_10,totalFamilies)}%`}}></span>
                        </div>
                        <span className="progress-result">
                            {((familyData.member_above_10/totalFamilies)*100).toFixed(2)}%
                        </span>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
export default FamilyNo;
