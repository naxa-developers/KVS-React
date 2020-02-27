import React, { Component } from 'react';
import Select from 'react-select';
import { animalOptions, commercialOptions } from './dropdownOptions';

export default class AddAnimalData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animalType: '',
      animalNo: '',
      commercialPurpose: ''
    };
  }

  changeHandler = e => {
    if (e.name === 'animal_type') {
      this.setState({
        animalType: e.label
      });
    } else if (e.name === 'animal_no') {
      this.setState({
        animalNo: e.value
      });
    } else if (e.name === 'commercial') {
      this.setState({
        commercialPurpose: e.label
      });
    }
  };

  submitHandler = () => {
    let animalData = {
      animal_type: this.state.animalType,
      animal_number: this.state.animalNo,
      is_it_for_commercial_purpose: this.state.commercialPurpose
    };

    let animalFormData = new FormData();

    for (let key in animalData) {
      animalFormData.append(key, animalData[key]);
    }

    for (let [name, value] of animalFormData) {
      console.log(`${name} = ${value}`);
    }

    this.props.tabHandler();
  };

  render() {
    return (
      <div className='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li className='user-span14'>
            <span>Animal Type</span>
            <Select
              options={animalOptions}
              rightAligned={false}
              placeholder={'Animal Type'}
              onChange={e => this.changeHandler(e)}
            />
          </li>
          <li className='user-span14'>
            <span>Animal Number</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='Familysize_Id'
                placeholder='4'
                name='animal_no'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>
          <li className='user-span14'>
            <span>Is it for commercial purpose?</span>
            <Select
              options={commercialOptions}
              rightAligned={false}
              placeholder={''}
              onChange={e => this.changeHandler(e)}
            />
          </li>
        </ul>
        <div class='buttons btn-mod'>
          <button
            type='submit'
            role='button'
            class='common-button-bg'
            onClick={this.submitHandler}
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    );
  }
}
