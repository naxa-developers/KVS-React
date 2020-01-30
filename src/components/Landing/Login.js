import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import bgimg from '../../img/login-bg.jpg';
import logo from '../../img/logo.png';
import nepal from '../../img/nepal.png';

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
        this.props.userLogin(data.token);
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
                <a className='logo' href='/'>
                  <img style={{ height: '150px' }} src={nepal} alt='logo' />
                </a>
                {/* <ul className="sidebar-nav">
                            <li className="current">survey</li>
                            <li>about</li>
                        </ul> */}
              </div>
              <div className='card-body'>
                <div className='login-sidebar-content'>
                  <h2>
                    All <span>Nepal</span> population data in one place
                  </h2>
                  <p>
                    Get all the population data from different regions of Nepal.
                  </p>
                </div>
              </div>
              <p className='copy-right'>© KVS. All rights reserved.</p>
            </div>
          </aside>

          <div className='main-content'>
            <main className='login-main'>
              <div className='login-card'>
                <div className='login-header'>
                  <h3>
                    Sign in to <span>KVS</span>
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
