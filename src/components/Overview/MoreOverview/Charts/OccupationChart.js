import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class OccupationChart extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    calculateValue = (a, b) => {
        return (((a / b) * 100).toFixed(2))
    }

    occupationData = () => {
        const occupationData = this.props.occupationDataValue
        let agriculture = 0;
        let business = 0;
        let foreign = 0;
        let dailyWage = 0;
        let others = 0;
        occupationData && occupationData.map((data) => {
            if (data === " Agriculture" || data === " Agriculture Wages") {
                agriculture = agriculture + 1
            }
            else if (data === "Business / business") {
                business = business + 1
            }
            else if (data === " Foreign employment") {
                foreign = foreign + 1
            }
            else if (data === " Daily wage") {
                dailyWage = dailyWage + 1
            }
            else {
                others = others + 1
            }
        })
        this.state.agricultureValue = agriculture
        this.state.businessValue = business
        this.state.foreignValue = foreign
        this.state.dailyWageValue = dailyWage
        this.state.othersValue = others
    }

    render() {
        this.occupationData()
        // const occupationData = this.props.moreoverviewData
        // let totalOccuptaion = occupationData.occupation_agriculture + occupationData.occupation_agriculture_wages + occupationData.occupation_daily_wages + occupationData.occupation_government_service + occupationData.occupation_non_government_service + occupationData.occupation_foreign_employment + occupationData.occupation_entrepreneur + occupationData.occupation_business + occupationData.occupation_labour_india + occupationData.occupation_foreign_labour_nepal + occupationData.occupation_student + occupationData.occupation_other
        const data = {
            labels: [`Agriculture`, `Business`, 'Foreign', 'Daily Wage', `Others`],
            datasets: [
                {
                    label: 'Value',
                    backgroundColor: '#F7D315',
                    fontColor: 'red',
                    borderColor: 'black',
                    borderWidth: 0.25,
                    hoverBackgroundColor: '#fff',
                    hoverBorderColor: '',
                    data: [
                        this.state.agricultureValue,
                        this.state.businessValue,
                        this.state.foreignValue,
                        this.state.dailyWageValue,
                        this.state.othersValue
                    ]
                }
            ]
        }

        return (
            <div className="overview-row label-row">
                <h5>Occupation</h5>
                <div className="overview-item ">
                    {this.props.householdData && <Bar data={data} options={{
                        legend: {
                            labels: {
                                fontColor: "white",
                                fontSize: 14,
                                fontStyle: 'bold'
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
                    }} />}
                </div>
            </div>
        )
    }
}

export default OccupationChart