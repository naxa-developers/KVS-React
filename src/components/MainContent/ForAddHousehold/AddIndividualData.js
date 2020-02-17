import React, { Component } from 'react';

export default class AddIndividualData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class='user-info-body user-info-add-body'>
        <ul>
          {/* <li class='user-span14'>
            <span>Name</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='Parbati Giri Chaitas'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li> */}

          {/* <li class='user-span14'>
            <span>Age</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li> */}

          {/* <li class='user-span14'>
            <span>Gender</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li> */}

          {/* <li class='user-span14'>
            <span>Citizenship No.</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li> */}

          <li class='user-span14'>
            <span>Education Level</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Occupation</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Working Status</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Monthly Income</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Falling under Social Security Criteria</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          {/* <li class='user-span14'>
            <span>Social Security Received</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li> */}

          <li class='user-span14'>
            <span>Reason for not receiving Social Security</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          {/* <li class='user-span14'>
            <span>Status of Family Member</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li> */}
        </ul>
      </div>
    );
  }
}
