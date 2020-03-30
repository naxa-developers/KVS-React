import React from 'react';

export default function RadioField(props) {
  return (
    <li class='user-span14'>
      <span>{props.label}</span>
      <span>
        {/* <div> */}
        <input
          type='radio'
          // class='custom-control-input'
          name={props.name}
          value='true'
          onChange={e => props.getData(e.target)}
        />
        <label for='yes'>Yes</label>
        {/* </div> */}
        {/* <div> */}
        <input
          type='radio'
          // class='custom-control-input'
          name={props.name}
          value='false'
          onChange={e => props.getData(e.target)}
        />
        <label for='no'>No</label>
        {/* </div> */}
      </span>
    </li>
  );
}
