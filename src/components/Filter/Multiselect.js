import React, { Component } from 'react'
class Multiselect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectBar: false,
            selectedValue: []
        }
    }
    showSelect = () => {
        this.setState({
            selectBar: !this.state.selectBar
        })
    }
    handleChange = (e) => {
        let value = e.target.value;
     
        
        this.state.selectedValue.push(value)
      
        

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

                        </ul>
                    </div>
                    <div class="selected-data">
                        { console.log(this.state.selectedValue),
                        
                        this.state.selectedValue.length!=0 &&this.state.selectedValue.map((s) => {
                            return   <span>{s} </span>
                        })}
                      
                    </div>
                </div>
            </div>
        )
    }
}
export default Multiselect;