import React, { Component } from 'react';

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
        animalType: e.value
      });
    } else if (e.name === 'animal_no') {
      this.setState({
        animalNo: e.value
      });
    } else if (e.name === 'purpose') {
      this.setState({
        commercialPurpose: e.value
      });
    }
  };

  render() {
    return (
      <div className='user-info-body user-info-add-body'>
        <ul className='data-mod'>
          <li className='user-span14'>
            <span>Animal Type</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='Familysize_Id'
                // placeholder='4'
                name='animal_type'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
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
            <span>
              <input
                type='text'
                // class='form-control'
                id='Familysize_Id'
                // placeholder='4'
                name='purpose'
                onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>
        </ul>
        <div class='buttons btn-mod'>
          <button
            type='submit'
            role='button'
            class='common-button-bg'
            onClick={this.props.tabHandler}
          >
            Save &amp; Continue
          </button>
        </div>
      </div>
    );
  }
}
