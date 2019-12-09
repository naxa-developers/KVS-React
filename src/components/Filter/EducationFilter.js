import React, { Component } from 'react'

class EducationFilter extends Component {
    render() {
        return (
            <div className="form-group">
            <div className="kvs-select">
                <div className="select-wrapper">
                    <span className="select-item">Education</span>
                    <ul>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="Illiterate" name="Illiterate"/>
                                <label className="custom-control-label"
                                    for="Illiterate">Illiterate </label>
                            </div>
                        </li>
                        <li className="active">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="literate" name="literate"/>
                                <label className="custom-control-label"
                                    for="literate">literate </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="primary" name="primary"/>
                                <label className="custom-control-label"
                                    for="primary">primary level (1-8) </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="secondary" name="secondary"/>
                                <label className="custom-control-label"
                                    for="secondary">secondary level (9-12) </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="bachelor" name="bachelor"/>
                                <label className="custom-control-label"
                                    for="bachelor">Bachelor’s degree </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="master" name="master"/>
                                <label className="custom-control-label"
                                    for="master">master's level (9-12) </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default EducationFilter;
