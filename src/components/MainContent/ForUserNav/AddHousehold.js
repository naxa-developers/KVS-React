import React, { Component } from 'react';
import UserNav from '../UserNav';
import AddHouseholdData from '../ForAddHousehold/AddHouseholdData';
import AddIndividualData from '../ForAddHousehold/AddIndividualData';
import AddAnimalData from '../ForAddHousehold/AddAnimalData';
import AddGallery from '../ForAddHousehold/AddGallery';

import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.png';
import Profile from '../../../img/profile.png';
import Select from 'react-select';

class AddHousehold extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      ageGroup: '',
      gender: '',
      citizenshipNo: '',
      wardNo: '',
      phoneNo: '',
      familySize: '',
      socialSecurity: null,

      i: 0,
      addHouseholdData: [],
      addIndividualData: [],
      addAnimalData: [],
      addGallery: []
    };
  }

  changeHandler = e => {
    if (e.name === 'name') {
      this.setState(
        {
          name: e.value
        },
        () => console.log(this.state.name)
      );
    } else if (e.name === 'address') {
      this.setState({
        address: e.value
      });
    } else if (e.name === 'citizenshipNo') {
      this.setState({
        citizenshipNo: e.value
      });
    } else if (e.name === 'wardNo') {
      this.setState({
        wardNo: e.value
      });
    } else if (e.name === 'familySize') {
      this.setState({
        familySize: e.value
      });
    } else if (e.name === 'ageGroup') {
      console.log(e.label);
      this.setState({
        ageGroup: e.label
      });
    } else if (e.name === 'gender') {
      console.log(e.label);
      this.setState({
        gender: e.label
      });
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
  };

  render() {
    const optionsAge = [
      { label: 'under 18', value: 1, name: 'ageGroup' },
      { label: '19 - 29', value: 2, name: 'ageGroup' },
      { label: '30 - 39', value: 3, name: 'ageGroup' },
      { label: '40 - 49', value: 4, name: 'ageGroup' },
      { label: '50 - 59', value: 5, name: 'ageGroup' },
      { label: 'Above 60', value: 6, name: 'ageGroup' }
    ];

    const optionGen = [
      { label: 'Male', value: 1, name: 'gender' },
      { label: 'Female', value: 2, name: 'gender' },
      { label: 'Other', value: 3, name: 'gender' }
    ];

    return (
      <body class=''>
        <div class='kvs-wrapper'>
          <div class='container-fluid main-wrapper p-0'>
            {/* <!-- <div class="row no-gutters"> --> */}
            {/* <!-- <div class="col-xl-4 col-md-4"> --> */}
            <div class='flex-wrapper'>
              <aside class='sidebar add-sidebar-mod auto-h'>
                <div class='card'>
                  <div class='card-header'>
                    <a href='/home' class='logo'>
                      <img src={Logo} alt='logo' />
                    </a>
                  </div>
                  <div class='card-body'>
                    <a href='#' onClick='return false;'>
                      <span class='add-title'>Add household</span>
                    </a>
                    <div class='user-profile user-profile-edit'>
                      {/* <!-- top --> */}
                      <div class='user-profile-top'>
                        <figure class='add-img'>
                          <span class='round-span'></span>
                        </figure>
                        <div class='text-wrap'>
                          <form class='user-form-add'>
                            <div class='form-group'>
                              <input
                                type='text'
                                class='form-control'
                                id='exampleInputText'
                                placeholder='Full name'
                                name='name'
                                onChange={e => this.changeHandler(e.target)}
                              />
                            </div>

                            <div class='form-group'>
                              <input
                                type='text'
                                class='form-control'
                                id='exampleInputAddress'
                                placeholder='Full address'
                                name='address'
                                onChange={e => this.changeHandler(e.target)}
                              />
                            </div>
                          </form>
                        </div>
                      </div>

                      {/* <!-- bottom --> */}
                      <div class='user-profile-bottom'>
                        <div class='filter'>
                          <form class='user-form-add'>
                            <div class='row'>
                              <div class='col-md-6'>
                                <span class='user-span16'>Age group</span>
                                <div class='form-group'>
                                  <Select
                                    options={optionsAge}
                                    rightAligned={false}
                                    placeholder={'Age'}
                                    onChange={e => this.changeHandler(e)}
                                  />
                                </div>
                              </div>

                              <div class='col-md-6'>
                                <span class='user-span16'>Gender</span>
                                <div class='form-group'>
                                  <Select
                                    options={optionGen}
                                    rightAligned={false}
                                    placeholder={'Gender'}
                                    onChange={e => this.changeHandler(e)}
                                  />
                                </div>
                              </div>
                              <div class='col-md-6'>
                                <span class='user-span16'>Citizenship No.</span>
                                <div class='form-group'>
                                  <input
                                    type='text'
                                    class='form-control'
                                    id='citizenshipId'
                                    placeholder='495098568'
                                    name='citizenshipNo'
                                    onChange={e => this.changeHandler(e.target)}
                                  />
                                </div>
                              </div>
                              <div class='col-md-6'>
                                <span class='user-span16'>Phone</span>
                                <div class='form-group'>
                                  <input
                                    type='text'
                                    class='form-control'
                                    id='PhoneId'
                                    placeholder='9849-087-908'
                                    name='phoneNo'
                                    onChange={e => this.changeHandler(e.target)}
                                  />
                                </div>
                              </div>
                              <div class='col-md-6'>
                                <span class='user-span16'>Ward No.</span>
                                <div class='form-group'>
                                  <input
                                    type='text'
                                    class='form-control'
                                    id='WardId'
                                    placeholder='11'
                                    name='wardNo'
                                    onChange={e => this.changeHandler(e.target)}
                                  />
                                </div>
                              </div>
                              <div class='col-md-6'>
                                <span class='user-span16'>Family Size</span>
                                <div class='form-group'>
                                  <input
                                    type='text'
                                    class='form-control'
                                    id='Familysize_Id'
                                    placeholder='4'
                                    name='familySize'
                                    onChange={e => this.changeHandler(e.target)}
                                  />
                                </div>
                              </div>
                              <div class='col-md-6'>
                                <span class='user-span16'>Social Security</span>{' '}
                                <div class='form-group'>
                                  <div class='custom-control custom-radio inline-flex'>
                                    <input
                                      type='radio'
                                      class='custom-control-input'
                                      id='yes'
                                      name='yes'
                                      onChange={e =>
                                        this.changeHandler(e.target)
                                      }
                                    />
                                    <label
                                      class='custom-control-label'
                                      for='yes'
                                    >
                                      Yes
                                    </label>
                                  </div>
                                  <div class='custom-control custom-radio inline-flex'>
                                    <input
                                      type='radio'
                                      class='custom-control-input'
                                      id='no'
                                      name='yes'
                                      onChange={e =>
                                        this.changeHandler(e.target)
                                      }
                                    />
                                    <label
                                      class='custom-control-label'
                                      for='no'
                                    >
                                      No
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div class='buttons btn-mod'>
                        <button
                          role='button'
                          class='common-button-bg'
                          onClick='myFunction()'
                        >
                          Save
                        </button>
                        <button role='button' class='common-button-plain'>
                          cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* <!-- <div class="col-xl-8 col-md-8"> --> */}
              <div class='main-content'>
                <header class='main-header'>
                  <nav class='navbar'>
                    <div class='input-group search'></div>
                    <div class='navbar-right'>
                      {/* <!-- User Account --> */}
                      <div class='dropdown user-menu '>
                        <button
                          class='dropdown-toggle'
                          type='button'
                          data-toggle='dropdown'
                        >
                          <img
                            src={Profile}
                            class='user-image'
                            alt='User Image'
                          />
                          <div class='user-info'>
                            <h6>Sam Shayesta</h6>
                            <span>municipality officer</span>
                          </div>
                        </button>
                        <ul class='dropdown-menu dropdown-menu-right'>
                          {/* <!-- User image --> */}
                          <li>
                            <a href='profile.html'> Add Household</a>
                          </li>
                          <li>
                            <a href='#'> Upload household</a>
                          </li>

                          <li>
                            <a href='#'> User management</a>
                          </li>

                          <li>
                            <a href='#'> My Account</a>
                          </li>
                          <li class='dropdown-footer'>
                            <a href='signin.html'> Sign Out </a>
                            {/* <!-- <i class="material-icons">power_settings_new</i> --> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </header>
                <main>
                  <div class='user-info'>
                    <div className='user-info-header'>
                      <ul>
                        <li
                          className={`${
                            this.state.i === 0
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          onClick={() =>
                            this.setState({ i: 0 }, console.log('i'))
                          }
                        >
                          Household data
                        </li>
                        <li
                          className={`${
                            this.state.i === 1
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          onClick={() => this.setState({ i: 1 })}
                        >
                          Individual data
                        </li>
                        <li
                          className={`${
                            this.state.i === 2
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          onClick={() => this.setState({ i: 2 })}
                        >
                          Animal data
                        </li>
                      </ul>
                    </div>

                    <div
                      style={{ display: this.state.i === 0 ? 'block' : 'none' }}
                    >
                      <AddHouseholdData />
                    </div>
                    <div
                      style={{ display: this.state.i === 1 ? 'block' : 'none' }}
                    >
                      <AddIndividualData
                        personalData={this.state.personalData}
                      />
                    </div>
                    <div
                      style={{ display: this.state.i === 2 ? 'block' : 'none' }}
                    >
                      <AddAnimalData animalData={this.state.animalData} />
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default AddHousehold;
