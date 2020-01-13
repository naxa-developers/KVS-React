import React, { Component } from "react";
import Header from "../../partials/Header";
import {
  Link
} from "react-router-dom";
import Parent from "../../Parent";
import SocialSecurity from "./SocialSecurity";
import Education from "./Education";
import Language from "./Language";
import FamilyNo from "./FamilyNo";
import Occupation from "./Occupation";
import ScrollBar from "react-perfect-scrollbar";
import Main from "../../MainContent/Main";
import Axios from "axios";

class MoreOverview extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       moreoverviewData: ''
    }
  }

  fetchedMoreOverview = () => {
    Axios.get(`http://139.59.67.104:8019/api/v1/overview`)
        .then(res => {
            this.setState({
                moreoverviewData: res.data.data[0]
            })
            // console.log(this.state.moreoverviewData[0]);
            
        })
  }

  componentDidMount() {
    this.fetchedMoreOverview()
  }
  
  render() {
    return (
      <body className="">
        <div className="kvs-wrapper">
          <div className="container-fluid main-wrapper p-0">
            <aside className="sidebar">
              <div className="card">
                <Header />
                <div style={{ height: "100vh" }}>
                <ScrollBar component="div">
                <div className="card-body">
                  <div className="overview overview-list">
                    <div className="overview-header">
                      <h3>
                        <Link to='/home'><i className="material-icons" style={{color:"white"}}onClick={()=> this.props.clicked()}>keyboard_backspace</i> </Link>
                        <span>Overview</span>
                      </h3>
                    </div>
                    <div className="overview-body">

                        <SocialSecurity moreoverviewData={this.state.moreoverviewData} />
                        <Education moreoverviewData={this.state.moreoverviewData}/>
                        <Language moreoverviewData={this.state.moreoverviewData}/>
                        <FamilyNo moreoverviewData={this.state.moreoverviewData}/>
                        <Occupation moreoverviewData={this.state.moreoverviewData}/>
                    </div>
                  </div>
                </div>
               
                </ScrollBar>
                </div>
              </div>
            </aside>

            {/* <Main        householdData={this.state.householdData}
          searchTable = {this.searchTable}
          markerref={this.markerref}/> */}
          </div>
        </div>
      </body>
    );
  }
}
export default MoreOverview;
