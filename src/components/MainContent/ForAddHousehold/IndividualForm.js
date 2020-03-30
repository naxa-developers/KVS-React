import React, { Component } from 'react';

export default class IndividualForm extends Component {
  render() {
    return (
      <div class='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li class='user-span14'>
            <span>Education Level</span>
            <span>
              <input
                type='text'
                class='form-control'
                // id='household-input'
                placeholder='...'
                name='education_level'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Occupation</span>
            <span>
              <input
                type='text'
                // class='form-control'
                // id='household-input'
                placeholder='...'
                name='occupation'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Working Status</span>
            <span>
              <input
                type='text'
                // class='form-control'
                // id='household-input'
                placeholder='...'
                name='working_status'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Monthly Income</span>
            <span>
              <input
                type='text'
                // class='form-control'
                // id='household-input'
                placeholder='...'
                name='income'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Falling under Social Security Criteria</span>
            <span>
              <input
                type='text'
                // class='form-control'
                // id='household-input'
                placeholder='...'
                name='social_security'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Reason for not receiving Social Security</span>
            <span>
              <input
                type='text'
                // class='form-control'
                // id='household-input'
                placeholder='...'
                name='social_security_reason'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
