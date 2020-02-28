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
  workingStatus: '',
  monthlyIncome: '',
  socialSecurityCriteria: '',
  socialSecurityReceived: '',
  socialSecurityReason: '',
  status: '',
  disabilityType: '',
  chronicIllness: ''
};

export default class AddIndividualData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialState,
      count: 0,
      token: `${localStorage.getItem('myValueInLocalStorage')}`
    };
  }

  changeHandler = e => {
    if (e.name === 'name') {
      this.setState({
        name: e.value
      });
    } else if (e.name === 'ageGroup') {
      this.setState({
        ageGroup: e.label
      });
    } else if (e.name === 'gender') {
      this.setState({
        gender: e.label
      });
    } else if (e.name === 'citizenship_number') {
      this.setState({
        citizenshipNo: e.value
      });
    } else if (e.name === 'education_level') {
      this.setState({
        educationLevel: e.label
      });
    } else if (e.name === 'occupation') {
      this.setState({
        occupation: e.label
      });
    } else if (e.name === 'work_status') {
      this.setState({
        workingStatus: e.label
      });
    } else if (e.name === 'income') {
      this.setState({
        monthlyIncome: e.value
      });
    } else if (e.name === 'ss_criteria') {
      this.setState({
        socialSecurityCriteria: e.label
      });
    } else if (e.name === 'ss_received') {
      this.setState({
        socialSecurityReceived: e.label
      });
    } else if (e.name === 'ss_reason') {
      this.setState({
        socialSecurityReason: e.label
      });
    } else if (e.name === 'status') {
      this.setState({
        status: e.label
      });
    } else if (e.name === 'disability') {
      this.setState({
        disabilityType: e.label
      });
    } else if (e.name === 'chronic_illness') {
      this.setState({
        chronicIllness: e.label
      });
    }
  };

  addMorePerson = () => {
    // post into db here
    this.submitHandler();

    this.state.count++;
    console.log(`Submitted ${this.state.count} form`);
    this.setState(initialState);
  };

  submitHandler = () => {
    // post into db here
    let individualData = {
      id: this.state.count + 1,
      // index: this.state.count,
      parent_index: this.props.pkid,
      survey: this.props.pkid,

      name: this.state.name,
      age_group: this.state.ageGroup,
      gender: this.state.gender,
      citizenship_number: this.state.citizenshipNo,
      education_level: this.state.educationLevel,
      occupation: this.state.occupation,
      working_status: this.state.workingStatus,
      monthly_income: this.state.monthlyIncome,
      falling_under_social_security_criteria: this.state.socialSecurityCriteria,
      social_security_received: this.state.socialSecurityReceived,
      reasons_for_not_received_social_security: this.state.socialSecurityReason,
      status_of_family_member: this.state.status,
      disability_type: this.state.disabilityType,
      chronic_illness: this.state.chronicIllness
    };

    let individualFormData = new FormData();

    for (let key in individualData) {
      individualFormData.append(key, individualData[key]);
    }

    Axios({
      method: 'post',
      url: `http://139.59.67.104:8019/api/v1/family_members/?house_index=${this.props.pkid}`,
      data: individualFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Token ${this.props.token}`
      }
    })
      .then(res => {
        console.log('submit working', res.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.state.count++;
    console.log(`Submitted ${this.state.count} form`);

    // this.props.tabHandler();
  };

  render() {
    return (
      <div class='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li class='user-span14'>
            <span>Name</span>
            <span>
              <input
                value={this.state.name}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='name'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Age Group</span>
            <Select
              options={ageOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Gender</span>
            <Select
              options={genderOptions}
              rightAligned={false}
              placeholder={'Gender'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Citizenship No.</span>
            <span>
              <input
                value={this.state.citizenshipNo}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='citizenship_number'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Education Level</span>
            <Select
              options={educationOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Occupation</span>
            <Select
              options={occupationOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Working Status</span>
            <Select
              options={workstatusOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Monthly Income</span>
            <span>
              <input
                value={this.state.monthlyIncome}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='income'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Falling under Social Security Criteria</span>
            <Select
              options={ssCriteriaOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Social Security Received</span>
            <Select
              options={ssReceivedOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Reason for not receiving Social Security</span>
            <Select
              options={ssReasonOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Status</span>
            <Select
              options={statusOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Disability Type</span>
            <Select
              options={disabilityOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Chronic Illness</span>
            <Select
              options={chronicIllnessOptions}
              rightAligned={false}
              placeholder={'Age'}
              onChange={e => this.changeHandler(e)}
            />
          </li>
        </ul>
        <div class='buttons btn-mod'>
          <button
            role='button'
            class='common-button-bg btn-bg'
            onClick={this.addMorePerson}
          >
            Add More Person
          </button>
          <button
            type='submit'
            role='button'
            class='common-button-bg'
            onClick={() => {
              this.submitHandler(), this.props.tabHandler();
            }}
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    );
  }
}
