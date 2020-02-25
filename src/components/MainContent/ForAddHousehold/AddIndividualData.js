import React, { Component } from 'react';

const initialState = {
  name: '',
  ageGroup: '',
  citizenshipNo: '',
  educationLevel: '',
  occupation: '',
  workingStatus: '',
  monthlyIncome: '',
  socialSecurityCriteria: '',
  socialSecurityReason: ''
};

export default class AddIndividualData extends Component {
  constructor(props) {
    super(props);

    this.state = { initialState, count: 0 };
  }

  changeHandler = e => {
    if (e.name === 'name') {
      this.setState({
        name: e.value
      });
    } else if (e.name === 'age_group') {
      this.setState({
        ageGroup: e.value
      });
    } else if (e.name === 'citizenship_number') {
      this.setState({
        citizenshipNo: e.value
      });
    } else if (e.name === 'education_level') {
      this.setState({
        educationLevel: e.value
      });
    } else if (e.name === 'occupation') {
      this.setState({
        occupation: e.value
      });
    } else if (e.name === 'working_status') {
      this.setState({
        workingStatus: e.value
      });
    } else if (e.name === 'income') {
      this.setState({
        monthlyIncome: e.value
      });
    } else if (e.name === 'social_security_criteria') {
      this.setState({
        socialSecurityCriteria: e.value
      });
    } else if (e.name === 'social_security_reason') {
      this.setState({
        socialSecurityReason: e.value
      });
    }
  };

  addMorePerson = () => {
    // post into db here

    this.state.count++;
    console.log(`Submitted ${this.state.count} form`);
    this.setState(initialState);
  };

  submitHandler = () => {
    // post into db here

    this.state.count++;
    console.log(`Submitted ${this.state.count} form`);

    this.props.tabHandler();
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
            <span>
              <input
                value={this.state.ageGroup}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='age_group'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
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
            <span>
              <input
                value={this.state.educationLevel}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='education_level'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Occupation</span>
            <span>
              <input
                value={this.state.occupation}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='occupation'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Working Status</span>
            <span>
              <input
                value={this.state.workingStatus}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='working_status'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
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
            <span>
              <input
                value={this.state.socialSecurityCriteria}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='social_security_criteria'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Reason for not receiving Social Security</span>
            <span>
              <input
                value={this.state.socialSecurityReason}
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='social_security_reason'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
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
            onClick={this.submitHandler}
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    );
  }
}
