import React, { Component } from 'react';

export default class AddAnimalData extends Component {
  render() {
    return (
      <div className='user-info-body user-info-add-body'>
        <ul>
          <li className='user-span14'>
            <span>Animal Type</span>
            <span>
              <input
                type='text'
                // class='form-control'
                id='Familysize_Id'
                // placeholder='4'
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
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
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
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
                name='familySize'
                // onChange={e => this.changeHandler(e.target)}
              />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
