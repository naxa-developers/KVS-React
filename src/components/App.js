import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import PrivateRoute from 'react-private-route'

import "bootstrap/dist/css/bootstrap.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../scss/kvs.scss";
import Testmap from './testmap'

import Login from '../components/Landing/Login';
import Parent from "./Parent";
import MoreOverview from "./Overview/MoreOverview/MoreOverview";
import About from "./MainContent/About";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       token: '',
       setToken: ''
    }
  }
  

  userLogin = (tok) => {
    this.setState({
      token: tok
    })
    // console.log(this.state.token)
    
  }
  render() {
    return (
      <Router>
      <Switch>

      <Route
          exact
          path="/"
          render={props => <Login userLogin = {this.userLogin} props={this.state.token} />
          }
        ></Route>
        <Route
          exact
          path="/home"
          render={props => <Parent {...props} token={this.state.token}
        
            />
          }
        ></Route>
          <Route
          exact
          path="/test"
          render={props => <Testmap {...props}/>
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
