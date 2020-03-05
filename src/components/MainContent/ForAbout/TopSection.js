import React from 'react';
import group223 from '../../../img/default-avatar.png';
import Cross from '../../../img/cross.png';
import Check from '../../../img/check.png';
import { Link, withRouter } from 'react-router-dom';
import { Component } from 'react';
import ScrollBar from "react-perfect-scrollbar";
import { JsonToExcel } from 'react-json-excel'
import '../../Filter/FilterCss.css'
import { confirmAlert } from 'react-confirm-alert';
import Axios from 'axios';

class TopSection extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  deleteHousehold = () => {
  
     
     
     console.log("s");
  }
  openModal = (d) => {
    confirmAlert({

        title: 'Are you sure?',
        message: 'Do you really want to delete these data?',
        buttons: [
            {
                label: 'Cancel',
                // onClick: () => alert('Cancel')
            },
            {
                label: 'Delete',
                onClick: () => { 
                 
                   Axios({
                    method: 'delete',
                    url: `http://139.59.67.104:8019/api/v1/house_hold/${d}`,
                  
                  },
                 
                  
                  ).then( () => {
                    sessionStorage.removeItem('household')
                    this.props.history.push('/home')

                    // confirmAlert({ 
                    //   title:"User deleted",
                    //   message:"This cannot be undone",
                    //   buttons: [
                    //     {
                    //       label:'Ok',
                    //       onClick: () => {
                    //         sessionStorage.removeItem('household')
                    //         this.props.history.push('/home')
                    //       }
                     
                    //     }
                    //   ]
                    //  }
                    // )
                  }
                   
                 
                  )
                  
        
                  // this.deleteHousehold();
                 
              
                
                }
            }
        ]

    });
}

  render() {
    const value = this.props.value;
    const arrayvalue = [this.props.value];
    let className = "";
    let filename = "";
    let fields = "";
    let style = "";
    let fileformat = "";
    let id = ''
    let data = [];
    // console.log('value', value)
    function isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key))
          return false;
      }
      return true;
    }

    //for exporting data in excel format

    if (this.props.value.length != 0) {
      className = '',
        filename = 'individual data',
        fileformat = 'csv',
        fields = {
          "place_name": "Place Name",
          "ward": "Ward",
          "house_number": "house_number",
          'latitude': 'latitude',
          'longitude': 'longitude',
          'altitude': 'altitude',
          'gps_precision': 'gps_precision',
          'household_number': 'household_number',
          'owner_name': 'owner_name',
          'owner_age': 'owner_age',
          'owner_sex': 'owner_sex',
          'owner_status': 'owner_status',
          'owner_caste': 'owner_caste',
          'religion': 'religion',
          'mother_tongue': 'mother_tongue',
          'contact_no': 'contact_no',
          'owner_education': 'owner_education',
          'owner_citizenship_no': 'owner_citizenship_no',
          'main_occupation': 'main_occupation',
          'business': 'business',
          'crop_sufficiency': 'crop_sufficiency',
          'food_type': 'food_type',
          'monthly_expenses': 'monthly_expenses',
          'monthly_income': 'monthly_income',
          'loan': 'loan',
          'loan_amount': 'loan_amount',
          'loan_duration': 'loan_duration',
          'animal_presence': 'animal_presence',
          'animal_presence': 'animal_presence',
          'vehicle': 'vehicle',
          'facilities_type': 'facilities_type',
          'fuel_type': 'fuel_type',
          'land_ownership': 'land_ownership',
          'house_type': 'house_type',
          'house_built_year': 'house_built_year',
          'house_stories': 'house_stories',
          'no_of_rooms': 'no_of_rooms',
          'house_map_registered': 'house_map_registered',
          'earthquake_resistance': 'earthquake_resistance',
          'flood_prone': 'flood_prone',
          'owned_land_area': 'owned_land_area',
          'owned_land_near_river': 'owned_land_near_river',
          'owned_land_area_near_river': 'owned_land_area_near_river',
          'technical_manpower_presence': 'technical_manpower_presence',
          'distance_from_main_road': 'distance_from_main_road',
          'distance_from_nearest_school': 'distance_from_nearest_school',
          'distance_from_nearest_health_institution': 'distance_from_nearest_health_institution',
          'distance_from_nearest_security_forces': 'distance_from_nearest_security_forces',
          'water_sources': 'water_sources',
          'tubewell_type': 'tubewell_type',
          'tubewell_status': 'tubewell_status',
          'no_of_houses_using_tubewell': 'no_of_houses_using_tubewell',
          'has_flood_effect_tubewell': 'has_flood_effect_tubewell',
          'public_tap_distance': 'public_tap_distance',
          'toilet_facility': 'toilet_facility',
          'toilet_type': 'toilet_type',
          'waterborne_disease': 'waterborne_disease',
          'disaster_type': 'disaster_type',
          'hazard_type': 'hazard_type',
          'is_there_identified_risk_areas': 'is_there_identified_risk_areas',
          'disaster_information_medium': 'disaster_information_medium',
          'knowledge_on_early_warning_system': 'knowledge_on_early_warning_system',
          'early_warning_system_installed_nearby': 'early_warning_system_installed_nearby',
          'got_early_warning_during_disaster': 'got_early_warning_during_disaster',
          'medium_suitable_for_early_warning': 'medium_suitable_for_early_warning',
          'evacuation_shelter_availability': 'evacuation_shelter_availability',
          'distance_to_evacuation_shelter': 'distance_to_evacuation_shelter',
          'distance_to_nearest_open_space': 'distance_to_nearest_open_space',
          'distance_to_nearest_market': 'distance_to_nearest_market',
          'goods_available_in_nearest_market': 'goods_available_in_nearest_market',
          'distance_to_alternative_market': 'distance_to_alternative_market',
          'alternative_market_name': 'alternative_market_name',
          'nearest_market_operation_during_disaster': 'nearest_market_operation_during_disaster',
          'family_size': 'family_size',
          'social_security_received': 'social_security_received',
        },
        style = {
          background: '#1f3be3'
        },
        data = [arrayvalue[0]];
    }

    return (

      <aside className='sidebar'
      // style={{
      // position: 'sticky',
      // top: '0px',
      //   height: '100vh'
      // }}
      >

        <ScrollBar component="div">
          <div className='card' ref={(e) => {
            // if(e){
            //   e.style.setProperty('height','100vh', 'important')
            // }
          }} >
            <div className='card-header'>
              <Link to='/home'>
                <h2> <span style={{ color: '#F7D315' }}>{(localStorage.getItem("mun"))}</span>
                  <span></span>  <span style={{ color: '#FFFFFF' }}>municipality</span> 
            <span  style={{ color: '#F7D315' }}>
                    {
                      localStorage.getItem("ward") !== 'null' && <span> Ward {localStorage.getItem("ward")} </span>

                    }
                  </span>
                </h2>
              </Link>

            </div>
            <div>
              <Link to='/home'>
                <i
                  className='material-icons'
                  style={{ color: 'white', paddingLeft: '15px' }}
                // onClick={() => this.props.clicked()}
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
                      {value.place_name}
                    </span>
                    {/* <span className='user-span16'>{value.date}</span> */}
                  </div>
                </div>
                <div className='user-profile-bottom'>
                  <ul>
                    <li>
                      <div className='left'>
                        <span className='user-span16'>Age</span>
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
                </div>
                <div className='user-profile-para'>
                  <a>
                    <span onClick={() => this.props.displayEdit()}>Edit</span>
                  </a>
                  <a>
                    <span style={{color: 'red'}} 
                    onClick={() => this.openModal(value.id)}
                    >Delete</span>
                  </a>
                  <a>
                    <span>Export</span>
                  </a>
                </div>
                <p>
                  <a>
                    <span className='user-span14'>
                      {console.log(isEmpty(data), 'empty or not '), isEmpty(data) === false ?
                        <JsonToExcel data={data}
                          className={className}
                          filename={`${value.owner_name} data`}
                          fields={fields}
                          style={style}
                          fileformat={fileformat}>
                        </JsonToExcel>
                        : ""}
                    </span>
                  </a>
                </p>

              </div>
            </div>
          </div>
        </ScrollBar>
      </aside>
    );

  }

}

export default withRouter(TopSection);
