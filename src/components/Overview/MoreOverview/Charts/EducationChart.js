import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

class EducationChart extends Component {

    calculateData = (a,b) => {
        return (
            ((a/b)*100).toFixed(2)
        )
    }

    render() {
        const educationData = this.props.moreoverviewData
        const data = {
            labels: [
                'Illiterate',
                'Literate',
                'Secondary',
                'Basic Level 1',
                'Graduate'
            ],
            datasets: [{
                data: [educationData.edu_level_illiterate, educationData.edu_level_literate, educationData.edu_level_seconday,educationData.edu_level_basic_level_1,educationData.edu_level_graduate],
                backgroundColor: [
                '#6dbd25',
                '#36A2EB',
                '#FFCE56',
                '#e6326c',
                '#e66317'
                ],
                borderColor:'black',
                borderWidth: 0.25,
                hoverBackgroundColor: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
                ]
            }]
        }

        return (
            <div className="overview-row label-row">
                <h5>Level of Education</h5>
                <div className="overview-item ">
                    <Pie data={data} options={{
                        legend: {
                            labels: {
                                fontColor: "white",
                                fontSize: 12,
                                fontStyle:'bold'
                            }
                        }
                    }} />
                </div>
            </div>
        )
    }
}

export default EducationChart
