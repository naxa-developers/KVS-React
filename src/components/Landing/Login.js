import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import bgimg from '../../img/login-bg.jpg';
import logo from '../../img/logo.png';
import nepal from '../../img/nepal.png';

// import '../../scss/local/partials/pages/login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        username: '',
        password: ''
      },
      redirect: false,
      error: false
    };
  }

  onSubmit = () => {
    // console.log(this.state.credentials);
    fetch('http://139.59.67.104:8019/api/v1/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    })
      .then(data => data.json())
     
      
      .then(data => {
        this.props.userLogin(data.token, this.state.credentials);
        if (data.token) {
          this.setState({
            redirect: true
          });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => console.error(error));
  };

  inputChanged = e => {
    const cred = this.state.credentials;
    cred[e.target.name] = event.target.value;
    this.setState({
      credentials: cred
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />;
    }
    return (
      <div className='kvs-wrapper'>
        <div className='container-fluid main-wrapper p-0'>
          <aside
            className='sidebar login-sidebar'
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            <div className='card' style={{ height: '100vh' }}>
              <div className='card-header'>
                <Link to='/login'>
                  <h1 className="logo-heading logo-white">
                      <span>D</span>CA
                  </h1>
                </Link>
                {/* <ul className="sidebar-nav">
                            <li className="current">survey</li>
                            <li>about</li>
                        </ul> */}
              </div>
              <div className='card-body'>
                <div className='login-sidebar-content'>
                  <h2>
                <span> Household</span>  Data Visualization Portal 
                  </h2>
                  {/* <h2>
                    All <span>Nepal</span> population data in one place
                  </h2> */}
                  <p>
                An envision of complete individual household data from various municipalties, with the aim of disaster risk reduction and early assistance. 
                  </p>
                </div>
              </div>
              <p className='copy-right'>© DCA. All rights reserved.</p>
            </div>
          </aside>

          <div className='main-content'>
            <main className='login-main'>
              <div className='login-card'>
                <div className='login-header'>
                  <h3>
                    Sign in to <span>DCA</span>
                  </h3>

                  {/* <div  className="alert alert-primary" role="alert"> 
                           <h7>Please use 'sandip' as username and 'sandip123' as password for development purposes.</h7>
                            </div> */}

                  <p>Enter your details below</p>
                </div>
                {this.state.error && (
                  <div className='alert alert-primary' role='alert'>
                    <h6>Unable to login</h6>
                  </div>
                )}
                <div className='login-body'>
                  <div className='form-group'>
                    <div className='label-title'>
                      <label>Username or Email</label>
                    </div>
                    <input
                      type='text'
                      id='username'
                      name='username'
                      className='form-control'
                      placeholder='Username or Email'
                      value={this.state.credentials.username}
                      onChange={e => this.inputChanged(e)}
                    />
                  </div>
                  <div className='form-group'>
                    <div className='label-title'>
                      <label>Password</label>
                      {/* <a href=''>Forgot your password ? </a> */}
                    </div>
                    <input
                      type='Password'
                      id='password'
                      name='password'
                      className='form-control'
                      placeholder='Password'
                      value={this.state.credentials.password}
                      onChange={e => this.inputChanged(e)}
                      onKeyDown={(e) => {
                        if (e.key == 'Enter') { this.onSubmit() }
                      }}

                    />
                  </div>
                  <div className='form-group'>
                    <button
                      role='button'
                      className='common-button common-button-bg'
                      onClick={() => this.onSubmit()}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
