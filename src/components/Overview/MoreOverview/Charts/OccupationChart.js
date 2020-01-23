import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'

class OccupationChart extends Component {

    calculateValue = (a,b) => {
        return(((a/b)*100).toFixed(2))
    }

    render() {
        const occupationData = this.props.moreoverviewData
        let totalOccuptaion = occupationData.occupation_agriculture + occupationData.occupation_agriculture_wages + occupationData.occupation_daily_wages + occupationData.occupation_government_service + occupationData.occupation_non_government_service + occupationData.occupation_foreign_employment + occupationData.occupation_entrepreneur + occupationData.occupation_business + occupationData.occupation_labour_india + occupationData.occupation_foreign_labour_nepal + occupationData.occupation_student + occupationData.occupation_other
        const data = {
        // labels: [`Agriculture ${occupationData.occupation_agriculture}`, `Business ${occupationData.occupation_business}`, `Foreign employment ${occupationData.occupation_foreign_employment}`, `Others ${occupationData.occupation_other}`],
        labels: [`Agriculture`, `Business`, 'Foreign', `Others`],
        datasets: [
                {
                label: 'In Percent (%)',
                backgroundColor: '#F7D315',
                fontColor: 'red',
                borderColor:'black',
                borderWidth: 0.25,
                hoverBackgroundColor: '#fff',
                hoverBorderColor: '',
                data: [this.calculateValue(occupationData.occupation_agriculture, totalOccuptaion), this.calculateValue(occupationData.occupation_business, totalOccuptaion), this.calculateValue(occupationData.occupation_foreign_employment, totalOccuptaion), this.calculateValue(occupationData.occupation_other, totalOccuptaion)]
                }
            ]
        }

        return (
            <div className="overview-row label-row">
                <h5>Occupation</h5>
                <div className="overview-item ">
                    <Bar data={data} options= {{
                        legend: {
                            labels: {
                                fontColor: "white",
                                fontSize: 14,
                                fontStyle:'bold'
                            }
                        },
                        scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "#F7D315",
                                fontSize: 12,
                            },
                            gridLines: {
                                // display: false,
                                color: '#807ee6'
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "#F7D315",
                                fontSize: 12
                            },
                            gridLines: {
                                // display: false,
                                color: '#807ee6'
                            }
                        }],
                        
                    }
                    }} />
                </div>
            </div>
        )
    }
}

export default OccupationChart