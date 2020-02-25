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
      gpsCoordinates: '',
      latitude: '',
      longitude: '',
      altitude: '',
      precision: '',
      householdNo: '',
      ownerAge: '',
      ownerName: '',
      ownerSex: '',
      status: '',
      other: '',
      caste: '',
      religion: '',
      motherTongue: '',
      mtOther: '',

      i: 0,
      addHouseholdData: [],
      addIndividualData: [],
      addAnimalData: [],
      addGalleryData: [],

      // For Form Validation

      token: `${localStorage.getItem('myValueInLocalStorage')}`
    };
  }

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
      console.log('addr working');
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
    } else if (e.name === 'wardNo') {
      this.setState({
        wardNo: e.value
      });
    } else if (e.name === 'family_size') {
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
    } else if (e.name === 'house_no') {
      this.setState(
        {
          houseNo: e.value
        },
        console.log('working', this.state.houseNo)
      );
    } else if (e.name === 'coordinates') {
      this.setState({
        coordinates: e.value
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
    } else if (e.name === 'owner_age') {
      this.setState({
        ownerAge: e.value
      });
    } else if (e.name === 'owner_name') {
      this.setState({
        ownerName: e.value
      });
    } else if (e.name === 'owner_sex') {
      this.setState({
        ownerSex: e.value
      });
    } else if (e.name === 'status') {
      this.setState({
        status: e.value
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
    } else if (e.name === 'social_security') {
      this.setState({
        socialSecurity: e.value
      });
    }
    // else if (e.name === 'education_level') {
    //   this.setState({
    //     educationLevel: e.value
    //   });
    // } else if (e.name === 'occupation') {
    //   this.setState({
    //     occupation: e.value
    //   });
    // } else if (e.name === 'working_status') {
    //   this.setState({
    //     workingStatus: e.value
    //   });
    // } else if (e.name === 'income') {
    //   this.setState({
    //     monthlyIncome: e.value
    //   });
    // } else if (e.name === 'social_security') {
    //   this.setState({
    //     socialSecurityCriteria: e.value
    //   });
    // } else if (e.name === 'social_security_reason') {
    //   this.setState({
    //     reasonForSocialSecurity: e.value
    //   });
    // } else if (e.name === 'animal_type') {
    //   this.setState({
    //     animalType: e.value
    //   });
    // } else if (e.name === 'animal_no') {
    //   this.setState({
    //     animalNo: e.value
    //   });
    // } else if (e.name === 'purpose') {
    //   this.setState({
    //     commercialPurpose: e.value
    //   });
    // }
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
    // const data = {
    //   owner_name: this.state.ownerName,
    //   place_name: this.state.address,
    //   owner_age: this.state.ageGroup,
    //   owner_sex: this.state.sex,
    //   owner_citizenship_no: this.state.citizenShipNo,
    //   contact_no: this.state.contact,
    //   ward: this.state.wardNo,
    //   family_size: this.state.familySize,
    //   social_security_received: this.state.socialSecurityReceived
    // };

    var householdFormData = new FormData();
    // var individualFormData = new FormData();
    var animalFormData = new FormData();
    // var galleryFormData = new FormData();

    householdFormData.append('owner_name', this.state.ownerName);
    householdFormData.append('place_name', this.state.address);
    householdFormData.append('owner_age', this.state.ownerAge);
    householdFormData.append('owner_sex', this.state.ownerSex);
    householdFormData.append('owner_citizenship_no', this.state.citizenShipNo);
    householdFormData.append('contact_no', this.state.phoneNo);
    householdFormData.append('ward', this.state.wardNo);
    householdFormData.append('family_size', this.state.familySize);
    householdFormData.append(
      'social_security_received',
      this.state.socialSecurityReceived
    );
    householdFormData.append('house_number', this.state.houseNo);
    householdFormData.append('latitude', this.state.latitude);
    householdFormData.append('longitude', this.state.longitude);
    householdFormData.append('altitude', this.state.altitude);
    householdFormData.append('gps_precision', this.state.precision);
    householdFormData.append('household_number', this.state.householdNo);
    householdFormData.append('owner_age', this.state.ownerAge);
    householdFormData.append('owner_sex', this.state.ownerSex);
    householdFormData.append('owner_status', this.state.status);
    householdFormData.append('owner_status_other', this.state.other);
    householdFormData.append('owner_caste', this.state.caste);
    householdFormData.append('religion', this.state.religion);
    householdFormData.append('mother_tongue', this.state.motherTongue);
    householdFormData.append('mother_tongue_other', this.state.mtOther);

    animalFormData.append('animal_type', this.state.animalType);
    animalFormData.append('animal_number', this.state.animalNo);
    animalFormData.append(
      'is_it_for_commercial_purpose',
      this.state.commercialPurpose
    );

    // for (let [name, value] of bodyFormData) {
    //   console.log(`${name} = ${value}`);
    // }

    // //  Household Data post
    // Axios({
    //   method: 'post',
    //   url: 'http://139.59.67.104:8019/api/v1/house_hold/',
    //   data: householdFormData,
    //   headers: {
    //     'Content-type': 'multipart/form-data',
    //     Authorization: `Token ${this.state.token}`
    //   }
    // })
    //   // .then(res => {
    //   //   console.log('submit working', res.data);
    //   // })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // //  Animal Data post
    // Axios({
    //   method: 'post',
    //   url: 'http://139.59.67.104:8019/api/v1/animal_detail/',
    //   data: animalFormData,
    //   headers: {
    //     'Content-type': 'multipart/form-data',
    //     Authorization: `Token ${this.state.token}`
    //   }
    // })
    //   .then(res => {
    //     console.log('submit working', res.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // this.setState(
    //   {
    //     i: this.state.i + 1
    //   },
    //   console.log('working', this.state.i)
    // );
    this.tabHandler();
  };

  tabHandler = () => {
    this.setState({
      i: this.state.i + 1
    });
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
                                    name='family_size'
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
                        <li
                          className={`${
                            this.state.i === 3
                              ? 'user-span18 current'
                              : 'user-span18'
                          }`}
                          // onClick={() => this.setState({ i: 3 })}
                        >
                          Gallery
                        </li>
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
                      />
                    </div>
                    <div
                      style={{ display: this.state.i === 1 ? 'block' : 'none' }}
                    >
                      <AddIndividualData tabHandler={this.tabHandler} />
                    </div>
                    <div
                      style={{ display: this.state.i === 2 ? 'block' : 'none' }}
                    >
                      <AddAnimalData tabHandler={this.tabHandler} />
                    </div>
                    <div
                      style={{ display: this.state.i === 3 ? 'block' : 'none' }}
                    >
                      <AddGalleryData />
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
