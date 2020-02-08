import React from 'react';
import group223 from '../../../img/default-avatar.png';
import Cross from '../../../img/cross.png';
import Check from '../../../img/check.png';
import { Link } from 'react-router-dom';
import { JsonToExcel } from 'react-json-excel'

function TopSection(props) {

  const value = props.value;
  const arrayvalue = [props.value];
  let className = "";
  let filename = "";
  let fields = "";
  let style = "";
  let fileformat = "";
  let data = [];
  console.log('value', value)
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  //for exporting data in excel format

  if (props.value.length != 0) {
    className = 'user-profile-para',
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
    <aside className='sidebar auto-h' style={{
      position: 'sticky',
      top: '0px',
      height: '100vh',
      overflowY: 'scroll'
    }}>
      <div>
        <div className='card' ref={(e) => {
          if (e) {
            e.style.setProperty('height', '100vh', 'important')
          }
        }} >
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
          <div>
            <Link to='/home'>
              <i
                className='material-icons'
                style={{ color: 'white', paddingLeft: '15px' }}
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
                <p className='user-profile-para'>
                  <span>
                    {console.log(isEmpty(data), 'empty or not '), isEmpty(data) === false ?
                      <JsonToExcel data={data}
                        className={className}
                        filename={filename}
                        fields={fields}
                        style={style}
                        fileformat={fileformat}>
                      </JsonToExcel>
                      : ""}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default TopSection;
