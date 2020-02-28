import React, { Component } from 'react';
import Axios from 'axios';
import UserNav from '../UserNav';
import AddHouseholdData from '../ForAddHousehold/AddHouseholdData';
import AddIndividualData from '../ForAddHousehold/AddIndividualData';
import AddAnimalData from '../ForAddHousehold/AddAnimalData';
import AddGalleryData from '../ForAddHousehold/AddGalleryData';

import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.png';
import Profile from '../../../img/profile.png';
import Select from 'react-select';
import {
  ageOptions,
  optionGen,
  ownerStatusOptions,
  casteOptions,
  religionOptions,
  mtOptions,
  educationOptions
} from '../ForAddHousehold/dropdownOptions';

const initialState = {
  name: '',
  latitude: '',
  longitude: '',
  nameError: '',
  latError: '',
  lngError: ''
};

class AddHousehold extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wardsOptions: [],
      province: '',
      district: '',
      municipality: '',

      // name: '',
      address: '',
      ageGroup: '',
      gender: '',
      citizenshipNo: '',
      wardNo: '',
      phoneNo: '',
      familySize: '',
      socialSecurity: null,

      // For Household data
      houseNo: '',
      // gpsCoordinates: '',
      latitude: '',
      longitude: '',
      altitude: '',
      precision: '',
      householdNo: '',
      // ownerAge: '',
      // ownerName: '',
      // ownerSex: '',
      ownerStatus: '',
      // other: '',
      caste: '',
      religion: '',
      motherTongue: '',
      mtOther: '',

      i: 0,
      // addHouseholdData: [],
      // addIndividualData: [],
      // addAnimalData: [],
      // addGalleryData: [],

      // For Form Validation

      id: '', // For database primary key id
      token: `${localStorage.getItem('myValueInLocalStorage')}`
    };
  }

  componentDidMount() {
    this.fetchdropdown();
    const province = localStorage.getItem('province');
    const district = localStorage.getItem('district');
    const mun = localStorage.getItem('mun');
    this.setState({
      province: province,
      district: district,
      municipality: mun
    });
  }

  fetchdropdown = () => {
    console.log('fetchdropdown');
    Axios.get('http://139.59.67.104:8019/api/v1/unique', {
      headers: {
        Authorization: `Token ${this.state.token}`
      }
    })
      // .then(res => this.setState({ wards: res.data.data[0].ward }));
      .then(res => {
        let ward_values = [];
        let id = 1;
        Object.keys(res.data.data[0].ward).forEach((e, i) => {
          ward_values.push({
            label: res.data.data[0].ward[id],
            name: 'ward',
            value: res.data.data[0].ward[id]
          });
          id++;
        });

        this.setState({ wardOptions: ward_values });
      });
  };

  validateHandler = e => {
    const isCheckbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  };

  validate = () => {
    let nameError = '';
    let latError = '';
    let lngError = '';

    if (!this.state.name) {
      nameError = 'This field cannot be empty';
    }
    if (!this.state.latitude) {
      latError = 'This field cannot be empty';
    }
    if (!this.state.longitude) {
      lngError = 'This field cannot be empty';
    }

    if (nameError || latError || lngError) {
      this.setState({ nameError, latError, lngError });
      return false;
    }
    return true;
  };

  changeHandler = e => {
    console.log('changeHandler');
    if (e.name === 'name') {
      this.setState({
        ownerName: e.value
      });
    } else if (e.name === 'address') {
      this.setState({
        address: e.value
      });
    } else if (e.name === 'citizenshipNo') {
      console.log('citizenship');
      this.setState({
        citizenshipNo: e.value
      });
    } else if (e.name === 'phoneNo') {
      this.setState({
        phoneNo: e.value
      });
    } else if (e.name === 'ward') {
      this.setState({
        wardNo: e.label
      });
    } else if (e.name === 'ageGroup') {
      console.log('working');
      this.setState({
        ageGroup: e.label
      });
    } else if (e.name === 'gender') {
      this.setState({
        gender: e.label
      });
    } else if (e.name === 'social_security') {
      this.setState({
        socialSecurity: e.value
      });
    } else if (e.name === 'house_no') {
      this.setState({
        houseNo: e.value
      });
    } else if (e.name === 'lat') {
      this.setState({
        latitude: e.value
      });
    } else if (e.name === 'lng') {
      this.setState({
        longitude: e.value
      });
    } else if (e.name === 'altitude') {
      this.setState({
        altitude: e.value
      });
    } else if (e.name === 'precision') {
      this.setState({
        precision: e.value
      });
    } else if (e.name === 'household_no') {
      this.setState({
        householdNo: e.value
      });
    } else if (e.name === 'owner_status') {
      this.setState({
        ownerStatus: e.value
      });
    } else if (e.name === 'caste') {
      this.setState({
        caste: e.value
      });
    } else if (e.name === 'religion') {
      this.setState({
        religion: e.value
      });
    } else if (e.name === 'mother_tongue') {
      this.setState({
        motherTongue: e.value
      });
    } else if (e.name === 'mt_other') {
      this.setState({
        mtOther: e.value
      });
    } else if (e.name === 'education_level') {
      this.setState({
        educationLevel: e.value
      });
    }
  };

  handleSubmit = e => {
    console.log('handlesubmit');
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log('Form successfully submitted');
      this.submitHandler();

      // clear form
      this.setState(initialState);
    }
  };

  submitHandler = () => {
    let householdData = {
      province: 2,
      district: 17,
      municipality: 638,
      owner_name: this.state.ownerName,
      place_name: this.state.address,
      owner_age: this.state.ageGroup,
      owner_sex: this.state.gender,
      owner_citizenship_no: this.state.citizenShipNo,
      contact_no: this.state.phoneNo,
      ward: this.state.wardNo,
      social_security_received: this.state.socialSecurityReceived,
      place_name: this.state.address,
      social_security_received: this.state.socialSecurity,
      house_number: this.state.houseNo,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      altitude: this.state.altitude,
      gps_precision: this.state.precision,
      household_number: this.state.householdNo,
      owner_status: this.state.ownerStatus,
      owner_caste: this.state.caste,
      religion: this.state.religion,
      mother_tongue: this.state.motherTongue,
      owner_education: this.state.education_level
    };

    var householdFormData = new FormData();

    for (let key in householdData) {
      householdFormData.append(key, householdData[key]);
    }

    // for (let [name, value] of householdFormData) {
    //   console.log(`${name} = ${value}`);
    // }

    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/house_hold/',
      data: householdFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Token ${this.state.token}`
      }
    })
      .then(res => {
        // console.log('submit working', res.data);
        this.setState({
          id: res.data.id
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    this.tabHandler();
  };

  tabHandler = () => {
    this.setState({
      i: this.state.i + 1
    });
  };

  render() {
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
                                // id='exampleInputText'
                                placeholder='Full name'
                                name='name'
                                onChange={e => {
                                  this.validateHandler(e);
                                  this.changeHandler(e.target);
                                }}
                              />
                              <div style={{ fontSize: 12, color: 'red' }}>
                                {this.state.nameError}
                              </div>
                            </div>

                            <div class='form-group'>
                              <input
                                type='text'
                                class='form-control'
                                id='addr'
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
                                    options={ageOptions}
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
                                  {/* <input
                                    type='text'
                                    class='form-control'
                                    id='WardId'
                                    placeholder='11'
                                    name='wardNo'
                                    onChange={e => this.changeHandler(e.target)}
                                  /> */}
                                  <Select
                                    options={this.state.wardOptions}
                                    rightAligned={false}
                                    placeholder={'02'}
                                    onChange={e => this.changeHandler(e)}
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
                                    name='family_size'
                                    disabled
                                    // onChange={e => this.changeHandler(e.target)}
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
                                      name='social_security'
                                      value='true'
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
                                      name='social_security'
                                      value='false'
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
                <main class='content-wrapper household-wrapper'>
                  <div class='user-info'>
                    <div className='user-info-header'>
                      <ul class='list-li'>
                        <li
                          className={`${
                            this.state.i === 0
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          // onClick={() =>
                          //   this.setState({ i: 0 }, console.log('i'))
                          // }
                        >
                          Household data
                        </li>
                        <li
                          className={`${
                            this.state.i === 1
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          // onClick={() => this.setState({ i: 1 })}
                        >
                          Individual data
                        </li>
                        <li
                          className={`${
                            this.state.i === 2
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          // onClick={() => this.setState({ i: 2 })}
                        >
                          Animal data
                        </li>
                        {/* <li
                          className={`${
                            this.state.i === 3
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          // onClick={() => this.setState({ i: 3 })}
                        >
                          Gallery
                        </li> */}
                      </ul>
                    </div>

                    <div
                      style={{ display: this.state.i === 0 ? 'block' : 'none' }}
                    >
                      <AddHouseholdData
                        handleSubmit={this.handleSubmit}
                        getData={this.changeHandler}
                        validateData={this.validateHandler}
                        latError={this.state.latError}
                        lngError={this.state.lngError}
                        dropdown={[
                          ownerStatusOptions,
                          casteOptions,
                          religionOptions,
                          mtOptions,
                          educationOptions
                        ]}
                      />
                    </div>
                    <div
                      style={{ display: this.state.i === 1 ? 'block' : 'none' }}
                    >
                      <AddIndividualData
                        tabHandler={this.tabHandler}
                        token={this.state.token}
                        pkid={this.state.id}
                      />
                    </div>
                    <div
                      style={{ display: this.state.i === 2 ? 'block' : 'none' }}
                    >
                      <AddAnimalData
                        tabHandler={this.tabHandler}
                        pkid={this.state.id}
                      />
                    </div>
                    {/* <div
                      style={{ display: this.state.i === 3 ? 'block' : 'none' }}
                    >
                      <AddGalleryData />
                    </div> */}
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
