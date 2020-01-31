import React from 'react'
import group223 from "../../../img/default-avatar.png";
import Cross from '../../../img/cross.png';
import Check from '../../../img/check.png';
import Nepal from '../../../img/Emblem_of_Nepal.png';
import { Link } from 'react-router-dom';

function TopSection(props) {
  const value = props.value;
  return (
    <aside className='sidebar auto-h'>
      <div>
        <div className='card'>
          <div className='card-header'>
            <a className='logo'>
              <img style={{ height: '75px' }} src={Nepal} alt='logo Nepal' />
            </a>
          </div>
          <div>
            <Link to='/home'>
              <i
                className='material-icons'
                style={{ color: 'white', paddingLeft: '15px' }}
              //   onClick={() => this.props.clicked()}
              >
                keyboard_backspace
              </i>
            </Link>
          </div>
          <div className='card-body'>
            <div className='user-profile'>
              <div className='user-profile-top'>
                <figure>
                  <img src={group223} alt='User Image' />
                </figure>
                <div className='text-wrap'>
                  <span className='user-title'>{value.owner_name}</span>
                  <span className='user-span18'>
                    {value.place_name}, {value.district} <br />
                    Nepal
                  </span>
                  <span className='user-span16'>{value.date}</span>
                </div>
              </div>
              <div className='user-profile-bottom'>
                <ul>
                  <li>
                    <div className='left'>
                      <span className='user-span16'>Age group</span>
                      <span className='user-span18'>{value.owner_age} yrs</span>
                    </div>
                    <div className='right'>
                      <span className='user-span16'>Gender</span>
                      <span className='user-span18'>{value.owner_sex}</span>
                    </div>
                  </li>

                  <li>
                    <div className='left'>
                      <span className='user-span16'>Citizenship No.</span>
                      <span className='user-span18'>
                        {value.owner_citizenship_no}
                      </span>
                    </div>
                    <div className='right'>
                      <span className='user-span16'>Phone</span>
                      <span className='user-span18'>
                        {value.contact_no === 'nan' ? '-' : value.contact_no}
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className='left'>
                      <span className='user-span16'>Ward no.</span>
                      <span className='user-span18'>{value.ward}</span>
                    </div>
                    <div className='right'>
                      <span className='user-span16'>Family size</span>
                      <span className='user-span18'>{value.family_size}</span>
                    </div>
                  </li>

                  <li>
                    <div className='left'>
                      <span className='user-span16'>Social Security</span>
                      {value.social_security_received === true ? (
                        <i className=''>
                          {' '}
                          <img src={Check} alt='check' />
                        </i>
                      ) : (
                          <i className=''>
                            {' '}
                            <img src={Cross} alt='cross' />
                          </i>
                        )}
                    </div>
                  </li>
                </ul>
                {/* <p className='user-profile-para'>
                  <span>Export All</span>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default TopSection;
