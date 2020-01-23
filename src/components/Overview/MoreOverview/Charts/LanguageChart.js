import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

class LanguageChart extends Component {

    calculateData = (a,b) => {
        return (
            ((a/b)*100).toFixed(2)
        )
    }

    render() {
        const languageData = this.props.moreoverviewData
        let otherData= languageData.mother_tongue_tamang + languageData.mother_tongue_other + languageData.mother_tongue_newari + languageData.mother_tongue_limbu + languageData.mother_tongue_rajbanshi

        const data = {
            labels: [
                'Nepali',
                'Tharu',
                'Maithili',
                'other'
            ],
            datasets: [{
                label: 'in percent (%)',
                data: [this.calculateData((languageData.total_population-languageData.mother_tongue_tharu-languageData.mother_tongue_maithi-otherData),languageData.total_population),this.calculateData(languageData.mother_tongue_tharu,languageData.total_population),this.calculateData(languageData.mother_tongue_maithi,languageData.total_population), this.calculateData(otherData,languageData.total_population)],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#e20e52'
                ],
                borderColor:'black',
                borderWidth: 0.25,
                hoverBackgroundColor: [
                '#fff',
                '#fff',
                '#fff',
                '#fff'
                ]
            }]
        }

        return (
            <div className="overview-row label-row">
            <h5>Mother Tongue</h5>
                <div className="overview-item ">
                <h5 style={{textAlign:'center'}}>in percent (%)</h5>
                    <Doughnut data={data} options={{
                        legend: {
                            labels: {
                                fontColor: "white",
                                fontSize: 12,
                                fontStyle:'bold'
                            }
                        },
                        scales: {
                            
                        }
                    }} />
                </div>
            </div>
        )
    }
}

export default LanguageChart
