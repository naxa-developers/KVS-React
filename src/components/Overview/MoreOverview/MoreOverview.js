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
      moreoverviewData: "",
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
    };
  }

  fetchedMoreOverview = () => {
    Axios({
      method: 'get',
      url: 'http://139.59.67.104:8019/api/v1/overview',
      headers: {
        Authorization: `Token ${this.state.token}`
      }
    })
      .then(res => {
        this.setState({
          moreoverviewData: res.data.data[0]
        });
      });
  };

  componentDidMount() {
    this.fetchedMoreOverview();
  }

  render() {
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
                          moreoverviewData={this.state.moreoverviewData}
                        />
                        <EducationChart
                          moreoverviewData={this.state.moreoverviewData}
                        />
                        <FamilyNoChart
                          moreoverviewData={this.state.moreoverviewData}
                        />
                        <LanguageChart
                          moreoverviewData={this.state.moreoverviewData}
                        />
                        <OccupationChart
                          moreoverviewData={this.state.moreoverviewData}
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
