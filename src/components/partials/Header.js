import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i: 0
    };
  }

  render() {
    return (
      <div className='card-header'>
        <a href='index.html'>
            <h1 className="logo-heading">
              <span>K</span>VS
            </h1>
        </a>
        {/* <a href='index.html' className='logo'> */}
          {/* <img src="img/logo.png" alt="logo" /> */}
        {/* </a> */}
        <ul className='sidebar-nav' style={{ listStyleType: 'none' }}>
          <li
            className={this.state.i === 0 ? 'current' : ''}
            onClick={() => this.setState({ ...this.state, i: 0 })}
          >
            <Link to='/home'>survey</Link>
          </li>
          <li
            className={this.state.i !== 0 ? 'current' : ''}
            onClick={() => this.setState({ ...this.state, i: 1 })}
          >
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
