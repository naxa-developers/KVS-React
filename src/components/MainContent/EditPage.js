import React from 'react';
import home from '../../img/homeImage.png';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Select from 'react-select';

class EditPage extends Component {
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

  categoryChanged = e => {
    // console.log(e.label);
    // this.setState({selectedVal : e})
  };

  render() {
    // console.log('on edit page', this.props.detailsToEdit);
    const details = this.props.detailsToEdit;
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
    console.log(this.props, 'props');

    return (
      <aside className='sidebar'>
        <div className='card'>
          <div className='card-header'>
            {/* <a href='index.html'>
              <h1 className='logo-heading logo-white'>
                <span>Saptakoshi </span>Municipality
              </h1>
            </a> */}
          </div>
          <div className='card-body'>
            <Link to='/home'>
              <span className='previous-icon'></span>
            </Link>
            <div className='user-profile user-profile-edit'>
              {/* <!-- top --> */}
              <div className='user-profile-top'>
                <figure class='add-img'>
                  <img src={home} alt='' />
                  <span className='round-span'></span>
                </figure>
                <div className='text-wrap'>
                  <form>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputText'
                        placeholder={details[0]}
                        name='ownerName'
                        onChange={e => this.props.changeHandler(e.target)}
                      />
                    </div>

                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='exampleInputAddress'
                        placeholder={details[8]}
                        name='address'
                        onChange={e => this.props.changeHandler(e.target)}
                      />
                    </div>
                  </form>
                  <span className='user-span16'>{details[9]}</span>
                </div>
              </div>

              {/* <!-- bottom --> */}
              <div className='user-profile-bottom'>
                <div className='filter'>
                  <form>
                    <div className='row'>
                      <div className='col-md-6'>
                        <span className='user-span16'>Age group</span>
                        <div className='form-group'>
                          <Select
                            options={optionsAge}
                            rightAligned={false}
                            placeholder={details[1]}
                            onChange={e => this.props.changeHandler(e)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <span className='user-span16'>Gender</span>
                        <div className='form-group'>
                          <Select
                            options={optionGen}
                            rightAligned={false}
                            placeholder={details[2]}
                            onChange={e => this.props.changeHandler(e)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <span className='user-span16'>Citizenship No.</span>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            id='citizenshipId'
                            name='citizenShip'
                            placeholder={details[3]}
                            onChange={e => this.props.changeHandler(e.target)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <span className='user-span16'>Phone</span>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            id='PhoneId'
                            name='phoneNumber'
                            placeholder={details[4]}
                            onChange={e => this.props.changeHandler(e.target)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <span className='user-span16'>Ward No.</span>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            id='WardId'
                            name='wardNumber'
                            placeholder={details[5]}
                            onChange={e => this.props.changeHandler(e.target)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <span className='user-span16'>Family Size</span>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            id='Familysize_Id'
                            name='familySize'
                            placeholder={details[7]}
                            onChange={e => this.props.changeHandler(e.target)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <span className='user-span16'>Social Security</span>
                        <div className='form-group'>
                          <div className='custom-control custom-radio inline-flex'>
                            <input
                              type='radio'
                              className='custom-control-input'
                              id='yes'
                              name='yes'
                              onChange={e => this.props.changeHandler(e.target)}
                            />
                            <label
                              className='custom-control-label'
                              htmlFor='yes'
                            >
                              Yes
                            </label>
                          </div>
                          <div className='custom-control custom-radio inline-flex'>
                            <input
                              type='radio'
                              className='custom-control-input'
                              id='no'
                              name='yes'
                              onChange={e => this.props.changeHandler(e.target)}
                            />
                            <label
                              className='custom-control-label'
                              htmlFor='no'
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

              <div className='buttons btn-mod'>
                <button
                  role='button'
                  className='common-button-bg'
                  onClick={() => this.props.submitHandler()}
                >
                  Save
                </button>
                <button
                  role='button'
                  className='common-button-plain'
                  onClick={() => this.props.displayEdit()}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default EditPage;
