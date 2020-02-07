import React from 'react';
import home from '../../img/homeImage.png';
import { Link } from 'react-router-dom';
import { Component } from 'react';


class EditPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        name: '',
        address: '',
        ageGroup: '',
        gender: '',
        citizenshipNo: '',
        wardNo: '',
        phoneNo: '',
        familySize:'',
        socialSecurity: null,



      
    }
  }
    
  render() {
  
    console.log("on edit page", this.props.detailsToEdit);
    
    return (
  
        <aside className='sidebar auto-h' style={{
            position: 'sticky',
          top: '0px',
          height: '100vh'
          }} >
             
             <div class="card">
             <div className='card-header'>
              <h4 style={{ color: 'white' }}>
                <span style={{ color: '#F7D315' }}>Saptakoshi </span>
                Municipality
                {localStorage.getItem('name') === 'saptakoshiward3' ?
                  <span style={{ color: '#F7D315' }} > Ward 3</span>
                  :
                  ''
                }
              </h4>
            </div>
                        <div class="card-body">
                            <a href=""><span class="previous-icon"></span></a>
                            <div class="user-profile user-profile-edit">
                                {/* <!-- top --> */}
                                <div class="user-profile-top">
                                    <figure>
                                        <img src={home} alt="" />
                                    </figure>
                                    <div class="text-wrap">
                                        <form>
                                            <div class="form-group">
                                              <input type="text" class="form-control" id="exampleInputText" placeholder={this.props.name} onChange= {() => this.props.changeName() } />
                                            </div>

                                            <div class="form-group">
                                                <input type="text" class="form-control" id="exampleInputAddress" placeholder="Kuwapani, Gorkha, Nepal, 33600" />
                                              </div>
                                        </form>
                                       <span class="user-span16">14 Nov. 2019</span>
                                    </div>
                                </div>
                            
                                {/* <!-- bottom --> */}
                                <div class="user-profile-bottom">
                                    <div class="filter">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <span class="user-span16">Age group</span>
                                                    <div class="form-group">
                                                        <div class="kvs-select">
                                                            <div class="select-wrapper">
                                                                <span class="select-item">16-29 yrs</span>
                                                                <ul>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input"
                                                                                id="above" name="above"/>
                                                                            <label class="custom-control-label" for="above">Above 60
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li class="active">
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input"
                                                                                id="tf" name="tf"/>
                                                                            <label class="custom-control-label" for="tf">30 - 40
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input"
                                                                                id="et" name="et"/>
                                                                            <label class="custom-control-label" for="et">19 -
                                                                                29</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input"
                                                                                id="under" name="under"/>
                                                                            <label class="custom-control-label" for="under">Under 18
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <span class="user-span16">Gender</span>
                                                    <div class="form-group">
                                                        <div class="kvs-select">
                                                            <div class="select-wrapper">
                                                                <span class="select-item">Male</span>
                                                                <ul>
                                                                    <li>
                                                                        <div class="custom-control custom-radio radio-mod inline-flex">
                                                                            <input type="radio" class="custom-control-input" id="opt_male" name="opt_male"/>
                                                                            <label class="custom-control-label" for="opt_male">Male</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="custom-control custom-radio radio-mod nline-flex">
                                                                            <input type="radio" class="custom-control-input" id="opt_female" name="opt_female"/>
                                                                            <label class="custom-control-label" for="opt_female">Female</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <span class="user-span16">Citizenship No.</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="citizenshipId" placeholder="495098568"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <span class="user-span16">Phone</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="PhoneId" placeholder="9849-087-908" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <span class="user-span16">Ward No.</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="WardId" placeholder="11" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <span class="user-span16">Family Size</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="Familysize_Id" placeholder="4" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <span class="user-span16">Social Security</span>                                                    <div class="form-group">
                                                        <div class="custom-control custom-radio inline-flex">
                                                            <input type="radio" class="custom-control-input" id="yes"
                                                                name="yes" />
                                                            <label class="custom-control-label" for="yes">Yes</label>
                                                        </div>
                                                        <div class="custom-control custom-radio inline-flex">
                                                            <input type="radio" class="custom-control-input" id="no" name="yes"/>
                                                            <label class="custom-control-label" for="no">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>  
                                    </div>
                                </div>

                                <div class="buttons btn-mod">
                                    <button role="button" class="common-button-bg" onclick="myFunction()">
                                        Save
                                    </button>
                                    <button role="button" class="common-button-plain">
                                        cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
          </aside>
    );

  } 
  
}

export default EditPage;
