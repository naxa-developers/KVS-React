import React, { Component } from "react";
import Header from "../partials/Header";
import HeaderFilter from "../Filter/HeaderFilter";
import Overview from "../Overview/Overview";

import ScrollBar from "react-perfect-scrollbar";


class Filter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      Categories:[{category:"Ward No",dropdown:["Ward no. 1","Ward no. 2","Ward no. 3"]},
      {category:"Education",dropdown:["Slc","+2","Bachelor","Masters","PHD"]},
      {category:"Age",dropdown:["18-30","31-40","41-50","51-60"]},
      {category:"Number of Family Members",dropdown:["2","3","4","5+"]},
      ]
   }
 }
  
  
  render() {
    return (
      <aside className="sidebar ">
        <div className="card">
          <Header />
          <div>
            <ScrollBar component="div">
              <div className="card-body">
                <HeaderFilter Categories={this.state.Categories} />
                <Overview />
               
              </div>
            </ScrollBar>
          </div>
        </div>
      </aside>
    );
  }
}
export default Filter;
