import React, { Component } from 'react'

 class SocialSecurityFilter extends Component {
    render() {
        return (
            <div className="inline-form">
            <label className="inline-label">Social security Received</label>
            <div className="form-group">
                <div className="custom-control custom-radio inline-flex">
                    <input type="radio" className="custom-control-input" id="yes"
                        name="yes"/>
                    <label className="custom-control-label" htmlFor="yes">Yes</label>
                </div>
                <div className="custom-control custom-radio inline-flex">
                    <input type="radio" className="custom-control-input" id="no" name="yes" />
                    <label className="custom-control-label" htmlFor="no">No</label>
                </div>
            </div>
        </div>
        )
    }
}
export default SocialSecurityFilter;
