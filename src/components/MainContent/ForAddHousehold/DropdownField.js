import React, { Component } from 'react';
import Select from 'react-select';

export default function DropdownField(props) {
  return (
    <li class='user-span14'>
      <div className='row'>
        <div class='col-sm-4'>
          <span>{props.label}</span>
        </div>
        <div class='col-sm-6 col-md-8'>
          <div class='form-wrap'>
            <Select
              // className='select-wrap select-wrap-toggle'
              // styles={{
              //   control: base => ({ ...base }),
              //   option: base => ({
              //     ...base,
              //     backgroundColor: 'red'
              //   })
              // }}
              options={props.dropdown}
              // rightAligned={false}
              placeholder={props.label}
              components={{
                IndicatorSeparator: () => null
              }}
              onChange={e => {
                props.getData(e);
                // props.checkOther();
              }}
            />
          </div>
        </div>
      </div>
    </li>
  );
}
