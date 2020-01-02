import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          credentials: {
            username: '',
            password: '',
          },
          redirect: false,
          error: false
             
        }
    }

    onSubmit = () => {
       
       
        console.log(this.state.credentials);
        fetch('http://139.59.67.104:8019/api/v1/login', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(this.state.credentials)
        }).then(data => data.json())
        .then(
          data => {
            this.props.userLogin(data.token)
            if(data.token){
              this.setState({
                redirect:true
              })
            }
            else{
              this.setState({error: true})
            }
          
            
            
          }
        ).catch(error => console.error(error)
        )
        

        
       
       


    }

    inputChanged = e => {
      const cred = this.state.credentials;
      cred[e.target.name] = event.target.value;
      this.setState({
        credentials: cred
      })


    }
    
    render() {
      if(this.state.redirect) {
        return <Redirect to='/home' />
      }
        return (
        <div class="container text-center">
            <div class="row">
              
                    {/* <form class="form-horizontal"> */}
                      <fieldset>
                        <div id="legend">
                          <legend class="">Login</legend>
                        </div>
                        <div  class="alert alert-primary" role="alert"> 
                            <h7>Please use 'sandip' as username and 'sandip123' as password for development purposes.</h7>
                            </div>
                        {this.state.error&&
                            <div  class="alert alert-primary" role="alert"> 
                            <h6>Unable to login</h6>
                            </div>
                        }

                      
                        <div class="control-group">

                          <label class="control-label"  for="username"
                        
                          >Username</label>
                          <div class="controls">
                            <input type="text" id="username" name="username" placeholder="" class="input-xlarge"
                            value={this.state.credentials.username}
                              onChange = {(e) => this.inputChanged(e)}
                            />
                          </div>
                        </div>
                        <div class="control-group">
                       
                          <label class="control-label" for="password"
                        
                          >Password</label>
                          <div class="controls">
                            <input type="password" id="password" name="password" placeholder="" class="input-xlarge"
                             value={this.state.credentials.password}
                             onChange = {(e) => this.inputChanged(e)}

                            />
                          </div>
                        </div>
                        <div class="control-group">
                    <br />
                          <div class="controls">
                            <button class="btn btn-success" onClick={()=> this.onSubmit()} >Login</button>
                          </div>
                        </div>
                      </fieldset>
                    {/* </form> */}
                
            </div>
        </div>
        
        )
    }
}
