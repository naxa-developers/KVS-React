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

    onBlur = () => {
       
       
        
        this.setState({
            selectBar: false
        })
  

    }
    handleChange = (e) => {
        let value = e.target.value;
     
        
        this.state.selectedValue.push(value)
      
        

    }

    // removeSelected = (i) => {
    //     var newSelected = this.state.selectedValue
    //     newSelected[i]=''
    //     this.setState({

    //         selectedValue: newSelected
    //     })
       
    // }
    render() {
        return (
            <div className="form-group"
            onBlur ={() => this.onBlur()}
            >
                <div className="kvs-select" ref={node =>this.node = node}  >
                    <div 
                  
                    className={this.state.selectBar ? "select-wrapper select-toggle" : " select-wrapper"}
                    // onfocus={this.selectedIndex=0}
                        
                    >
                        <span className="select-item"    onClick={() => this.showSelect()}
                       
                        >{this.props.title}</span>
                        <ul>
                            {this.props.dropdown.map((e) => {
                                return <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                            id={e} name={e} value={e}
                                         
                                             onChange={(e) => this.handleChange(e)} 
                                           
                                            />
                                        <label className="custom-control-label"
                                            htmlFor={e}>{e} </label>
                                    </div>
                                </li>
                            })}

                        </ul>
                    </div>
                    <div class="selected-data">
                        { 
                        
                        this.state.selectedValue.length!=0 &&this.state.selectedValue.map((s,i) => {
                            return   <span>{s} <small onClick={(i) => this.removeSelected(i)}  >x</small> </span>
                        })}
                      
                    </div>
                </div>
            </div>
        )
    }
}
export default Multiselect;