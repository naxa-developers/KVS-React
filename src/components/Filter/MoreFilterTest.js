import React, { Component } from 'react'

 class MoreFilterTest extends Component {
    render() {
        return (
           
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`${data.field}${data.id}`}
                    field={data.field}
                    value={data.field}
                   onChange = {e => this.handleMoreChange(e)}
                    
                  
                />
                <label
                    className="custom-control-label"
                    htmlFor={`${data.field}${data.id}`}
                >
                    {data.field}{" "}
                </label>
            </div>
     
        )
    }
}
export default MoreFilterTest;
