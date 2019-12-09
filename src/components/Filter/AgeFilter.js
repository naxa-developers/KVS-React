import React, { Component } from 'react'

 class AgeFilter extends Component {
    render() {
        return (
            <div className="form-group">
            <div className="kvs-select">
                <div className="select-wrapper">
                    <span className="select-item">Age</span>
                    <ul>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="above" name="above"/>
                                <label className="custom-control-label" for="above">Above 60
                                </label>
                            </div>
                        </li>
                        <li className="active">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="tf" name="tf"/>
                                <label className="custom-control-label" for="tf">30 - 40
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="et" name="et"/>
                                <label className="custom-control-label" for="et">19 -
                                    29</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="under" name="under"/>
                                <label className="custom-control-label" for="under">Under 18
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="selected-data">
                    <span>Above 60 <small>x</small></span><span>30 -
                        40<small>x</small></span>
                </div>
            </div>
        </div>
        )
    }
}
export default AgeFilter;
