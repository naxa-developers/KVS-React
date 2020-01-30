import React from 'react';
import { Link, HashRouter } from 'react-router-dom';

function NavBarHome(props) {
  return (
    <header className='home-header'>
      <div className='container-fluid'>
        <div className='nav-wrap'>
          <div className='nav-left'>
            <h1 className='logo-heading'>
              <span>K</span>VS
            </h1>
          </div>
          <div className='nav-right'>
            <ul className='link-title' id='nav-dropdown'>
              <li onClick={props.intro}>Introduction</li>
              <li onClick={props.summary}>Summary</li>
              <li onClick={props.feature}>Features</li>
              <Link to='/login'>
                <li>Sign in</li>
              </Link>
            </ul>
            <div className='toggle-button active'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBarHome;
