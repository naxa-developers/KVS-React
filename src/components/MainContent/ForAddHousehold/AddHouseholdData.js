import React, { Component } from 'react';
import ModalForm from './ModalForm';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import DropdownField from './DropdownField';
import InputField from './InputField';
import CheckboxField from './CheckboxField';
import RadioField from './RadioField';
import OtherField from './OtherField';

import Select from 'react-select';
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
  }

  handleClose = () => this.setState({ show: false, setShow: false });
  handleShow = () =>
    this.setState({ show: true, setShow: true }, () => {
      this.mapRef.current.leafletElement.invalidateSize();
    });

  renderOther = () => {
    // console.log('checkOther');
    // console.log(this.props.other);
    // const other = this.props.other.map(item => {
    //   const key = Object.keys(item).toString();
    //   const value = Object.values(item).toString();
    //   // console.log(data, 'data');
    //   // console.log(key, 'key');
    //   // console.log(value, 'value');
    //   if (key === data) {
    //     if (value === 'Other') {
    //       // console.log('working');
    //       return true;
    //     }
    //   }
    //   // console.log(key, '= key');
    //   // console.log(value, '= value');
    //   // console.log('');
    // });
    // if (other.toString() === 'true') {
    //   return <OtherField />;
    // }
    // // return <OtherField />;
    console.log('renderother');
    console.log(this.props.displayOther, 'prop');
    if (this.props.displayOther.toString() === 'true') {
      console.log('inside if');
      return <OtherField />;
    }
    return <OtherField />;
  };

  cancelHandler() {
    this.setState({ redirect: '/home' });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect} />;
    }

    // console.log(this.props.inputs);

    return (
      <div class='user-info-body user-info-add-body'>
        <ModalForm
          show={this.state.show}
          setShow={this.state.setShow}
          handleClose={this.handleClose}
          mapRef={this.mapRef}
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
                id='household-input'
                placeholder='...'
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
                id='household-input'
                placeholder='...'
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
            getData={this.props.getData}
            checkOther={this.renderOther}
          />

          <DropdownField
            label={'Caste'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].casteOptions
            }
            getData={this.props.getData}
            checkOther={this.renderOther}
          />

          {this.props.tempValue.includes('caste') && (
            <OtherField
              name={'caste_other'}
              getOtherField={this.props.getOtherField}
            />
          )}

          {/* {this.renderOther('caste')} */}

          <DropdownField
            label={'Religion'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].religionOptions
            }
            getData={this.props.getData}
          />

          {this.props.tempValue.includes('religion') && (
            <OtherField
              name={'religion'}
              getOtherField={this.props.getOtherField}
            />
          )}

          {/* {this.renderOther('religion')} */}

          <DropdownField
            label={'Mother Tongue'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].mtOptions
            }
            getData={this.props.getData}
          />

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
              this.props.dropdown[0] && this.props.dropdown[0].genderOptions
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
          <DropdownField
            label={'Loan'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].loanOptions
            }
            getData={this.props.getData}
          />

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
            getData={this.props.getData}
          />

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

          <CheckboxField
            label={'Facilities'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].facilitiesOptions
            }
            getArray={this.props.getArray}
          />

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
            label={'House Register Status'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].houseRegisteredOptions
            }
            getData={this.props.getData}
          />
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
            getData={this.props.getData}
          />
          <DropdownField
            label={'Owned Land Area'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].landAreaOptions
            }
            getData={this.props.getData}
          />
          <RadioField
            label={
              'Does the land under your ownership lies near to the river/flood plain?'
            }
            name={'landNearRiver'}
            getData={this.props.getData}
          />

          <li className='user-span14'>
            <h6>Technical Manpower Details</h6>
          </li>
          <RadioField
            label={'Technical Manpower Presence'}
            name={'manpowerPresence'}
            getData={this.props.getData}
          />

          <li className='user-span14'>
            <h6>Access To Infrastructures</h6>
          </li>
          <CheckboxField
            label={'Distance From Main Road'}
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].distanceFromMainRoad
            }
            getArray={this.props.getArray}
          />
          <CheckboxField
            label={'Type of Road'}
            dropdown={this.props.dropdown[0] && this.props.dropdown[0].roadType}
            getArray={this.props.getArray}
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
          <DropdownField
            label={'Nearest public tap distance'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].publicTapDistance
            }
            getData={this.props.getData}
          />
          <RadioField
            label={'Does your house have latrines/toilet?'}
            name={'latrine'}
            getData={this.props.getData}
          />
          <CheckboxField
            label={'Latrine/Toilet Type'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].toiletType
            }
            getArray={this.props.getArray}
          />
          <RadioField
            label={
              'Have you/your family member been infected by any water-borne disease in these 2 weeks?'
            }
            name={'waterborneDisease'}
            getData={this.props.getData}
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
          <CheckboxField
            label={'Possible risks in your area/ward'}
            dropdown={
              this.props.dropdown[0] && this.props.dropdown[0].hazardType
            }
            getArray={this.props.getArray}
          />
          <DropdownField
            label={'Does your ward have identified risk areas?'}
            // dropdown={this.props.dropdown[0] && this.props.dropdown[0]}
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
          <RadioField
            label={'Do you know about early warning system?'}
            name={'earlyWarning'}
            getData={this.props.getData}
          />
          <DropdownField
            label={
              'Is there an early warning system installed in your area/ward?'
            }
            // dropdown={this.props.dropdown[0] && this.props.dropdown[0]}
            getData={this.props.getData}
          />
          <RadioField
            label={
              'Did you/your family member get early information before disaster event?'
            }
            name={'earlyInformation'}
            getData={this.props.getData}
          />
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
          <DropdownField
            label={'Does your area/ward have an evacuation shelter?'}
            // dropdown={this.props.dropdown[0] && this.props.dropdown[0]}
            getData={this.props.getData}
          />
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
          <DropdownField
            label={
              'How far is an alternative market other than the main market in your ward?'
            }
            dropdown={
              this.props.dropdown[0] &&
              this.props.dropdown[0].distanceToAlternativeMarket
            }
            getData={this.props.getData}
          />
          <DropdownField
            label={'Was the nearest market operating in the time of disaster?'}
            // dropdown={
            //   this.props.dropdown[0] &&
            //   this.props.dropdown[0]
            // }
            getData={this.props.getData}
          />
          <DropdownField
            label={'Is there a warehouse in your area/ward?'}
            // dropdown={
            //   this.props.dropdown[0] &&
            //   this.props.dropdown[0]
            // }
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
          <RadioField
            label={'Does your house have an emergency kit?'}
            name={'emergencyKit'}
            getData={this.props.getData}
          />
          <li className='user-span14'>
            <h6>Training/Empowerment</h6>
          </li>
          <DropdownField
            label={
              'Have you/your family member ever been involved in "Disaster preparedness and risk reduction" training/meetings/program?'
            }
            // dropdown={this.props.dropdown[0] && this.props.dropdown[0]}
            getData={this.props.getData}
          />
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
          <RadioField
            label={
              'Have you/your family member ever been involved in simulations?'
            }
            name={'simulations'}
            getData={this.props.getData}
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
            getData={this.props.getData}
          />
          <RadioField
            label={
              'Have you/your family member prepared contingency plan to protect you and family members from disaster?'
            }
            name={'disasterPlan'}
            getData={this.props.getData}
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
