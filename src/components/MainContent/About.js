import React, { Component } from 'react';
import { Link, BrowserRouter, Redirect } from 'react-router-dom';
import UserNav from './UserNav';
import HouseholdData from './ForAbout/HouseholdData';
import IndividualData from './ForAbout/IndividualData';
import AnimalData from './ForAbout/AnimalData';
import TopSection from './ForAbout/TopSection';
import EditPage from './EditPage';
import Axios from 'axios';
import EditPagesNew from './EditPagesNew';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i: 0,
      display1: true,
      animalData: [],
      personalData: [],
      IndividualData: [],
      editPage: true,
      editableData: [],
      detailsToEdit: [],
      name: '',
      token: `${localStorage.getItem('myValueInLocalStorage')}`
    };
  }

  fetchData = () => {
    Axios.get(
      `${process.env.BASE_URL}api/v1/house_hold/${localStorage.getItem(
        'indexValue'
      )}`
    ).then(response => {
      // console.log('indiv', response.data);

      var {
        owner_name,
        owner_age,
        owner_sex,
        owner_citizenship_no,
        contact_no,
        ward,
        social_security_received,
        family_size,
        place_name,
        date
      } = response.data;

      var detailsArray = [
        owner_name,
        owner_age,
        owner_sex,
        owner_citizenship_no,
        contact_no,
        ward,
        social_security_received,
        family_size,
        place_name,
        date
      ];
      this.setState({
        detailsToEdit: detailsArray
      });
      this.setState({
        IndividualData: response.data,
        name: owner_name,
        address: place_name,
        age: owner_age,
        sex: Number(owner_sex),
        citizenShipNo: owner_citizenship_no,
        contact: Number(contact_no),
        ward: Number(ward),
        socialSecurityReceived: social_security_received,
        familySize: Number(family_size)
      });

      var detailsArray = [
        owner_name,
        owner_age,
        owner_sex,
        owner_citizenship_no,
        contact_no,
        ward,
        social_security_received,
        family_size,
        place_name,
        date
      ];
      this.setState({
        detailsToEdit: detailsArray
      });
      this.setState({
        IndividualData: response.data,
        name: owner_name,
        address: place_name,
        age: owner_age,
        sex: Number(owner_sex),
        citizenShipNo: owner_citizenship_no,
        contact: Number(contact_no),
        ward: Number(ward),
        socialSecurityReceived: social_security_received,
        familySize: Number(family_size)
      });
    });
    Axios.get(
      `${process.env.BASE_URL}api/v1/animal_detail/?house_index=${localStorage.getItem('indexValue')}`
    ).then(response => {
      this.setState({
        animalData: response.data
      });
    });
    Axios.get(
      `${process.env.BASE_URL}api/v1/family_members/?house_index=${localStorage.getItem('indexValue')}`
    ).then(response => {
      this.setState({
        personalData: response.data
      });
    });
  };

  displayEdit = () => {
    this.setState({
      editPage: !this.state.editPage
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  changeHandler = e => {
    console.log('hey', e);
    console.log(e.value);
    if (e.name === 'ownerName') {
      console.log('i am in chsnge hsndler');
      this.setState(
        {
          name: e.value
        },
        () => {
          console.log('name', this.state.name);
        }
      );
    } else if (e.name === 'address') {
      console.log('hey its address bar');
      this.setState(
        {
          address: e.value
        },
        () => {
          console.log('address', this.state.address);
        }
      );
    } else if (e.name === 'phoneNumber') {
      console.log('hey its not in');
      this.setState(
        {
          contact: Number(e.value)
        },
        () => {
          console.log('contact', this.state.contact);
        }
      );
    } else if (e.name === 'ageGroup') {
      console.log('i am age group');
      this.setState(
        {
          age: e.label
        },
        () => {
          console.log('age', this.state.age);
        }
      );
    } else if (e.name === 'gender') {
      console.log('i am gender group');
      this.setState(
        {
          sex: e.label
        },
        () => {
          console.log('sex', this.state.sex);
        }
      );
    } else if (e.name === 'citizenShip') {
      console.log('i am citizenship number');
      this.setState(
        {
          citizenShipNo: e.value
        },
        () => {
          console.log('citizenship', this.state.citizenShipNo);
        }
      );
    } else if (e.name === 'familySize') {
      console.log('i am family size');
      this.setState(
        {
          familySize: Number(e.value)
        },
        () => {
          console.log('family', this.state.familySize);
        }
      );
    } else if (e.name === 'wardNumber') {
      console.log('i am ward number');
      this.setState(
        {
          ward: Number(e.value)
        },
        () => {
          console.log('ward', this.state.ward);
        }
      );
    } else if (e.id === 'yes') {
      this.setState(
        {
          socialSecurityReceived: true
        },
        () => {
          console.log('security recieved', this.state.socialSecurityReceived);
        }
      );
    } else if (e.id === 'no') {
      this.setState(
        {
          socialSecurityReceived: false
        },
        () => {
          console.log('security recieved', this.state.socialSecurityReceived);
        }
      );
    }
  };

  submitHandler = () => {
    const data = {
      owner_name: this.state.name,
      place_name: this.state.address,
      owner_age: this.state.age,
      owner_sex: this.state.sex,
      owner_citizenship_no: this.state.citizenShipNo,
      contact_no: this.state.contact,
      ward: this.state.ward,
      family_size: this.state.familySize,
      social_security_received: this.state.socialSecurityReceived
    };

    Axios(
      `${process.env.BASE_URL}api/v1/house_hold/${localStorage.getItem(
        'indexValue'
      )}/`,
      {
        method: 'PUT',
        data: data,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      this.setState(
        {
          IndividualData: response.data
        },
        () => {
          this.fetchDataAgain(), this.displayEdit();
        }
      );
    });
  };

  fetchDataAgain = () => {
    var bodyFormData = new FormData();
    var bodyFormDataPerson = new FormData();
    bodyFormDataPerson.append('filtertype', 'person');
    Axios({
      method: 'post',
      url: `${process.env.BASE_URL}api/v1/fdd`,
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      // console.log('Data is here');
      // console.log(res.data.data);
      this.setState({ householdData: res.data.data });
      sessionStorage.setItem('household', JSON.stringify(res.data.data));
      sessionStorage.setItem('available', true);
      // console.log('hey data is on way', this.state.householdData)
    });
    Axios({
      method: 'post',
      url: `${process.env.BASE_URL}api/v1/fdd`,
      data: bodyFormDataPerson,
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      // console.log('Data is here');
      // console.log(res.data.data);
      this.setState({ householdPersonData: res.data.data });
      sessionStorage.setItem('householdPerson', JSON.stringify(res.data.data));
      // sessionStorage.setItem('available', true);
      // console.log('hey data is on way', this.state.householdData)
    });
  };

  render() {
    localStorage.setItem(
      'indexValue',
      JSON.stringify(this.props.location.state.index)
    );
    // console.log('i have to edit this', this.state.detailsToEdit)
    const value = this.state.IndividualData;
    return (
      <>
        {/* {this.state.editPage === false ? */}
        <body className=''>
          <div className='kvs-wrapper'>
            <div className='container-fluid main-wrapper p-0'>
              <div className='flex-wrapper'>
                {/* {this.state.editPage ? (
                  <TopSection
                    value={value}
                    displayEdit={this.displayEdit}
                    changeName={this.editName}
                  />
                ) : ( */}
                <EditPage
                  value={value}
                  detailsToEdit={this.state.detailsToEdit}
                  changeHandler={this.changeHandler}
                  name={this.state.detailsToEdit[0]}
                  contact={this.state.detailsToEdit[4]}
                  submitHandler={this.submitHandler}
                  displayEdit={this.displayEdit}
                  animalData={this.state.animalData}
                  personalData={this.state.personalData}
                />
                {/* // )} */}
                <div
                  className='main-content'
                  // style={{ display: this.state.editPage ? 'none' : 'block' }}
                >
                  <header className='main-header'>
                    <nav className='navbar'>
                      <div className='input-group search'></div>
                      <div className='navbar-right'>
                        <UserNav />
                      </div>
                    </nav>
                  </header>
                  <main>
                    <div className='user-info'>
                      <div className='user-info-header'>
                        <ul>
                          <li>
                            <a
                              className={`${
                                this.state.i === 0
                                  ? 'user-span18 current'
                                  : 'user-span18'
                              }`}
                              onClick={() => this.setState({ i: 0 })}
                            >
                              Household data
                            </a>
                          </li>
                          <li>
                            <a
                              className={`${
                                this.state.i === 1
                                  ? 'user-span18 current'
                                  : 'user-span18'
                              }`}
                              onClick={() => this.setState({ i: 1 })}
                            >
                              Individual data
                            </a>
                          </li>
                          <li>
                            <a
                              className={`${
                                this.state.i === 2
                                  ? 'user-span18 current'
                                  : 'user-span18'
                              }`}
                              onClick={() => this.setState({ i: 2 })}
                            >
                              Animal data
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        style={{
                          display: this.state.i === 0 ? 'block' : 'none'
                        }}
                      >
                        <HouseholdData value={value} />
                      </div>
                      <div
                        style={{
                          display: this.state.i === 1 ? 'block' : 'none'
                        }}
                      >
                        <IndividualData
                          value={value}
                          personalData={this.state.personalData}
                        />
                      </div>
                      <div
                        style={{
                          display: this.state.i === 2 ? 'block' : 'none'
                        }}
                      >
                        <AnimalData
                          value={value}
                          animalData={this.state.animalData}
                        />
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </body>
        {/* <EditPagesNew
            value={value}
            detailsToEdit={this.state.detailsToEdit}
            changeHandler={this.changeHandler}
            name={this.state.detailsToEdit[0]}
            contact={this.state.detailsToEdit[4]}
            submitHandler={this.submitHandler}
            displayEdit={this.displayEdit}
            animalData={this.state.animalData}
            personalData={this.state.personalData}
          />
        } */}
      </>
    );
  }
}

export default About;
