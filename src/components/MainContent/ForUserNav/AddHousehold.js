import React, { Component } from 'react';
import Axios from 'axios';
// import UserNav from '../UserNav';
import AddHouseholdData from '../ForAddHousehold/AddHouseholdData';
import AddIndividualData from '../ForAddHousehold/AddIndividualData';
import AddAnimalData from '../ForAddHousehold/AddAnimalData';
import AddGalleryData from '../ForAddHousehold/AddGalleryData';

import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.png';
import Profile from '../../../img/profile.png';
import Select from 'react-select';
// import '../ForUserNav/drop.css';

const initialState = {
  ownerName: '',
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
      // address: '',
      // age: '',
      // gender: '',
      // citizenshipNo: '',
      // wardNo: '',
      // phoneNo: '',
      // familySize: '',
      // socialSecurity: null,

      // For Household data
      latitude: '',
      longitude: '',
      owner_status: '',
      // owner_status_other: '',
      owner_caste: '',
      // owner_caste_other: '',
      religion: '',
      // religion_other: '',
      mother_tongue: '',
      // mother_tongue_other: '',
      house_map_registered: '',
      flood_prone: '',
      work_regarding_flood_resilience: '',
      flood_resilience_activities: '',
      owned_land_area: '',
      evacuation_shelter_availability: '',
      distance_to_alternative_market: '',
      nearest_market_operation_during_disaster: '',
      easy_access_to_goods: '',
      involved_in_disaster_training: '',

      main_occupation: [],
      business: [],
      loan: null,
      insurance: null,
      insurance_type: [],
      vehicle: [],
      facilities_type: [],
      fuel_type: [],
      // landOwnership: [],
      house_type: [],
      technical_manpower_presence: null,
      landNearRiver: null,
      manpower_type: [],
      manpowerPresence: null,
      water_sources: [],
      toilet_facility: null,
      toilet_type: [],
      disaster_type: [],
      hazard_type: [],
      disaster_information_medium: [],
      got_early_warning_during_disaster: null,
      medium_suitable_for_early_warning: [],
      goods_available_in_nearest_market: [],
      coping_mechanism_during_disaster: [],
      emergency_kit_availability_in_house: null,
      owned_land_near_river: null,
      involved_disaster_training_type: [],

      dropdownOptions: [],

      i: 0,
      // addHouseholdData: [],
      // addIndividualData: [],
      // addAnimalData: [],
      // addGalleryData: [],

      dropdownInputs: [],
      dropdownOtherInputs: [],
      // checkboxInputs: [],
      otherFieldInputs: [],
      // displayOther: false,
      tempValue: [],
      multiselectValue: [],

      center: {
        lat: 51.505,
        lng: -0.09
      },
      marker: {
        lat: 51.505,
        lng: -0.09
      },

      id: '', // For database primary key id
      token: `${localStorage.getItem('myValueInLocalStorage')}`
    };
    // this.markerRef = React.createRef();
  }

  componentDidMount() {
    this.fetchOptions();
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

  fetchOptions = () => {
    Axios.get('http://139.59.67.104:8019/api/v1/choices').then(res => {
      // console.log(res.data.data[0]);
      let arr = [];
      arr.push(res.data.data[0]);

      // console.log(Object.keys(arr[0]));

      this.setState(
        {
          dropdownOptions: arr
        }
        // () => console.log(this.state.dropdownOptions[0])
      );

      // res.data.data.map(item => {
      //   arr.push(item);
      //   console.log(arr);
      // });
    });
  };

  fetchdropdown = () => {
    Axios.get('http://139.59.67.104:8019/api/v1/unique', {
      headers: {
        Authorization: `Token ${this.state.token}`
      }
    })
      // .then(res => this.setState({ wards: res.data.data[0].ward }));
      .then(res => {
        // console.log(res.data.data[0]);

        let ward_values = [];
        let id = 1;
        Object.keys(res.data.data[0].ward).forEach((e, i) => {
          ward_values.push({
            label: res.data.data[0].ward[id],
            name: 'wardNo',
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

    if (!this.state.ownerName) {
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

  // updatePosition = () => {
  //   const marker = this.markerRef.current;
  //   marker.leafletElement.openPopup();
  //   if (marker != null) {
  //     this.setState({
  //       marker: marker.leafletElement.getLatLng()
  //     });
  //   }
  // };

  updateLatLng = (lat, lng) => {
    this.setState({
      latitude: lat,
      longitude: lng
    });
  };

  changeHandler = e => {
    const selectedInput = this.state.dropdownInputs.find(input => {
      return Object.keys(input)[0] === e.name;
    });
    if (!!selectedInput) {
      this.setState({
        dropdownInputs: this.state.dropdownInputs
          .filter(input => {
            return Object.keys(input)[0] !== e.name;
          })
          .concat({ [e.name]: e.value })
      });
    } else {
      this.setState({
        dropdownInputs: this.state.dropdownInputs.concat({ [e.name]: e.value })
      });
    }

    // if (e.value === 'Other') {
    //   // const temp = this.state.tempValue.find(input => {
    //   //   return Object.keys(input)[0] === e.name;
    //   // });
    //   // // console.log(!!temp);
    //   // if (!!temp) {
    //   //   this.setState({
    //   //     tempValue: this.state.tempValue
    //   //       .filter(input => {
    //   //         return Object.keys(input)[0] !== e.name;
    //   //       })
    //   //       .concat(e.name)
    //   //   });
    //   // } else {
    //   let arr = [];
    //   arr = this.state.tempValue;
    //   // console.log(arr);
    //   if (arr.includes(e.name)) {
    //     // console.log('includes');
    //     arr.splice(arr.indexOf(e.name), 1);
    //     this.setState({
    //       tempValue: arr
    //     });
    //   } else {
    //     this.setState({
    //       // displayOther: !this.state.displayOther,
    //       tempValue: this.state.tempValue.concat(e.name)
    //     });
    //     // }
    //   }
    // }
  };

  handleDropdownOther = e => {
    this.setState({
      [e.name]: e.value
    });
  };

  handleMultiselect = e => {
    let value = e.map(val => {
      return val.value;
    });
    let name = '';
    e.map(val => {
      name = val.name;
    });
    console.log(name, 'name');
    console.log(value, 'value');

    this.setState({
      [name]: value
    });

    // console.log(e.value, 'value');
    // console.log(value.includes('Business'), 'includes');
    // const selectedInput = this.state.checkboxInputs.find(input => {
    //   return Object.keys(input)[0] === name;
    // });
    // console.log(selectedInput);
    // console.log(value, 'value');

    // if (!!selectedInput) {
    //   this.setState({
    //     checkboxInputs: this.state.checkboxInputs
    //       .filter(input => {
    //         return Object.keys(input)[0] !== name;
    //       })
    //       .concat({ [name]: value + ',' })
    //   });
    // } else {
    //   this.setState({
    //     checkboxInputs: this.state.checkboxInputs.concat({
    //       [name]: value + ','
    //     })
    //   });
    // }

    // if (value.includes('Business')) {
    //   let arr = [];
    //   arr = this.state.tempValue;
    //   console.log(value, 'value');

    //   console.log(arr.includes(value), 'includes');
    //   if (arr.includes(value)) {
    //     console.log('includes');
    //     arr.splice(arr.indexOf(value), 1);
    //     this.setState({
    //       tempValue: arr
    //     });
    //   } else {
    //     this.setState({
    //       tempValue: this.state.tempValue.concat(value)
    //     });
    //   }
    // }
  };

  handleOtherField = e => {
    // console.log('handleOtherField');
    const selectedInput = this.state.otherFieldInputs.find(input => {
      return Object.keys(input)[0] === e.name;
    });
    if (!!selectedInput) {
      this.setState({
        otherFieldInputs: this.state.otherFieldInputs
          .filter(input => {
            return Object.keys(input)[0] !== e.name;
          })
          .concat({ [e.name]: e.value })
      });
    } else {
      this.setState({
        otherFieldInputs: this.state.otherFieldInputs.concat({
          [e.name]: e.value
        })
      });
    }
  };

  handleRadioField = e => {
    this.setState({
      [e.name]: e.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      // console.log('Form successfully submitted');
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
      owner_age: this.state.age,
      owner_sex: this.state.gender,
      owner_citizenship_no: this.state.citizenshipNo,
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
      owner_education: this.state.educationLevel
    };

    var householdFormData = new FormData();

    for (let key in householdData) {
      householdFormData.append(key, householdData[key]);
    }

    // for (let [name, value] of householdFormData) {
    //   console.log(`${name} = ${value}`);
    // }

    // Axios({
    //   method: 'post',
    //   url: 'http://139.59.67.104:8019/api/v1/house_hold/',
    //   data: householdFormData,
    //   headers: {
    //     'Content-type': 'multipart/form-data',
    //     Authorization: `Token ${this.state.token}`
    //   }
    // })
    //   .then(res => {
    //     // console.log('submit working', res.data);
    //     this.setState({
    //       id: res.data.id
    //     });
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    this.tabHandler();
  };

  tabHandler = () => {
    this.setState({
      i: this.state.i + 1
    });
  };

  render() {
    // console.log(this.state.dropdownOptions);

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
                    {/* <a href='' onClick='return false;'> */}
                    <span class='add-title'>Add household</span>
                    {/* </a> */}
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
                                name='ownerName'
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
                                // id='addr'
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
                                <span class='user-span16'>Date of Birth</span>
                                <div class='form-group'>
                                  <input
                                    type='date'
                                    class='form-control'
                                    // id='PhoneId'
                                    placeholder='Date of Birth'
                                    name='date_of_birth'
                                    onChange={e => this.changeHandler(e.target)}
                                  />
                                </div>
                              </div>

                              <div class='col-md-6'>
                                <span class='user-span16'>Gender</span>
                                <div class='form-group'>
                                  <Select
                                    options={
                                      this.state.dropdownOptions[0] &&
                                      this.state.dropdownOptions[0].optionGen
                                    }
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
                                    // id='citizenshipId'
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
                                    // id='PhoneId'
                                    placeholder='9849-087-908'
                                    name='phoneNo'
                                    onChange={e => this.changeHandler(e.target)}
                                  />
                                </div>
                              </div>
                              <div class='col-md-6'>
                                <span class='user-span16'>Ward No.</span>
                                <div class='form-group'>
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
                                    // id='Familysize_Id'
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
                                      name='social_security_received'
                                      value='true'
                                      onChange={e =>
                                        this.handleRadioField(e.target)
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
                                      name='social_security_received'
                                      value='false'
                                      onChange={e =>
                                        this.handleRadioField(e.target)
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
                        getDataOther={this.handleDropdownOther}
                        getArray={this.handleMultiselect}
                        getRadioField={this.handleRadioField}
                        validateData={this.validateHandler}
                        latError={this.state.latError}
                        lngError={this.state.lngError}
                        // latitude={this.state.latitude}
                        // longitude={this.state.longitude}
                        center={this.state.center}
                        marker={this.state.marker}
                        otherField={[
                          this.state.owner_status,
                          this.state.owner_caste,
                          this.state.religion,
                          this.state.mother_tongue,
                          this.state.house_map_registered,
                          this.state.flood_prone,
                          this.state.work_regarding_flood_resilience,
                          this.state.flood_resilience_activities,
                          this.state.owned_land_area,
                          this.state.evacuation_shelter_availability,
                          this.state.distance_to_alternative_market,
                          this.state.nearest_market_operation_during_disaster,
                          this.state
                            .how_goods_were_managed_if_not_available_in_market,
                          this.state.involved_in_disaster_training
                        ]}
                        displayOther={this.state.displayOther}
                        tempValue={this.state.tempValue}
                        checkbox={[
                          this.state.main_occupation,
                          this.state.business,
                          this.state.insurance_type,
                          this.state.vehicle,
                          this.state.facilities_type,
                          this.state.fuel_type,
                          this.state.house_type,
                          this.state.manpower_type,
                          this.state.water_sources,
                          this.state.toilet_type,
                          this.state.disaster_type,
                          this.state.hazard_type,
                          this.state.disaster_information_medium,
                          this.state.medium_suitable_for_early_warning,
                          this.state.goods_available_in_nearest_market,
                          this.state.coping_mechanism_during_disaster,
                          this.state.involved_disaster_training_type
                        ]}
                        radioField={[
                          this.state.loan,
                          this.state.insurance,
                          this.state.landNearRiver,
                          this.state.technical_manpower_presence,
                          this.state.toilet_facility,
                          this.state.got_early_warning_during_disaster,
                          this.state.emergency_kit_availability_in_house,
                          this.state.owned_land_near_river
                        ]}
                        dropdown={this.state.dropdownOptions}
                        getOtherField={this.handleOtherField}
                        // inputs={this.state.inputs}

                        updateLatLng={this.updateLatLng}
                      />
                    </div>
                    <div
                      style={{ display: this.state.i === 1 ? 'block' : 'none' }}
                    >
                      <AddIndividualData
                        tabHandler={this.tabHandler}
                        token={this.state.token}
                        pkid={this.state.id}
                        dropdown={this.state.dropdownOptions}
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
