import React, { Component } from 'react';

import Man from '../../img/man-shape.png';
import Women from '../../img/women-shape.png';
import Cross from '../../img/cross.png';
import Check from '../../img/check.png';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overviewData: '',
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
      malePopnCount: '',
      femalePopnCount: '',
      securityReceivedCount: '',
      securityNotReceivedCount: '',
      malePopnCountNo: '',
      femalePopnCountNo: ''
    };
  }

  fetchData = () => {
    let malePopn = 0;
    let femalePopn = 0;
    let securityReceived = 0;
    let securityNotReceived = 0;
    let familySize = 0;
    let malePopnNo = 0;
    let femalePopnNo = 0;
    this.props.householdData &&
      this.props.householdData.map(data => {
        if (data.owner_sex === 'Male') {
          malePopn = malePopn + 1;
        }
        if (data.owner_sex === 'Female') {
          femalePopn = femalePopn + 1;
        }
        if (data.social_security_received === true) {
          securityReceived = securityReceived + 1;
        }
        if (data.social_security_received === false) {
          securityNotReceived = securityNotReceived + 1;
        }
        familySize = familySize + data.family_size;
        malePopnNo = malePopnNo + data.male_number;
        femalePopnNo = femalePopnNo + data.female_number;
      });
    this.state.femalePopnCount = femalePopn;
    this.state.malePopnCount = malePopn;
    this.state.securityReceivedCount = securityReceived;
    this.state.securityNotReceivedCount = securityNotReceived;
    this.state.familyCount = familySize;
    this.state.malePopnCountNo = malePopnNo;
    this.state.femalePopnCountNo = femalePopnNo;
  };

  render() {
    this.fetchData();
    return (
      <div className='overview'>
        <div className='overview-header'>
          <h3>Overview</h3>
          <button
            onClick={() => this.props.clicked()}
            role='button'
            className='common-button-border'
          >
            View more
          </button>
        </div>
        <div className='overview-body overview-home-body'>
          <div className='row'>
            <div className='col-xl-6'>
              <div className='overview-row'>
                <div className='overview-item'>
                  <div className='overview-data'>
                    <h4>
                      {this.props.householdData &&
                        this.props.householdData.length}
                    </h4>
                    <h6>Total houses</h6>
                  </div>
                </div>
                <div className='overview-item'>
                  <div className='overview-data'>
                    <h4>
                      {this.props.householdData && this.state.familyCount}
                    </h4>
                    <h6>Total population</h6>
                  </div>
                </div>
                <div className='overview-item overview-inline'>
                  <div className='overview-data'>
                    <h4>
                      <span>
                        {this.props.householdData && this.state.malePopnCount}
                      </span>
                      <i className=''>
                        {' '}
                        <img title='Male' src={Man} alt='man' />
                      </i>
                    </h4>
                    <h4>
                      <span>
                        {this.props.householdData && this.state.femalePopnCount}
                      </span>
                      <i className=''>
                        {' '}
                        <img title='Female' src={Women} alt='man' />
                      </i>
                    </h4>
                  </div>
                  <h6>House ownership</h6>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='overview-row'>
                <div className='overview-item overview-inline'>
                  <div className='overview-data'>
                    <h4>
                      <span>
                        {this.props.householdData &&
                          this.state.securityReceivedCount}
                      </span>
                      <i className=''>
                        {' '}
                        <img title='Received' src={Check} alt='check' />
                      </i>
                    </h4>
                    <h4>
                      <span>
                        {this.props.householdData &&
                          this.state.securityNotReceivedCount}
                      </span>
                      <i className=''>
                        {' '}
                        <img title='Not Received' src={Cross} alt='cross' />
                      </i>
                    </h4>
                  </div>
                  <h6>Social security Received</h6>
                </div>
              </div>
              <div className='overview-row'>
                <div className='overview-item overview-inline'>
                  <div className='overview-data'>
                    <h4>
                      <span>
                        {this.props.householdData && this.state.malePopnCountNo}
                      </span>
                      <i className=''>
                        {' '}
                        <img title='Male' src={Man} alt='man' />
                      </i>
                    </h4>
                    <h4>
                      <span>
                        {this.props.householdData &&
                          this.state.femalePopnCountNo}
                      </span>
                      <i className=''>
                        {' '}
                        <img title='Female' src={Women} alt='man' />
                      </i>
                    </h4>
                  </div>
                  <h6>population counts</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Overview;
