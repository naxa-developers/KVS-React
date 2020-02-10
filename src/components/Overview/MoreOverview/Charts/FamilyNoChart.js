import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'

class FamilyNoChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value02Data: '',
            value24Data: '',
            value46Data: '',
            value68Data: '',
            value810Data: '',
            value10AData: '',
            totalCount: ''
        }
    }

    familyData = () => {
        const familyData = this.props.familyDataValue
        let value02 = 0;
        let value24 = 0;
        let value46 = 0;
        let value68 = 0;
        let value810 = 0;
        let value10A = 0;
        let total = 0;
        familyData && familyData.map((data) => {
            if (data >= 0 && data < 2) {
                value02 = value02 + 1
            }
            if (data >= 2 && data < 4) {
                value24 = value24 + 1
            }
            if (data >= 4 && data < 6) {
                value46 = value46 + 1
            }
            if (data >= 6 && data < 8) {
                value68 = value68 + 1
            }
            if (data >= 8 && data < 10) {
                value810 = value810 + 1
            }
            if (data >= 10) {
                value10A = value10A + 1
            }
            total = total + 1
        })
        this.state.value02Data = value02
        this.state.value24Data = value24
        this.state.value46Data = value46
        this.state.value68Data = value68
        this.state.value810Data = value810
        this.state.value10AData = value10A
        this.state.totalCount = total
    }

    render() {
        this.familyData()
        const data = {
            labels: ['0 - 2 nos.', '2 - 4 nos.', '4 - 6 nos.', '6 - 8 nos.', '8 - 10 nos.', 'Above 10 nos.'],
            datasets: [
                {
                    label: 'No. of Family',
                    backgroundColor: '#49d6bb',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 0.25,
                    hoverBackgroundColor: '#fff',
                    data: [
                        // ((this.state.value02Data / this.state.totalCount) * 100).toFixed(2),
                        // ((this.state.value24Data / this.state.totalCount) * 100).toFixed(2),
                        // ((this.state.value46Data / this.state.totalCount) * 100).toFixed(2),
                        // ((this.state.value68Data / this.state.totalCount) * 100).toFixed(2),
                        // ((this.state.value810Data / this.state.totalCount) * 100).toFixed(2),
                        // ((this.state.value10AData / this.state.totalCount) * 100).toFixed(2),
                        this.state.value02Data,
                        this.state.value24Data,
                        this.state.value46Data,
                        this.state.value68Data,
                        this.state.value810Data,
                        this.state.value10AData,
                    ]
                }
            ]
        }

        return (
            <div className="overview-row label-row">
                <h5>No. of family members</h5>
                <div className="overview-item ">
                    {this.props.householdData && <HorizontalBar data={data} options={{
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

export default FamilyNoChart