import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import './dropdown.css';

export default class AddHouseholdData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
    };
  }

  cancelHandler() {
    this.setState({ redirect: '/home' });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />;
    }

    return (
      <div class='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li class='user-span14'>
            <span>House number</span>
            <span>
              <input
                type='text'
                class='form-control'
                id='household-input'
                placeholder='...'
                name='houseNo'
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
                class='form-control'
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
                class='form-control'
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
                class='form-control'
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
                class='form-control'
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
                class='form-control'
                id='household-input'
                placeholder='...'
                name='householdNo'
                onChange={e => this.props.getData(e.target)}
              />
            </span>
          </li>
          <li class='user-span14'>
            <div className='row no-gutters'>
              <div class='col-4 col-sm-4 col-md-5'>
                <span>Owner Status</span>
              </div>
              <div class='col-6 col-sm-6 col-md-6'>
                <div class='form-wrap'>
                  <Select
                    // className='select-wrap select-wrap-toggle'
                    // styles={{
                    //   control: base => ({ ...base }),
                    //   option: base => ({
                    //     ...base,
                    //     backgroundColor: 'red'
                    //   })
                    // }}
                    options={this.props.dropdown[0]}
                    // rightAligned={false}
                    // placeholder='...'
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.props.getData(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {this.props.otherField[0] === '6' ? (
            <li class='user-span14'>
              <span>Owner_status_other</span>
              {/* <span>if other please state here</span> */}
              <span>
                <input
                  value={this.props.otherOwnerStatus}
                  type='text'
                  class='form-control'
                  id='household-input'
                  placeholder='...'
                  name='otherOwnerStatus'
                  onChange={e => this.props.getData(e.target)}
                />
              </span>
            </li>
          ) : null}

          <li class='user-span14'>
            <div className='row no-gutters'>
              <div class='col-4 col-sm-4 col-md-5'>
                <span>Caste</span>
              </div>
              <div class='col-6 col-sm-6 col-md-6'>
                <div class='form-wrap'>
                  <Select
                    // class='form-control'
                    options={this.props.dropdown[1]}
                    // rightAligned={false}
                    placeholder='Caste'
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.props.getData(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {this.props.otherField[1] === 'Other' ? (
            <li class='user-span14'>
              <span>caste_other</span>
              <span>
                <input
                  value={this.props.otherCaste}
                  type='text'
                  class='form-control'
                  id='household-input'
                  placeholder='...'
                  name='otherCaste'
                  onChange={e => this.props.getData(e.target)}
                />
              </span>
            </li>
          ) : null}
          <li class='user-span14'>
            <div className='row no-gutters'>
              <div class='col-4 col-sm-4 col-md-5'>
                <span>Religion</span>
              </div>
              <div class='col-6 col-sm-6 col-md-6'>
                <div class='form-wrap'>
                  <Select
                    // class='form-control'
                    options={this.props.dropdown[2]}
                    // rightAligned={false}
                    placeholder='Religion'
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.props.getData(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {this.props.otherField[2] === 'Other' ? (
            <li class='user-span14'>
              <span>Religion_other</span>
              <span>
                <input
                  value={this.props.otherReligion}
                  type='text'
                  class='form-control'
                  id='household-input'
                  placeholder='...'
                  name='otherReligion'
                  onChange={e => this.props.getData(e.target)}
                />
              </span>
            </li>
          ) : null}
          <li class='user-span14'>
            <div className='row no-gutters'>
              <div class='col-4 col-sm-4 col-md-5'>
                <span>Mother_tongue</span>
              </div>
              <div class='col-6 col-sm-6 col-md-6'>
                <div class='form-wrap'>
                  <Select
                    // class='form-control'
                    options={this.props.dropdown[3]}
                    // rightAligned={false}
                    placeholder='Mother Tongue'
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.props.getData(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {this.props.otherField[3] === 'Other' ? (
            <li class='user-span14'>
              <span>Mother_Tongue_other</span>
              <span>
                <input
                  value={this.props.otherMotherTongue}
                  type='text'
                  class='form-control'
                  id='household-input'
                  placeholder='...'
                  name='otherMotherTongue'
                  onChange={e => this.props.getData(e.target)}
                />
              </span>
            </li>
          ) : null}
          <li class='user-span14'>
            <div className='row no-gutters'>
              <div class='col-4 col-sm-4 col-md-5'>
                <span>Owner Education</span>
              </div>
              <div class='col-6 col-sm-6 col-md-6'>
                <div class='form-wrap'>
                  <Select
                    // class='form-control'
                    options={this.props.dropdown[4]}
                    // rightAligned={false}
                    placeholder='Owner Education'
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.props.getData(e)}
                  />
                </div>
              </div>
            </div>
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
          <button
            role='button'
            class='common-button-bg btn-bg'
            onClick={() => this.cancelHandler()}
          >
            cancel
          </button>
        </div>
      </div>
    );
  }
}
