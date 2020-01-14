import React, { Component } from 'react'
import { Thumbnail } from 'react-bootstrap'
class Multiselect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectBar: false,
            selectedValue: [],
            indexset:false
        }
    }
    // showSelect = () => {
    //     this.setState({
    //         selectBar: !this.state.selectBar
    //     })
    // }

    handleChange = (v) => {


        let value = v.target.value;
        // console.log(this.props.selectedVal,"aaa")

        var selected = this.props.selectedVal.filter(e => {
          

            return e.field == this.props.field
        })
        var others = this.props.selectedVal.filter(e => {
         
            return e.field != this.props.field
        })
      

        let valuetoset = []
        selected[0].value.length!=0&&valuetoset.push(...selected[0].value)
        if(!selected[0].value.includes(value)){
            valuetoset.push(value)

        }
        else{
            valuetoset=selected[0].value.filter(e=>e!=value)
        }

        


        let newjsonwrapper = []
        others.length!=0&&newjsonwrapper.push(...others)
        newjsonwrapper.push({field:this.props.field,value:valuetoset})
        console.log(newjsonwrapper,"new")
        this.props.setVal(newjsonwrapper)















    }
componentDidMount(){



}

    // }

    render() {
    
        
        return (
            <div className="form-group" id={this.props.id}
                // onBlur={() => this.onBlur()}
                onClick={() => {
                    var valuetopass=this.props.selected==this.props.id?0:this.props.id
                    this.props.setSelected(valuetopass )
                
            }}
            >
                <div className="kvs-select" ref={node => this.node = node}  >
                    <div

                        className={this.props.selected==this.props.id ? "select-wrapper select-toggle" : "select-wrapper"}
                    // onfocus={this.selectedIndex=0}

                    >
                        <span className="select-item" 

                        >{this.props.field}</span>
                        <ul>
                            {this.props.dropdown.map((e) => {
                                return <li>
                                    <div className="custom-control custom-checkbox"  onChange={(i) => this.handleChange(i)}>
                                        <input type="checkbox" className="custom-control-input"
                                            id={`${e}${this.props.id}`} name={e} value={e}
                                        />
                                        <label  className="custom-control-label"
                                            htmlFor={`${e}${this.props.id}`}>{e} </label>
                                    </div>
                               

                                </li>
                            })}

                        </ul>
                    </div>
                    <div className="selected-data">
                        {


                            this.state.selectedValue.length != 0 && this.state.selectedValue.map((s, i) => {
                                return <span>{s} <small   >x</small> </span>
                            })}

                    </div>
                </div>
            </div>
        )
    }
}
export default Multiselect;