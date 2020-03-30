import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default function CheckboxField(props) {
  return (
    <li class='user-span14'>
      <div className='row'>
        <div class='col-sm-4'>
          <span>{props.label}</span>
        </div>
        <div class='col-sm-6 col-md-8'>
          {/* <div className='form-wrap'> */}
          <ReactMultiSelectCheckboxes
            options={props.dropdown}
            placeholder={props.label}
            onChange={e => props.getArray(e)}
          />
          {/* </div> */}
        </div>
      </div>
    </li>
  );
}
