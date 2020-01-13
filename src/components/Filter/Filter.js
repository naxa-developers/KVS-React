import React, { Component } from "react";
import Header from "../partials/Header";
import HeaderFilter from "../Filter/HeaderFilter";
import Overview from "../Overview/Overview";

import ScrollBar from "react-perfect-scrollbar";
import Axios from "axios";
import { LoopCircleLoading,SolarSystemLoading } from 'react-loadingg';

import TestFilter from "./TestFilter";
import MoreOverview from "../Overview/MoreOverview/MoreOverview";


class Filter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // Categories: [{ category: "Ward No", dropdown: ["Ward no. 1", "Ward no. 2", "Ward no. 3"] },
      // { category: "Education", dropdown: ["Slc", "+2", "Bachelor", "Masters", "PHD"] },
      // { category: "Age", dropdown: ["18-30", "31-40", "41-50", "51-60"] },
      // { category: "Number of Family Members", dropdown: ["2", "3", "4", "5+"] },
      // ]
      Categories: '',
      filterparam: [],
      isTrue: true
    }
  }

  clicked = () => {
    this.setState({
      isTrue: !this.state.isTrue
    })
  }

  fetchdropdown = () => {
    Axios.get("http://139.59.67.104:8019/api/v1/unique")
      .then((response) => {
        console.log(response);
        console.log(this.state.Categories, response.data[0])
        Object.keys( response.data.data[0]).forEach((e, i) => {
          
          this.state.filterparam.push(e)
        })

        this.setState({ Categories: response.data.data[0] })



      })
    }

  componentDidMount() {
    this.fetchdropdown()
  }


  render() {
    return (
      <aside className="sidebar ">
        {this.state.isTrue ?
        <div className="card">
          <Header />
          {/* <TestFilter /> */}
          <div>
            <ScrollBar component="div">
             <div className="card-body">
                <HeaderFilter filterparam={this.state.filterparam} Categories={this.state.Categories} />
                <Overview clicked={this.clicked}/>

              </div>
            </ScrollBar>
            
          </div>
        </div>
        : <MoreOverview clicked={this.clicked} householdData={this.props.householdData} />
        }
        {/* {!this.state.isTrue&&console.log("Success") && <MoreOverview />} */}
      </aside>
    );
  }
}
export default Filter;
