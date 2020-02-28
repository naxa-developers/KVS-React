import React, { Component } from 'react';
import Select from 'react-select';
import '../../Filter/FilterCss.css';

export default class AddHouseholdData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li class='user-span14'>
            <span>House number</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='house_no'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          {/* <li class='user-span14'>
            <span>GPS coordinates</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='coordinates'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li> */}

          <li class='user-span14'>
            <span>Coordinates latitude</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='latitude'
                onChange={e => {
                  this.props.validateData(e);
                  this.props.getData(e);
                }}
              />
              <div style={{ fontSize: 12, color: 'red' }}>
                {this.props.latError}
              </div>
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
                name='longitude'
                onChange={e => {
                  this.props.validateData(e);
                  this.props.getData(e);
                }}
              />
              <div style={{ fontSize: 12, color: 'red' }}>
                {this.props.lngError}
              </div>
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
                name='altitude'
                onChange={e => this.props.getData(e.target)}
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
                name='precision'
                onChange={e => this.props.getData(e.target)}
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
                name='household_no'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Owner Status</span>
            <Select
              class='form-control'
              options={this.props.dropdown[0]}
              // rightAligned={false}
              placeholder='Status'
              onChange={e => this.props.getData(e)}
            />
          </li>

          <li class='user-span14'>
            <span>if_other_please_state_here</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='other'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Caste</span>
            <Select
              class='form-control'
              options={this.props.dropdown[1]}
              // rightAligned={false}
              placeholder='Caste'
              onChange={e => this.props.getData(e)}
            />
          </li>

          <li class='user-span14'>
            <span>caste_other</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='other_caste'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Religion</span>
            <Select
              class='form-control'
              options={this.props.dropdown[2]}
              // rightAligned={false}
              placeholder='Religion'
              onChange={e => this.props.getData(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Religion_other</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='other_religion'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Mother_tongue</span>
            <Select
              class='form-control'
              options={this.props.dropdown[3]}
              // rightAligned={false}
              placeholder='Mother Tongue'
              onChange={e => this.props.getData(e)}
            />
          </li>

          <li class='user-span14'>
            <span>Mother_Tongue_other</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='household-input'
                placeholder='...'
                name='mt_other'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>

          <li class='user-span14'>
            <span>Owner Education</span>
            <Select
              class='form-control'
              options={this.props.dropdown[4]}
              // rightAligned={false}
              placeholder='Owner Education'
              onChange={e => this.props.getData(e)}
            />
          </li>
        </ul>
        <div class='buttons btn-mod'>
          <button
            type='submit'
            role='button'
            class='common-button-bg'
            onClick={this.props.handleSubmit}
          >
            Save &amp; Continue
          </button>
          <button role='button' class='common-button-bg btn-bg'>
            cancel
          </button>
        </div>
      </div>
    );
  }
}
