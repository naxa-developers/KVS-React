import React, { Component } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { withRouter } from "react-router-dom";

class LanguageChart extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  calculateData = (a, b) => {
    return ((a / b) * 100).toFixed(2);
  };

  languageData = () => {
    const languageData = this.props.languageDataValue
    let nepaliCount = 0;
    let maithiliCount = 0;
    let tharuCount = 0;
    let others = 0;
    languageData && languageData.map((data) => {
      if (data === 'Nepali') {
        nepaliCount = nepaliCount + 1
      }
      else if (data === 'Maithi') {
        maithiliCount = maithiliCount + 1
      }
      else if (data === 'Tharu') {
        tharuCount = tharuCount + 1
      }
      else {
        others = others + 1
      }
    })
    this.state.nepaliCountVal = nepaliCount
    this.state.maithiliCountVal = maithiliCount
    this.state.tharuCountVal = tharuCount
    this.state.othersVal = others
  }

  render() {
    this.languageData()
    const data = {
      labels: ["Nepali", "Tharu", "Maithili", "Other"],
      datasets: [
        {
          label: "in percent (%)",
          data: [
            this.state.nepaliCountVal,
            this.state.tharuCountVal,
            this.state.maithiliCountVal,
            this.state.othersVal
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#e20e52"],
          borderColor: "black",
          borderWidth: 0.25,
          hoverBackgroundColor: ["#fff", "#fff", "#fff", "#fff"]
        }
      ]
    };

    return (
      <div className="overview-row label-row">
        <h5>Mother Tongue</h5>
        <div className="overview-item ">
          {this.props.householdData && <Pie
            data={data}
            options={{
              legend: {
                labels: {
                  fontColor: "white",
                  fontSize: 12,
                  fontStyle: "bold"
                }
              }
            }}
          />}
        </div>
      </div>
    );
  }
}

export default LanguageChart;
