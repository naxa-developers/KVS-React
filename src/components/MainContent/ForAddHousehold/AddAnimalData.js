import React, { Component } from 'react';
import Select from 'react-select';
import Axios from 'axios';
import { animalOptions, commercialOptions } from './dropdownOptions';
import { confirmAlert } from 'react-confirm-alert'; // Import

import { Redirect } from 'react-router-dom';

const initialState = {
  animalType: '',
  animalNo: '',
  commercialPurpose: ''
};

export default class AddAnimalData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialState,
      animalCount: 0,
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
      redirect: false
    };
  }

  changeHandler = e => {
    // this.setState({ [e.name]: e.label });

    this.setState({ [e.name]: e.value });
  };

  addMoreAnimal = () => {
    // post into db
    this.submitHandler();

    // reset the form value
    this.setState(initialState);
  };

  validateAdd() {
    !this.state.animalType
      ? alert('Fill out all the fields.')
      : this.addMoreAnimal();
  }

  submitHandler = () => {
    let animalData = {
      id: this.state.count + 1,
      // index: this.state.count,
      parent_index: this.props.pkid,
      survey: this.props.pkid,
      // survey: this.props.pkid,
      animal_type: this.state.animalType,
      animal_number: this.state.animalNo,
      is_it_for_commercial_purpose: this.state.commercialPurpose
    };

    let animalFormData = new FormData();

    for (let key in animalData) {
      animalFormData.append(key, animalData[key]);
    }

    // for (let [name, value] of animalFormData) {
    //   console.log(`${name} = ${value}`);
    // }

    // Axios({
    //   method: 'post',
    //   url: `http://139.59.67.104:8019/api/v1/animal_detail/?house_index=${this.props.pkid}`,
    //   data: animalFormData,
    //   headers: {
    //     'Content-type': 'multipart/form-data',
    //     Authorization: `Token ${this.state.token}`
    //   }
    // })
    //   .then(res => {
    //     console.log('submit working', res.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // this.props.tabHandler()

    this.state.animalCount++;
    // console.log(`Submitted ${this.state.animalCount} Animal form`);

    // this.successAlert();
  };

  successAlert() {
    // alert('Form successfully submitted');

    this.setState(
      {
        redirect: true
      },
      () => {
        confirmAlert({
          title: 'Form Submitted Successfully.',
          // message: '',
          buttons: [
            {
              label: 'OK'
            }
          ]
        });
      }
    );
    sessionStorage.removeItem('household');
    sessionStorage.removeItem('available');
  }

  render() {
    if (this.state.redirect) {
      // console.log('object');
      return <Redirect push to='/home' />;
    }
    // console.log(this.props.pkid);

    // console.log(animalOptions[0].name);
    return (
      <div className='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li class='user-span14'>
            <span>
              <strong>Animal Data : {this.state.animalCount + 1}</strong>
            </span>
          </li>

          <li className='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Animal Type</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div className='form-wrap'>
                  <Select
                    options={animalOptions}
                    rightAligned={false}
                    placeholder={'Animal Type'}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>
          {/* {this.state.animalType === 'Other' ? (
            <li class='user-span14'>
              <span>Animal type other</span>
              <span>
                <input
                  type='text'
                  id='household-input'
                  placeholder='...'
                  name='other'
                  // onChange={e => this.props.getData(e.target)}
                />
              </span>
            </li>
          ) : null} */}

          <li className='user-span14'>
            <span>Animal Number</span>
            <span>
              <input
                type='text'
                class='form-control'
                id='Familysize_Id'
                placeholder='4'
                name='animalNo'
                value={this.state.animalNo}
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>

          <li className='user-span14'>
            <div className='row'>
              <div class='col-sm-4'>
                <span>Is it for commercial purpose?</span>
              </div>
              <div class='col-sm-6 col-md-8'>
                <div className='form-wrap'>
                  <Select
                    options={commercialOptions}
                    rightAligned={false}
                    placeholder={''}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    onChange={e => this.changeHandler(e)}
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class='buttons btn-mod'>
          <button
            role='button'
            class='common-button-bg btn-bg'
            onClick={() => {
              this.validateAdd();
            }}
          >
            Add More Animal
          </button>
          <button
            type='submit'
            role='button'
            class='common-button-bg'
            onClick={() => {
              this.submitHandler(), this.successAlert();
            }}
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    );
  }
}
