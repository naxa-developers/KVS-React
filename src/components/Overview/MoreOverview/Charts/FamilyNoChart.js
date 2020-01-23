import React, { Component } from 'react'
import {HorizontalBar} from 'react-chartjs-2'

class FamilyNoChart extends Component {

    calculateData = (a,b) => {
        return (
            ((a/b)*100).toFixed(2)
        )
    }

    render() {
        const familyData = this.props.moreoverviewData
        const totalFamilies= familyData.member_2_to_4 + familyData.member_4_to_6 + familyData.member_6_to_8 + familyData.member_8_to_10 + familyData.member_above_10
        const data = {
            labels: ['2 - 4 nos.', '4 - 6 nos.', '6 - 8 nos.', '8 - 10 nos.', 'Above 10 nos.'],
            datasets: [
              {
                label: 'In Percent (%)',
                backgroundColor: '#49d6bb',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 0.25,
                hoverBackgroundColor: '#fff',
                data: [
                    ((familyData.member_2_to_4/totalFamilies)*100).toFixed(2),
                    ((familyData.member_4_to_6/totalFamilies)*100).toFixed(2),
                    ((familyData.member_6_to_8/totalFamilies)*100).toFixed(2),
                    ((familyData.member_8_to_10/totalFamilies)*100).toFixed(2),
                    ((familyData.member_above_10/totalFamilies)*100).toFixed(2)
                  ]
              }
            ]
          }
          
        return (
            <div className="overview-row label-row">
                <h5>No. of family members</h5>
                <div className="overview-item ">
                    <HorizontalBar data={data} options={{
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

export default FamilyNoChart