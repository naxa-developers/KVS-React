import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "../scss/kvs.scss";


import Parent from "./Parent";
import MoreOverview from "./Overview/MoreOverview/MoreOverview";

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
        

      </Switch>
  
  </Router>
     
       

     
    
    );
  }
}
