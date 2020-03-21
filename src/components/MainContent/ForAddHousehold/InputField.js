import React from 'react';

export default function InputField(props) {
  return (
    <li class='user-span14'>
      <span>{props.label}</span>
      <span>
        <input
          type='text'
          class='form-control'
          id='household-input'
          placeholder='...'
          name={props.name}
          onChange={e => props.getData(e.target)}
        />
      </span>
    </li>
  );
}
