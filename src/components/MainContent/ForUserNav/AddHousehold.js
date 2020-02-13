import React, { Component } from 'react';
import UserNav from '../UserNav';
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
      socialSecurity: null
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
                    <a href='/household'>
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
                                  {/* <div class='kvs-select'>
                                    <div class='select-wrapper'>
                                      <span class='select-item'>16-29 yrs</span>
                                      <ul>
                                        <li>
                                          <div class='custom-control custom-checkbox'>
                                            <input
                                              type='checkbox'
                                              class='custom-control-input'
                                              id='above'
                                              name='above'
                                              onChange={e =>
                                                this.changeHandler(e.target)
                                              }
                                            />
                                            <label
                                              class='custom-control-label'
                                              for='above'
                                            >
                                              Above 60
                                            </label>
                                          </div>
                                        </li>
                                        <li class='active'>
                                          <div class='custom-control custom-checkbox'>
                                            <input
                                              type='checkbox'
                                              class='custom-control-input'
                                              id='tf'
                                              name='tf'
                                              onChange={e =>
                                                this.changeHandler(e.target)
                                              }
                                            />
                                            <label
                                              class='custom-control-label'
                                              for='tf'
                                            >
                                              30 - 40
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div class='custom-control custom-checkbox'>
                                            <input
                                              type='checkbox'
                                              class='custom-control-input'
                                              id='et'
                                              name='et'
                                              onChange={e =>
                                                this.changeHandler(e.target)
                                              }
                                            />
                                            <label
                                              class='custom-control-label'
                                              for='et'
                                            >
                                              19 - 29
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div class='custom-control custom-checkbox'>
                                            <input
                                              type='checkbox'
                                              class='custom-control-input'
                                              id='under'
                                              name='under'
                                              onChange={e =>
                                                this.changeHandler(e.target)
                                              }
                                            />
                                            <label
                                              class='custom-control-label'
                                              for='under'
                                            >
                                              Under 18
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div> */}
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
                                  {/* <div class='kvs-select'>
                                    <div class='select-wrapper'>
                                      <span class='select-item'>Male</span>
                                      <ul>
                                        <li>
                                          <div class='custom-control custom-radio radio-mod inline-flex'>
                                            <input
                                              type='radio'
                                              class='custom-control-input'
                                              id='opt_male'
                                              name='opt_male'
                                              onChange={e =>
                                                this.changeHandler(e.target)
                                              }
                                            />
                                            <label
                                              class='custom-control-label'
                                              for='opt_male'
                                            >
                                              Male
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div class='custom-control custom-radio radio-mod nline-flex'>
                                            <input
                                              type='radio'
                                              class='custom-control-input'
                                              id='opt_female'
                                              name='opt_female'
                                              onChange={e =>
                                                this.changeHandler(e.target)
                                              }
                                            />
                                            <label
                                              class='custom-control-label'
                                              for='opt_female'
                                            >
                                              Female
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div> */}

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
                    <div class='user-info-header'>
                      <ul>
                        <li>
                          <a href='#' class='user-span18 current'>
                            Household data
                          </a>
                        </li>
                        <li>
                          <a href='#' class='user-span18'>
                            Individual data
                          </a>
                        </li>
                        <li>
                          <a href='#' class='user-span18'>
                            Animal data
                          </a>
                        </li>
                        <li>
                          <a href='#' class='user-span18'>
                            Gallery{' '}
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class='user-info-body user-info-add-body'>
                      <ul>
                        <li class='user-span14'>
                          <span>Place name</span>
                          <span>Parbati giri chaitas</span>
                        </li>

                        <li class='user-span14'>
                          <span>Ward</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>House number</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>GPS coordinates</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Coordinates latitude</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Coordinates longitude</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Coordinates altitude</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Coordinates Precisioin</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Household number</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Owner's Name</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Owner's Age</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Owner's sex</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Status</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>if_other_please_state_here</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Caste</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>caste_other</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Religion</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Religion_other</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Mother_tongue</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>MT_other</span>
                          <span>-</span>
                        </li>

                        <li class='user-span14'>
                          <span>Education_owner</span>
                          <span>-</span>
                        </li>
                      </ul>
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
