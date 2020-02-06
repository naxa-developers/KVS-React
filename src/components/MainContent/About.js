import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import UserNav from "./UserNav";
import HouseholdData from "./ForAbout/HouseholdData";
import IndividualData from "./ForAbout/IndividualData";
import AnimalData from "./ForAbout/AnimalData";
import TopSection from "./ForAbout/TopSection";
import EditPage from './EditPage'
import Axios from "axios";


class About extends Component {

  constructor(props) {
    super(props)

    this.state = {
      display1: true,
      animalData: [],
      personalData: [],
      IndividualData: [],
      editPage: false,
      editableData: []
    }
  }

  handleClick = () => {
    this.setState({
      display1: true,
      display2: false,
      display3: false
    })
  }

  handleClick1 = () => {
    this.setState({
      display1: false,
      display2: true,
      display3: false
    })
  }

  handleClick2 = () => {
    this.setState({
      display1: false,
      display2: false,
      display3: true
    })
  }

  fetchData = () => {
    Axios.get(`http://139.59.67.104:8019/api/v1/house_hold/${localStorage.getItem('indexValue')}`)
      .then(response => {
        this.setState({
          IndividualData: response.data,
          
        })
        var {owner_name, owner_age } = response.data;
        console.log("des", owner_name);
        

      })
    Axios.get('http://139.59.67.104:8019/api/v1/animal_detail/?house_index=' + `${localStorage.getItem('indexValue')}`)
      .then(response => {
        this.setState({
          animalData: response.data
        })
      })
    Axios.get('http://139.59.67.104:8019/api/v1/family_members/?house_index=' + `${localStorage.getItem('indexValue')}`)
      .then(response => {
        this.setState({
          personalData: response.data
        })
      })
  }

  displayEdit = () => {
    this.setState({
      editPage: !this.state.editPage
    })
  }

  // editName = () => {
  //   this.setState({
  //     // IndividualData
  // })

  componentDidMount() {
    this.fetchData()
  }

  render() {
    // console.log("edit", this.state.editPage);
    
    // console.log(JSON.stringify(this.props.location.state.index));

    localStorage.setItem('indexValue', JSON.stringify(this.props.location.state.index))
    const value = this.state.IndividualData
    return (
      <>
        <body className="">
          <div className="kvs-wrapper">
            <div className="container-fluid main-wrapper p-0">
              <div className="flex-wrapper">
              
                  {  this.state.editPage==false ?   <TopSection value={value} displayEdit={this.displayEdit} name = {this.owner_name} changeName = {this.editName}/> : <EditPage value={value} /> }
              
              
             
                <div className="main-content">
                  <header className="main-header">
                    <nav className="navbar">
                      <div className="input-group search">

                      </div>
                      <div className="navbar-right">
                        <UserNav />
                      </div>
                    </nav>
                  </header>
                  <main>
                    <div className="user-info">
                      <div className="user-info-header">
                        <ul>
                          <li className={`${this.state.display1 ? 'user-span18 current' : 'user-span18'}`} onClick={() => this.handleClick()}>Household data</li>
                          <li className={`${this.state.display2 ? 'user-span18 current' : 'user-span18'}`} onClick={() => this.handleClick1()}>Individual data</li>
                          <li className={`${this.state.display3 ? 'user-span18 current' : 'user-span18'}`} onClick={() => this.handleClick2()}>Animal data</li>
                        </ul>
                      </div>
                      <div style={this.state.display1 ? { display: 'block' } : { display: 'none' }}>
                        <HouseholdData value={value} />
                      </div>
                      <div style={this.state.display2 ? { display: 'block' } : { display: 'none' }}>
                        <IndividualData value={value} personalData={this.state.personalData} />
                      </div>
                      <div style={this.state.display3 ? { display: 'block' } : { display: 'none' }}>
                        <AnimalData value={value} animalData={this.state.animalData} />
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default About;
