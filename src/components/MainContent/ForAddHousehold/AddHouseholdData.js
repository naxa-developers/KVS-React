import React, { Component } from 'react';

export default class AddHouseholdData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class='user-info-body user-info-add-body'>
        <ul>
          {/* <li class='user-span14'>
            <span>Place name</span>
            <span>
              <input
                border='none'
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
            <span>Ward</span>
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
            <span>House number</span>
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
            <span>GPS coordinates</span>
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
            <span>Coordinates latitude</span>
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
            <span>Coordinates longitude</span>
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
            <span>Coordinates altitude</span>
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
            <span>Coordinates Precisioin</span>
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
            <span>Household number</span>
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
            <span>Owner's Name</span>
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
            <span>Owner's Age</span>
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
            <span>Owner's sex</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='Familysize_Id'
                placeholder='...'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Status</span>
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
            <span>if_other_please_state_here</span>
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
            <span>Caste</span>
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
            <span>caste_other</span>
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
            <span>Religion</span>
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
            <span>Religion_other</span>
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
            <span>Mother_tongue</span>
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
            <span>MT_other</span>
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
            <span>Education_owner</span>
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
        </ul>
      </div>
    );
  }
}
