import React, { Component } from "react";
import { Pie, Doughnut } from "react-chartjs-2";

class EducationChart extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }


  calculateData = (a, b) => {
    return ((a / b) * 100).toFixed(2);
  };

  educationData = () => {
    const educationData = this.props.educationDataValue
    let illiterate = 0;
    let literate = 0;
    let secondary = 0;
    let basicLevel = 0;
    let graduate = 0;
    // console.log('education', educationData)
    educationData && educationData.map((data) => {
      if (data == 'Illiterate') {
        illiterate = illiterate + 1
      }
      if (data == 'Basic Level 1') {
        basicLevel = basicLevel + 1
      }
      if (data == 'Literate / ordinary') {
        literate = literate + 1
      }
      if (data == 'Secondary level 9') {
        secondary = secondary + 1
      }
      if (data == 'Graduate'||  data =='Bachelor Degree' || data =='PHD') {
        graduate = graduate + 1
      }
    })
    //  console.log(graduate,'graduate Data');
    this.state.illiterateValue = illiterate
    this.state.literateValue = literate
    this.state.secondaryValue = secondary
    this.state.basicLevelValue = basicLevel
    this.state.graduateValue = graduate
  }

  render() {
    this.educationData()
    const data = {
      labels: [
        "Illiterate",
        "Literate",
        "Secondary",
        "Basic Level 1",
        "Graduate"
      ],
      datasets: [
        {
          data: [
            this.state.illiterateValue,
            this.state.literateValue,
            this.state.secondaryValue,
            this.state.basicLevelValue,
            this.state.graduateValue
          ],
          backgroundColor: [
            "#6dbd25",
            "#36A2EB",
            "#FFCE56",
            "#e6326c",
            "#e66317"
          ],
          borderColor: "black",
          borderWidth: 0.25,
          hoverBackgroundColor: ["#fff", "#fff", "#fff", "#fff", "#fff"]
        }
      ]
    };

    return (
      <div className="overview-row label-row">
        <h5>Level of Education</h5>
        <div className="overview-item ">
          {this.props.householdData && <Doughnut
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

export default EducationChart;
