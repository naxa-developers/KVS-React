import React, { Component } from "react";
import Header from "../../partials/Header";
import { Link } from "react-router-dom";
import Parent from "../../Parent";
import SocialSecurity from "./SocialSecurity";
import Education from "./Education";
import Language from "./Language";
import FamilyNo from "./FamilyNo";
import Occupation from "./Occupation";
import ScrollBar from "react-perfect-scrollbar";
import Main from "../../MainContent/Main";
import Axios from "axios";
import LanguageChart from "./Charts/LanguageChart";
import FamilyNoChart from "./Charts/FamilyNoChart";
import OccupationChart from "./Charts/OccupationChart";
import EducationChart from "./Charts/EducationChart";

class MoreOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
      malePopnCount: '',
      femalePopnCount: '',
      securityReceivedCount: '',
      securityNotReceivedCount: '',
      familyDataValue: '',
      malePopnCountNo: '',
      femalePopnCountNo: '',
      educationDataValue: ''
    };
  }

  // fetchedMoreOverview = () => {
  //   Axios({
  //     method: 'get',
  //     url: 'http://139.59.67.104:8019/api/v1/overview',
  //     headers: {
  //       Authorization: `Token ${this.state.token}`
  //     }
  //   })
  //     .then(res => {
  //       this.setState({
  //         moreoverviewData: res.data.data[0]
  //       });
  //     });
  // };

  // componentDidMount() {
  //   this.fetchedMoreOverview();
  // }

  fetchData = () => {
    let malePopn = 0;
    let femalePopn = 0;
    let securityReceived = 0;
    let securityNotReceived = 0;
    let familySize = 0;
    let familyData = [];
    let malePopnNo = 0;
    let femalePopnNo = 0;
    let languageData = [];
    let educationData = [];
    let occupationData = [];
    this.props.householdData && this.props.householdData.map((data) => {
      if (data.owner_sex === 'Male') {
        malePopn = malePopn + 1
      }
      if (data.owner_sex === 'Female') {
        femalePopn = femalePopn + 1
      }
      if (data.social_security_received === true) {
        securityReceived = securityReceived + 1
      }
      if (data.social_security_received === false) {
        securityNotReceived = securityNotReceived + 1
      }
      familySize = familySize + data.family_size
      familyData.push(data.family_size)
      malePopnNo = malePopnNo + data.male_number
      femalePopnNo = femalePopnNo + data.female_number
      languageData.push(data.mother_tongue)
      educationData.push(data.owner_education)
      occupationData.push(data.main_occupation)
    })
    this.state.femalePopnCount = femalePopn
    this.state.malePopnCount = malePopn
    this.state.securityReceivedCount = securityReceived
    this.state.securityNotReceivedCount = securityNotReceived
    this.state.familyCount = familySize
    this.state.familyDataValue = familyData
    this.state.malePopnCountNo = malePopnNo
    this.state.femalePopnCountNo = femalePopnNo
    this.state.languageDataValue = languageData
    this.state.educationDataValue = educationData
    this.state.occupationDataValue = occupationData
  };

  render() {
    this.fetchData()
    return (
      <div className="kvs-wrapper">
        <div className="container-fluid main-wrapper p-0">
          <aside className="sidebar">
            <div className="card">
              {/* <Header /> */}
              <div style={{ height: "100vh" }}>
                <ScrollBar component="div">
                  <div className="card-body">
                    <div className="overview overview-list">
                      <div className="overview-header">
                        <h3>
                          <Link to="/home">
                            <i
                              className="material-icons"
                              style={{ color: "white" }}
                              onClick={() => this.props.clicked()}
                            >
                              keyboard_backspace
                            </i>
                          </Link>
                          <span>Overview</span>
                        </h3>
                      </div>
                      <div className="overview-body">
                        <SocialSecurity
                          moreoverviewData={this.props.householdData && this.state.moreoverviewData}
                          securityReceivedCount={this.props.householdData && this.state.securityReceivedCount}
                          securityNotReceivedCount={this.props.householdData && this.state.securityNotReceivedCount}
                          familyCount={this.props.householdData && this.state.familyCount}
                          malePopnCountNo={this.props.householdData && this.state.malePopnCountNo}
                          femalePopnCountNo={this.props.householdData && this.state.femalePopnCountNo}
                        />
                        <EducationChart
                          householdData={this.props.householdData}
                          educationDataValue={this.props.householdData && this.state.educationDataValue}
                        />
                        <FamilyNoChart
                          householdData={this.props.householdData}
                          familyDataValue={this.props.householdData && this.state.familyDataValue}
                          familyCount={this.props.householdData && this.state.familyCount}
                        />
                        <LanguageChart
                          householdData={this.props.householdData}
                          languageDataValue={this.props.householdData && this.state.languageDataValue}
                        />
                        <OccupationChart
                          householdData={this.props.householdData}
                          occupationDataValue={this.props.householdData && this.state.occupationDataValue}
                        />
                      </div>
                    </div>
                  </div>
                </ScrollBar>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
export default MoreOverview;
