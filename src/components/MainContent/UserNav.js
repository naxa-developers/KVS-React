import React, { Component } from 'react';
import Profile from '../../img/profile.png';
import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';

class UserNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  hideMenu(e) {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    this.setState({ showMenu: false });
  }

  logoutHandler = () => {
    localStorage.removeItem('myValueInLocalStorage');
    sessionStorage.removeItem('household');
    sessionStorage.removeItem('available');
    localStorage.removeItem('indexValue');
    localStorage.removeItem('name');
  };

  downloadMap = () => {
    console.log('hey download this')
  }

  render() {
    return (
      <div
        className={
          this.state.showMenu ? 'dropdown user-menu show' : 'dropdown user-menu'
        }
        onClick={() => this.showMenu()}
        style={{ zIndex: '2000' }}
      >
        <button
          className='dropdown-toggle'
          type='button'
          data-toggle='dropdown'
          onBlur={this.hideMenu}
          style={{ padding: '0', paddingRight: '1.3rem' }}
        >
          <div className='user-info' style={{ color: 'black' }}>
            <h6>{localStorage.getItem('name')}</h6>
            <span>
              {localStorage.getItem('name') === 'saptakoshiward3'
                ? 'Ward Officer'
                : 'Municipality Officer'}
            </span>
          </div>
        </button>
        <ul
          className={
            this.state.showMenu
              ? 'dropdown-menu dropdown-menu-right show'
              : 'dropdown-menu dropdown-menu-right'
          }
        >
          {/* <li>
            <a href='#'>My Profile</a>
          </li>
          <li>
            <a href='#'> Account Setting </a>
          </li> */}
          <li>
            <Link to='/'>
              Add household
            </Link>
          </li>

          <li>
            <Link to='/uploadhousehold'>
              Upload household
            </Link>
          </li>

          <li>
            <Link to='/usermanagement'>
              User management
            </Link>
          </li>

          <li>
            <Link to='/'>
              My account
            </Link>
          </li>


          <li className='dropdown-footer' onClick={() => this.logoutHandler()}>
            <Link to='/'>
              {/* <MaterialIcon
                className='material-icons'
                icon='power_settings_new'
              ></MaterialIcon> */}
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserNav;
