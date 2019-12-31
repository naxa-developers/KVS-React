import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../scss/kvs.scss";


import Parent from "./Parent";
import MoreOverview from "./Overview/MoreOverview/MoreOverview";
import About from "./MainContent/About";

export default class App extends Component {
  render() {
    return (
      <Router >
      <Switch>

        <Route
          exact
          path="/"
          render={props => <Parent {...props}/>
          }
        ></Route>

        <Route
          exact
          path="/moreoverview"
          render={props => <MoreOverview {...props}/>
          }
        ></Route>
        <Route
          exact
          path="/about"
          render={props => <About {...props}/>
          }
        ></Route>
        

      </Switch>
  
  </Router>
     
       

     
    
    );
  }
}
