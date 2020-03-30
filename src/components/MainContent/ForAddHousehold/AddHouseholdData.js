import React, { Component } from 'react';
import ModalForm from './ModalForm';
// import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DropdownField from './DropdownField';
import InputField from './InputField';
import CheckboxField from './CheckboxField';
import RadioField from './RadioField';
import OtherField from './OtherField';

// import Select from 'react-select';
import './dropdown.css';

export default class AddHouseholdData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      setShow: false,
      redirect: null
    };
    this.mapRef = React.createRef();
    // this.markerRef = React.createRef();
  }

  handleClose = () => this.setState({ show: false, setShow: false });
  handleShow = () =>
    this.setState({ show: true, setShow: true }, () => {
      this.mapRef.current.leafletElement.invalidateSize();
    });

  renderOther = field => {
    // const other = this.props.other.map(item => {
    //   const key = Object.keys(item).toString();
    //   const value = Object.values(item).toString();
    //   if (key === data) {
    //     if (value === 'Other') {
    //       // console.log('working');
    //       return true;
    //     }
    //   }
    // });
    // if (other.toString() === 'true') {
    //   return <OtherField />;
    // }
    // // return <OtherField />;
    // console.log('renderother');
    // console.log(this.props.displayOther, 'prop');
    // if (this.props.displayOther.toString() === 'true') {
    //   console.log('inside if');
    //   return <OtherField />;
    // }
    // return <OtherField />;
    // const other = this.props.other.map(item => {
    //   const key = Object.keys(item).toString();
    //   const value = Object.values(item).toString();
    //   console.log('key', key);
    //   console.log('value', value);
    //   console.log('field', value);
    //   console.log('-------------------------');
    //   if (key === field) {
    //     if (value === 'Other') {
    //       // console.log('working');
    //       return true;
    //     }
    //   }
    // });
    // if (other.toString() === 'true') {
    //   return true;
    // }
  };

  cancelHandler() {
    this.setState({ redirect: '/home' });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />;
    }

    // console.log(this.props.other, 'input props');
    // console.log(this.props.checkbox[7], 'checkbox[7]');
    return (
      <div class='user-info-body user-info-add-body'>
        <ModalForm
          show={this.state.show}
          setShow={this.state.setShow}
          handleClose={this.handleClose}
          mapRef={this.mapRef}
          // lat={this.props.latitude}
          // lng={this.props.longitude}
          center={this.props.center}
          marker={this.props.marker}
          updateLatLng={this.props.updateLatLng}
        />
        <ul className='data-mod'>
          <li className='user-span14'>
            <h6>House Owner Details</h6>
          </li>
          <InputField
            label={'House number'}
            name={'houseNo'}
            getData={this.props.getData}
          />
          {/* <InputField
            label={'Coordinates latitude'}
            name={'latitude'}
            getData={this.props.getData}
            onClick={this.handleShow}
          /> */}
          <li class='user-span14'>
            <span>Coordinates latitude</span>
            <span>
              <input
                type='text'
                class='form-control'
                // id='household-input'
                placeholder='...'
                value={this.props.latitude}
                name='latitude'
                // onChange={e => {
                //   this.props.validateData(e);
                //   this.props.getData(e);
                // }}
                onClick={this.handleShow}
              />
              <div style={{ fontSize: 12, color: 'red' }}>
                {this.props.latError}
              </div>
            </span>
          </li>
          <li class='user-span14'>
            <span>Coordinates longitude</span>
            <span>
              <input
                type='text'
                class='form-control'
                // id='household-input'
                placeholder='...'
                value={this.props.longitude}
                name='longitude'
                // onChange={e => {
                //   this.props.validateData(e);
                //   this.props.getData(e);
                // }}
                onClick={this.handleShow}
              />
              <div style={{ fontSize: 12, color: 'red' }}>
                {this.props.lngError}
              </div>
            </span>
          </li>
          {/* <OtherField /> */}
          <InputField
            label={'Coordinates altitude'}
            name={'altitude'}
            getData={this.props.getData}
          />
          <InputField
            label={'Coordinates Precision'}
            name={'precision'}
            getData={this.props.getData}
          />
          <DropdownField
            label={'Owner Status'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].ownerStatusOptions
            }
            getData={this.props.getDataOther}
            checkOther={this.renderOther}
          />
          {this.props.otherField[0].includes('6') && (
            <OtherField
              name={'owner_status_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <DropdownField
            label={'Caste'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].casteOptions
            }
            getData={this.props.getDataOther}
            checkOther={this.renderOther}
          />
          {this.props.otherField[1].includes('Other') && (
            <OtherField
              name={'caste_other'}
              getOtherField={this.props.getOtherField}
            />
          )}

          <DropdownField
            label={'Religion'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].religionOptions
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[2].includes('Other') && (
            <OtherField
              name={'religion_other'}
              getOtherField={this.props.getOtherField}
            />
          )}

          <DropdownField
            label={'Mother Tongue'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].mtOptions
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[3].includes('Other') && (
            <OtherField
              name={'mother_tongue_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <DropdownField
            label={'Owner Education'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].educationOptions
            }
            getData={this.props.getData}
          />
          <InputField
            label={'Responder Name'}
            name={'responderName'}
            getData={this.props.getData}
          />
          <DropdownField
            label={'Responder Sex'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].responderSex
            }
            getData={this.props.getData}
          />
          <InputField
            label={'Responder Age'}
            name={'responderAge'}
            getData={this.props.getData}
          />
          <InputField
            label={'Responder Contact'}
            name={'responderContact'}
            getData={this.props.getData}
          />
          <DropdownField
            label={'Other family living'}
            // dropdown={'hi'}
            getData={this.props.getData}
          />
          <li className='user-span14'>
            <h6>Economic Details</h6>
          </li>
          <CheckboxField
            label={'Main Occupation of the family members'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].occupationOptions
            }
            getArray={this.props.getArray}
          />
          {/* // --- crop sufficiency here --- */}
          {this.props.checkbox[0].includes('Business') && (
            <CheckboxField
              label={'Business'}
              dropdown={
                this.props.dropdown[0] && this.props.dropdown[0].businessOptions
              }
              getArray={this.props.getArray}
            />
          )}
          {this.props.checkbox[1].includes('Other') && (
            <InputField
              label={'Other Business'}
              name={'other_business'}
              getData={this.props.getData}
            />
          )}

          {this.props.checkbox[0].includes('Other') && (
            <InputField
              label={'Other Occupation'}
              name={'other_occupation'}
              getData={this.props.getData}
            />
          )}
          <InputField
            label={'Monthly Income'}
            name={'monthlyExpenses'}
            getData={this.props.getData}
          />
          <InputField
            label={'Monthly Expenses'}
            name={'monthlyExpenses'}
            getData={this.props.getData}
          />
          <RadioField
            label={'Loan'}
            name={'loan'}
            getData={this.props.getRadioField}
          />
          {this.props.radioField[0] === 'true' && (
            <InputField
              label={'If yes, how much?'}
              name={'loan_amount'}
              getData={this.props.getData}
            />
          )}
          {this.props.radioField[0] === 'true' && (
            <InputField
              label={'If yes, for how long?'}
              name={'loan_duration'}
              getData={this.props.getData}
            />
          )}
          <li className='user-span14'>
            <h6>Food Habit Details</h6>
          </li>
          <InputField
            label={'Food Details'}
            name={'foodDetails'}
            getData={this.props.getData}
          />
          <InputField
            label={'Main Staple'}
            name={'mainStaple'}
            getData={this.props.getData}
          />
          <InputField
            label={'Pulses'}
            name={'pulses'}
            getData={this.props.getData}
          />
          <InputField
            label={'Vegetables'}
            name={'vegetables'}
            getData={this.props.getData}
          />
          <InputField
            label={'Fruits'}
            name={'fruits'}
            getData={this.props.getData}
          />
          <InputField
            label={'Meat and Fish'}
            name={'meatAndFish'}
            getData={this.props.getData}
          />
          <InputField
            label={'Milk and Products'}
            name={'milkProducts'}
            getData={this.props.getData}
          />
          <InputField
            label={'Sugar Products'}
            name={'sugarProducts'}
            getData={this.props.getData}
          />
          <InputField
            label={'Oil Products'}
            name={'oilProducts'}
            getData={this.props.getData}
          />
          <InputField
            label={'Condiments'}
            name={'condiments'}
            getData={this.props.getData}
          />
          <li className='user-span14'>
            <h6>Insurance Details</h6>
          </li>
          <RadioField
            label={'Insurance'}
            name={'insurance'}
            getData={this.props.getRadioField}
          />
          {this.props.radioField[1] === 'true' && (
            <CheckboxField
              label={'If yes, which of the following insurance have you done?'}
              dropdown={
                this.props.dropdown[0] &&
                this.props.dropdown[0].insuranceOptions
              }
              getArray={this.props.getArray}
            />
          )}
          {this.props.checkbox[2].includes('Other') && (
            <OtherField
              name={'other_insurance'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <li className='user-span14'>
            <h6>Transportation and other facilities details</h6>
          </li>
          <CheckboxField
            label={'Vehicles'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].vehicleOptions
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[3].includes('Other heavy equipment') && (
            <InputField
              label={'Other Heavy Equipment'}
              name={'vehicles_other'}
              getData={this.props.getData}
            />
          )}
          <CheckboxField
            label={'Facilities'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].facilitiesOptions
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[4].includes('Other') && (
            <OtherField
              name={'other_facilities'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <li className='user-span14'>
            <h6>Fuel Details</h6>
          </li>
          <CheckboxField
            label={'Fuel Type'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].fuelOptions
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[5].includes('Other') && (
            <OtherField
              name={'other_fuel_type'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <li className='user-span14'>
            <h6>Details of House and Land Ownership</h6>
          </li>
          <DropdownField
            label={'Land Ownership'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].landOwnershipOptions
            }
            getData={this.props.getData}
          />
          <CheckboxField
            label={'House Type'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].houseTypeOptions
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[6].includes('Other') && (
            <OtherField
              name={'house_type_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <InputField
            label={'House Built Year'}
            name={'houseBuiltYear'}
            getData={this.props.getData}
          />
          <InputField
            label={'No. of Storey'}
            name={'houseStories'}
            getData={this.props.getData}
          />
          <InputField
            label={'No. of rooms'}
            name={'noOfRooms'}
            getData={this.props.getData}
          />
          <DropdownField
            label={
              'Have you received the building permit from the respective authority?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].houseRegisteredOptions
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[4].includes('Yes') && (
            <DropdownField
              label={'Have you received the building completion certificate?'}
              dropdown={
                this.props.dropdown[0] &&
                this.props.dropdown[0].buildingStandardCode
              }
              getData={this.props.getData}
            />
          )}
          <DropdownField
            label={'Earthquake Resistance'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].eqResistanceOptions
            }
            getData={this.props.getData}
          />
          <DropdownField
            label={'Flood Prone'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].floodProneOptions
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[5].includes('Yes') && (
            <DropdownField
              label={
                'If yes, has there been any work regarding flood resilience?'
              }
              dropdown={
                this.props.dropdown[0] &&
                this.props.dropdown[0].workRegardingFloodResilience
              }
              getData={this.props.getDataOther}
            />
          )}
          {this.props.otherField[6].includes('Yes') && (
            <DropdownField
              label={'If yes, which of the following work has been done?'}
              dropdown={
                this.props.dropdown[0] &&
                this.props.dropdown[0].floodResilienceActivities
              }
              getData={this.props.getDataOther}
            />
          )}
          {this.props.otherField[7].includes('Yes') && (
            <OtherField
              name={'flood_resilience_activities_other'}
              getOtherField={this.props.getOtherField}
            />
          )}

          <DropdownField
            label={'Owned Land Area'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].landAreaOptions
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[8] &&
            this.props.otherField[8] !== 'Landless' && (
              <RadioField
                label={
                  'Does the land under your ownership lies near to the river/flood plain?'
                }
                name={'owned_land_near_river'}
                getData={this.props.getRadioField}
              />
            )}
          {this.props.radioField[7] === 'true' && (
            <InputField
              label={'If yes, how much land is near to the river?'}
              name={'owned_land_area_near_river'}
              getData={this.props.getData}
            />
          )}

          <li className='user-span14'>
            <h6>Technical Manpower Details</h6>
          </li>
          <RadioField
            label={'Technical Manpower Presence'}
            name={'technical_manpower_presence'}
            getData={this.props.getRadioField}
          />

          {this.props.radioField[3] === 'true' && (
            <CheckboxField
              label={
                'If yes, which of the mentioned technical manpower are they?'
              }
              dropdown={
                this.props.dropdown[0] &&
                this.props.dropdown[0].manpowerTypeOptions
              }
              getArray={this.props.getArray}
            />
          )}
          {this.props.checkbox[7].includes('Doctor') && (
            <>
              <InputField
                label={'No. of Male Doctor'}
                name={'doctor_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Doctor'}
                name={'doctor_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Engineer') && (
            <>
              <InputField
                label={'No. of Male Engineer'}
                name={'engineer_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Engineer'}
                name={'engineer_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Sub-engineer') && (
            <>
              <InputField
                label={'No. of Male Sub-Engineer'}
                name={'subengineer_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Sub-Engineer'}
                name={'subengineer_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Nurse') && (
            <>
              <InputField
                label={'No. of Male Nurse'}
                name={'nurse_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Nurse'}
                name={'nurse_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes(
            'H.A/Lab Assistant/Radiologist/Pharmacist'
          ) && (
            <>
              <InputField
                label={'No. of Male (H.A/Lab Assistant/Radiologist/Pharmacist)'}
                name={'ha_lab_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={
                  'No. of Female (H.A/Lab Assistant/Radiologist/Pharmacist)'
                }
                name={'ha_lab_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Veterinary') && (
            <>
              <InputField
                label={'No. of Male Veterinary'}
                name={'veterinary_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Veterinary'}
                name={'veterinary_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Carpenter') && (
            <>
              <InputField
                label={'No. of Male Carpenter'}
                name={'dakarmi_sikarmi_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Carpenter'}
                name={'dakarmi_sikarmi_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Electrician') && (
            <>
              <InputField
                label={'No. of Male Electrician'}
                name={'electrician_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Electrician'}
                name={'electrician_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Plumber') && (
            <>
              <InputField
                label={'No. of Male Plumber'}
                name={'plumber_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female Plumber'}
                name={'plumber_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('J.T/J.T.A') && (
            <>
              <InputField
                label={'No. of Male J.T/J.T.A'}
                name={'jt_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female J.T/J.T.A'}
                name={'jt_female_number'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[7].includes('Other') && (
            <>
              <InputField
                label={'No. of Male (Other Technical)'}
                name={'other_technical_male_number'}
                getData={this.props.getData}
              />
              <InputField
                label={'No. of Female (Other Technical)'}
                name={'other_technical_female_number'}
                getData={this.props.getData}
              />
            </>
          )}

          <li className='user-span14'>
            <h6>Access To Infrastructures</h6>
          </li>

          <DropdownField
            label={'Distance From Main Road'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].distanceFromMainRoad
            }
            getData={this.props.getData}
          />
          {/* <CheckboxField
            label={'Type of Road'}
            dropdown={this.props.dropdown[0] && this.props.dropdown[0].roadType}
            getArray={this.props.getArray}
          /> */}
          <DropdownField
            label={'Type of Road'}
            dropdown={this.props.dropdown[0] && this.props.dropdown[0].roadType}
            getData={this.props.getData}
          />
          <InputField
            label={'Width of the road'}
            name={'roadWidth'}
            getData={this.props.getData}
          />
          <CheckboxField
            label={'Capacity of the road'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].roadCapacity
            }
            getArray={this.props.getArray}
          />
          <DropdownField
            label={'Nearest School'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].nearestSchool
            }
            getData={this.props.getData}
          />
          <DropdownField
            label={'Nearest Health Institution'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].nearestHealthInstitution
            }
            getData={this.props.getData}
          />
          <DropdownField
            label={'Nearest Security Forces'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].nearestSecurityForces
            }
            getData={this.props.getData}
          />
          <li className='user-span14'>
            <h6>Wash Facilities</h6>
          </li>
          <CheckboxField
            label={'Drinking Water Sources'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].waterSources
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[8].includes('Tube well') && (
            <>
              <DropdownField
                label={'If tube well, is it private or public?'}
                dropdown={
                  this.props.dropdown[0] && this.props.dropdown[0].tubewellType
                }
                getData={this.props.getData}
              />
              <DropdownField
                label={'What is the current status of tube well?'}
                dropdown={
                  this.props.dropdown[0] &&
                  this.props.dropdown[0].tubewellStatus
                }
                getData={this.props.getData}
              />
              <InputField
                label={'How many house use it?'}
                name={'no_of_houses_using_tubewell'}
                getData={this.props.getData}
              />
              <InputField
                label={'Has flood done any effect to tube well?'}
                name={'has_flood_effect_tubewell'}
                getData={this.props.getData}
              />
            </>
          )}
          {this.props.checkbox[8].includes('Other') && (
            <OtherField
              name={'water_sources_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <DropdownField
            label={'Nearest public tap distance'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].publicTapDistance
            }
            getData={this.props.getData}
          />
          <RadioField
            label={'Does your house have latrines/toilet?'}
            name={'toilet_facility'}
            getData={this.props.getRadioField}
          />
          {this.props.radioField[4] === 'true' && (
            <CheckboxField
              label={'Latrine/Toilet Type'}
              dropdown={
                this.props.dropdown[0] && this.props.dropdown[0].toiletType
              }
              getArray={this.props.getArray}
            />
          )}
          {this.props.checkbox[9].includes('Other') && (
            <OtherField
              name={'toilet_type_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <RadioField
            label={
              'Have you/your family member been infected by any water-borne disease in these 2 weeks?'
            }
            name={'waterborneDisease'}
            getData={this.props.getRadioField}
          />
          <li className='user-span14'>
            <h6>Disaster and Risk Details</h6>
          </li>
          <CheckboxField
            label={'Hazards in your area/ward'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].disasterType
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[10].includes('Other') && (
            <OtherField
              name={'disaster_type_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <CheckboxField
            label={'Possible risks in your area/ward'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].hazardType
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[11].includes('Other') && (
            <OtherField
              name={'hazard_type_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <DropdownField
            label={'Does your ward have identified risk areas?'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].identifiedRiskArea
            }
            getData={this.props.getData}
          />
          <CheckboxField
            label={'Disaster Information Medium'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].disasterInformationMedium
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[12].includes('Other') && (
            <OtherField
              name={'disaster_information_medium_other'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <RadioField
            label={'Do you know about early warning system?'}
            name={'earlyWarning'}
            getData={this.props.getRadioField}
          />
          <DropdownField
            label={
              'Is there an early warning system installed in your area/ward?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].earlyWarningSystem
            }
            getData={this.props.getData}
          />
          <RadioField
            label={
              'Did you/your family member get early information before disaster event?'
            }
            name={'got_early_warning_during_disaster'}
            getData={this.props.getRadioField}
          />
          {this.props.radioField[5] === 'true' && (
            <InputField
              label={'If yes, from which medium was the information provided?'}
              name={'got_early_warning_through'}
              getData={this.props.getData}
            />
          )}
          <CheckboxField
            label={
              'According to you, which medium is suitable for early warning of any disaster?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].mediumSuitableForEarlyWarning
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[13].includes('Other') && (
            <OtherField
              name={'medium_suitable_for_early_warning'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <DropdownField
            label={'Does your area/ward have an evacuation shelter?'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].evacuationShelterAvailability
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[9].includes('Yes') && (
            <InputField
              label={'If yes, how far is it from your house?'}
              name={'distance_to_evacuation_shelter'}
              getData={this.props.getData}
            />
          )}
          <DropdownField
            label={'How far is the nearest open space from your house?'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].nearestOpenSpace
            }
            getData={this.props.getData}
          />
          <DropdownField
            label={'How far is the nearest market from your house?'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].nearestMarket
            }
            getData={this.props.getData}
          />
          <CheckboxField
            label={
              'Which of the following materials are available in the nearest market?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].goodsAvailableInNearestMarket
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[14].includes('Other') && (
            <OtherField
              name={'goods_available_in_nearest_market'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <DropdownField
            label={
              'How far is an alternative market other than the main market in your ward?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].distanceToAlternativeMarket
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[10] &&
            this.props.otherField[10] !== 'No other market' && (
              <InputField
                label={'Name of the alternative market/place'}
                name={'alternative_market_name'}
                getData={this.props.getData}
              />
            )}
          <DropdownField
            label={'Was the nearest market operating in the time of disaster?'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].nearestMarketOperationDuringDisaster
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[11].includes('Yes') && (
            <DropdownField
              label={'If yes, were the necessary materials easily available?'}
              dropdown={
                this.props.dropdown[0] &&
                this.props.dropdown[0].easyAccessToGoods
              }
              getData={this.props.getDataOther}
            />
          )}

          <DropdownField
            label={'Is there a warehouse in your area/ward?'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].warehouseAvailableInWard
            }
            getData={this.props.getData}
          />
          <CheckboxField
            label={
              'What was your coping mechanism in the recently occurred disaster event?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].copingMechanismDuringDisaster
            }
            getArray={this.props.getArray}
          />
          {this.props.checkbox[15].includes('Other') && (
            <OtherField
              name={'coping_mechanism_during_disaster'}
              getOtherField={this.props.getOtherField}
            />
          )}
          <RadioField
            label={'Does your house have an emergency kit?'}
            name={'emergency_kit_availability_in_house'}
            getData={this.props.getRadioField}
          />
          {this.props.radioField[6] === 'true' && (
            <InputField
              label={
                'If yes, how often do you remove and replace the materials in emergency kit?'
              }
              name={'emergency_kit_material_update_frequency'}
              getData={this.props.getData}
            />
          )}
          <li className='user-span14'>
            <h6>Training/Empowerment</h6>
          </li>
          <DropdownField
            label={
              'Involved in "Disaster preparedness and risk reduction" training/meetings/program?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].involvedInDisasterTraining
            }
            getData={this.props.getDataOther}
          />
          {this.props.otherField[13].includes('Yes') && (
            <CheckboxField
              label={
                'Which of the following disaster related training were you/your family member involved in?'
              }
              dropdown={
                this.props.dropdown[0] &&
                this.props.dropdown[0].disasterTrainingType
              }
              getArray={this.props.getArray}
            />
          )}
          {this.props.checkbox[16].includes('Other') && (
            <OtherField
              name={'involved_disaster_training_type_other'}
              getOtherField={this.props.getOtherField}
            />
          )}

          <RadioField
            label={
              'Have you/your family member ever been involved in simulations?'
            }
            name={'simulations'}
            getData={this.props.getRadioField}
          />
          <CheckboxField
            label={'Hazard Simulation Type'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].hazardSimulationType
            }
            getArray={this.props.getArray}
          />
          <RadioField
            label={'Do you know about LDCRP guideline?'}
            name={'ldrcpGuideline'}
            getData={this.props.getRadioField}
          />
          <RadioField
            label={
              'Have you/your family member prepared contingency plan to protect you and family members from disaster?'
            }
            name={'disasterPlan'}
            getData={this.props.getRadioField}
          />
          <CheckboxField
            label={
              'Under which of the mentioned risk prone areas does your ward fall?'
            }
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].disastersInWard
            }
            getArray={this.props.getArray}
          />
        </ul>
        <div class='buttons btn-mod'>
          <button
            type='submit'
            role='button'
            class='common-button-bg'
            onClick={this.props.handleSubmit}
          >
            Save &amp; Continue
          </button>
          <button
            role='button'
            class='common-button-bg btn-bg'
            onClick={() => this.cancelHandler()}
          >
            cancel
          </button>
        </div>
      </div>
    );
  }
}
