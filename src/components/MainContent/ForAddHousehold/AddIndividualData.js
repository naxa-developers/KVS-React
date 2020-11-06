import React, { Component } from 'react';
import Axios from 'axios';
import Select from 'react-select';
import DropdownField from './DropdownField';
import InputField from './InputField';
import CheckboxField from './CheckboxField';
import RadioField from './RadioField';
import OtherField from './OtherField';

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

      inputs: [],

      token: `${localStorage.getItem('myValueInLocalStorage')}`
    };
  }

  fetchOptions = () => {
    Axios.get(`${process.env.BASE_URL}api/v1/choices`).then(res => {
      let arr = [];
      arr.push(res.data.data[0]);

      this.setState({
        dropdownOptions: arr
      });
    });
  };

  // changeHandler = e => {
  //   this.setState({ [e.name]: e.value });
  // };

  changeHandler = e => {
    const selectedInput = this.state.inputs.find(input => {
      return Object.keys(input)[0] === e.name;
    });
    if (!!selectedInput) {
      this.setState({
        inputs: this.state.inputs
          .filter(input => {
            return Object.keys(input)[0] !== e.name;
          })
          .concat({ [e.name]: e.value })
      });
    } else {
      this.setState({
        inputs: this.state.inputs.concat({ [e.name]: e.value })
      });
    }
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

          <InputField
            label={'Name'}
            name={'name'}
            getData={this.changeHandler}
          />

          <InputField
            label={'Age'}
            name={'age_group'}
            getData={this.changeHandler}
          />

          <DropdownField
            label={'Gender'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].genderOptions
            }
            // getData={this.props.getDataOther}
            // checkOther={this.renderOther}
          />

          <InputField
            label={'Citizenship No.'}
            name={'citizenship_number'}
            getData={this.changeHandler}
          />

          <DropdownField
            label={'Education Level'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].educationOptions
            }
            // getData={this.props.getDataOther}
            // checkOther={this.renderOther}
          />

          <DropdownField
            label={'Occupation'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].occupationOptions
            }
            // getData={this.props.getDataOther}
            // checkOther={this.renderOther}
          />

          <DropdownField
            label={'Work Status'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].workstatusOptions
            }
            // getData={this.props.getDataOther}
            // checkOther={this.renderOther}
          />

          <InputField
            label={'Monthly Income'}
            name={'altitude'}
            getData={this.changeHandler}
          />

          <CheckboxField
            label={'Falling under Social Security Criteria'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].ssCriteriaOptions
            }
            // getArray={this.props.getArray}
          />

          <DropdownField
            label={'Social Security Received'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].ssReceivedOptions
            }
            getData={this.props.getDataOther}
            checkOther={this.renderOther}
          />

          <DropdownField
            label={'Reason for not receiving Social Security'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].ssReasonOptions
            }
            getData={this.props.getDataOther}
            checkOther={this.renderOther}
          />

          <CheckboxField
            label={'Status'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].statusOptions
            }
            // getArray={this.props.getArray}
          />

          <CheckboxField
            label={'Disability Type'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].disabilityOptions
            }
            getArray={this.props.getArray}
          />

          <CheckboxField
            label={'Chronic Illness Type'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].chronicIllnessOptions
            }
            getArray={this.props.getArray}
          />
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
