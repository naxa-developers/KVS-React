import React from 'react';

export default function OtherField(props) {
  return (
    <li class='user-span14'>
      <span>If other, please state here</span>
      <span>
        <input
          type='text'
          class='form-control'
          id='household-input'
          placeholder='...'
          name={props.name}
          onChange={e => props.getOtherField(e.target)}
        />
      </span>
    </li>
  );
}
