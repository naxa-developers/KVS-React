import React, { Component } from 'react'

 class WardFilter extends Component {
    render() {
        return (
            <div className="form-group">
                            <div className="kvs-select">
                                <div className="select-wrapper">
                                    <span className="select-item">Ward no</span>
                                    <ul>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                    id="ward" name="ward"/>
                                                <label className="custom-control-label" htmlFor="ward">Ward no
                                                    1</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        )
    }
}
export default WardFilter;
