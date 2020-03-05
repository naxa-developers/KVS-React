import React, { Component } from 'react';
import Axios from 'axios';
import Select from 'react-select';

import {
  ageOptions,
  genderOptions,
  educationOptions,
  occupationOptions,
  workstatusOptions,
  ssCriteriaOptions,
  ssReceivedOptions,
  ssReasonOptions,
  statusOptions,
  disabilityOptions,
  chronicIllnessOptions
} from './dropdownOptions';

const initialState = {
  name: '',
  ageGroup: '',
  gender: '',
  citizenshipNo: '',
  educationLevel: '',
  occupation: '',
  otherOccupation: '',
  workingStatus: '',
  monthlyIncome: '',
  socialSecurityCriteria: '',
  socialSecurityReceived: '',
  socialSecurityReason: '',
  otherssReason: '',
  status: '',
  otherStatus: '',
  otherDisabilityType: '',
  otherDisabilityType: '',
  chronicIllness: '',
  otherChronicIllness: ''
};

export default class AddIndividualData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialState,
      individualCount: 0,
      token: `${localStorage.getItem('myValueInLocalStorage')}`
    };
  }

  changeHandler = e => {
    this.setState({ [e.name]: e.value });
  };

  validateAdd() {
    !this.state.name ? alert('Fill out all the fields.') : this.addMorePerson();
  }

  // validateSave() {
  //   !this.state.name
  //     ? this.props.tabHandler()
  //     : () => {
  //         this.addMorePerson(), this.props.tabHandler();
  //       };
  // }

  addMorePerson = () => {
    // post into db here
    this.submitHandler();

    // this.state.count++;
    // console.log(`Submitted ${this.state.count} Individual form`);
    this.setState(initialState);
  };

  submitHandler = () => {
    // post into db here
    let individualData = {
      id: this.state.individualCount + 1,
      // index: this.state.count,
      parent_index: this.props.pkid,
      survey: this.props.pkid,

      name: this.state.name,
      age_group: this.state.ageGroup,
      gender: this.state.gender,
      citizenship_number: this.state.citizenshipNo,
      education_level: this.state.educationLevel,
      occupation: this.state.occupation,
      other_occupation: this.state.otherOccupation,
      working_status: this.state.workingStatus,
      monthly_income: this.state.monthlyIncome,
      falling_under_social_security_criteria: this.state.socialSecurityCriteria,
      social_security_received: this.state.socialSecurityReceived,
      reasons_for_not_received_social_security: this.state.socialSecurityReason,
      status_of_family_member: this.state.status,
      status_of_family_member_other: this.state.otherStatus,
      disability_type: this.state.disabilityType,
      disability_type_other: this.state.otherDisabilityType,
      chronic_illness: this.state.chronicIllness,
      chronic_illness_other: this.state.otherChronicIllness
    };

    let individualFormData = new FormData();

    for (let key in individualData) {
      individualFormData.append(key, individualData[key]);
    }

    // for (let [name, value] of individualFormData) {
    //   console.log(`${name} = ${value}`);
    // }

    // Axios({
    //   method: 'post',
    //   url: `http://139.59.67.104:8019/api/v1/family_members/?house_index=${this.props.pkid}`,
    //   data: individualFormData,
    //   headers: {
    //     'Content-type': 'multipart/form-data',
    //     Authorization: `Token ${this.props.token}`
    //   }
    // })
    //   .then(res => {
    //     console.log('submit working', res.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    this.state.individualCount++;
    // console.log(`Submitted ${this.state.individualCount} Individual form`);

    // this.props.tabHandler();
  };

  render() {
    return (
      <div class='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li class='user-span14'>
            <span>
              <strong>Family Member : {this.state.individualCount + 1}</strong>
            </span>
          </li>
          <li class='user-span14'>
            <span>Name</span>
            <span>
              <input
                value={this.state.name}
                type='text'
                class='form-control'
                id='household-input'
                placeholder='...'
                name='name'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Age Group</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={ageOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Gender</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={genderOptions}
                    rightAligned={false}
                    placeholder={'Gender'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          <li class='user-span14'>
            <span>Citizenship No.</span>
            <span>
              <input
                value={this.state.citizenshipNo}
                type='text'
                class='form-control'
                id='household-input'
                placeholder='...'
                name='citizenshipNo'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Education Level</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={educationOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Occupation</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={occupationOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {this.state.occupation === 'Other' ? (
            <li class='user-span14'>
              <span>Occupation other</span>
              <span>
                <input
                  value={this.state.otherOccupation}
                  class='form-control'
                  type='text'
                  id='household-input'
                  placeholder='...'
                  name='otherOccupation'
                  onChange={e => this.changeHandler(e.target)}
                />
              </span>
            </li>
          ) : null}

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Working Status</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={workstatusOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          <li class='user-span14'>
            <span>Monthly Income</span>
            <span>
              <input
                value={this.state.monthlyIncome}
                type='text'
                class='form-control'
                id='household-input'
                placeholder='...'
                name='monthlyIncome'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Falling under Social Security Criteria</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={ssCriteriaOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Social Security Received</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={ssReceivedOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Reason for not receiving Social Security</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={ssReasonOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Status</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={statusOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {this.state.status === 'Other' ? (
            <li class='user-span14'>
              <span>Status other</span>
              <span>
                <input
                  value={this.state.otherStatus}
                  class='form-control'
                  type='text'
                  id='household-input'
                  placeholder='...'
                  name='otherStatus'
                  onChange={e => thischangeHandler(e.target)}
                />
              </span>
            </li>
          ) : null}

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Disability Type</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={disabilityOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {this.state.disabilityType === 'Other' ? (
            <li class='user-span14'>
              <span>Disability Type other </span>
              <span>
                <input
                  value={this.state.otherDisabilityType}
                  class='form-control'
                  type='text'
                  id='household-input'
                  placeholder='...'
                  name='otherDisabilityType'
                  onChange={e => this.changeHandler(e.target)}
                />
              </span>
            </li>
          ) : null}

          <li class='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Chronic Illness</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div class='form-wrap'>
                  <Select
                    options={chronicIllnessOptions}
                    rightAligned={false}
                    placeholder={'Age'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>

          {this.state.chronicIllness === 'Other' ? (
            <li class='user-span14'>
              <span>Chronic Illness other</span>
              <span>
                <input
                  value={this.state.otherChronicIllness}
                  class='form-control'
                  type='text'
                  id='household-input'
                  placeholder='...'
                  name='otherChronicIllness'
                  onChange={e => this.changeHandler(e.target)}
                />
              </span>
            </li>
          ) : null}
        </ul>

        <div class='buttons btn-mod'>
          <button
            role='button'
            class='common-button-bg btn-bg'
            // onClick={this.addMorePerson}
            onClick={() => {
              this.validateAdd();
            }}
          >
            Add More Person
          </button>
          <button
            type='submit'
            role='button'
            class='common-button-bg'
            onClick={() => {
              // this.validateSave();
              this.submitHandler();
              this.props.tabHandler();
            }}
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    );
  }
}
