import React, { Component } from 'react'
class Multiselect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectBar: false,
        }
    }
    showSelect = () => {
        this.setState({
            selectBar: !this.state.selectBar
        })
    }
    handleChange = (e) => {
        let value = e.target.value;
        console.log("edu", value);
    }
    render() {
        return (
            <div className="form-group">
                <div className="kvs-select" >
                    <div className={this.state.selectBar ? "select-wrapper select-toggle" : " select-wrapper"}
                        onClick={() => this.showSelect()}
                    >
                        <span className="select-item">{this.props.title}</span>
                        <ul>
                            {this.props.dropdown.map((e) => {
                                return <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                            id={e} name={e} value={e} onChange={(e) => this.handleChange(e)} />
                                        <label className="custom-control-label"
                                            htmlFor={e}>{e} </label>
                                    </div>
                                </li>
                            })}
                            {/* <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="Illiterate" name="Iliterate" value="Illiterate" onChange={(e) => this.handleChange(e)} />
                                    <label className="custom-control-label"
                                        htmlFor="Illiterate">Illiterate </label>
                                </div>
                            </li>
                            <li >
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="literate" name="literate" />
                                    <label className="custom-control-label"
                                        htmlFor="literate">literate </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="primary" name="primary" />
                                    <label className="custom-control-label"
                                        htmlFor="primary">primary level (1-8) </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="secondary" name="secondary" />
                                    <label className="custom-control-label"
                                        htmlFor="secondary">secondary level (9-12) </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="bachelor" name="bachelor" />
                                    <label className="custom-control-label"
                                        htmlFor="bachelor">Bachelor's degree </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="master" name="master" />
                                    <label className="custom-control-label"
                                        htmlFor="master">master's level (9-12) </label>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Multiselect;