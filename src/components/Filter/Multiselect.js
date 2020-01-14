import React, { Component } from 'react'
import { Thumbnail } from 'react-bootstrap'
class Multiselect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectBar: false,
            selectedValue: [],
            indexset: false,
            thiscompvalue: []
        }
    }
    // showSelect = () => {
    //     this.setState({
    //         selectBar: !this.state.selectBar
    //     })
    // }

    removeselected=(val)=>{
        
        var selected = this.props.selectedVal.filter(e => {


            return e.field == this.props.field
        })
     
        var others = this.props.selectedVal.filter(e => {

            return e.field != this.props.field
        })


        // let valuetoset = []
       
       let neww= selected[0].value.filter((e)=>e!=val);






        let newjsonwrapper = []
        others.length != 0 && newjsonwrapper.push(...others)
        newjsonwrapper.push({ field: this.props.field, value: neww })
        console.log(newjsonwrapper, "new")
        this.props.setVal(newjsonwrapper)


    }

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
        selected[0].value.length != 0 && valuetoset.push(...selected[0].value)
        if (!selected[0].value.includes(value)) {
            valuetoset.push(value)

        }
        else {
            valuetoset = selected[0].value.filter(e => e != value)
        }




        let newjsonwrapper = []
        others.length != 0 && newjsonwrapper.push(...others)
        newjsonwrapper.push({ field: this.props.field, value: valuetoset })
        console.log(newjsonwrapper, "new")
        this.props.setVal(newjsonwrapper)















    }
    componentDidMount() {



    }

    // }

    render() {
        let sel = this.props.selectedVal.filter((e) => e.field == this.props.field)


        return (
            <div className="form-group" id={this.props.id}
                // onBlur={() => this.onBlur()}
              
            >
                <div className="kvs-select" ref={node => this.node = node}  >
                    <div

                        className={this.props.selected == this.props.id ? "select-wrapper select-toggle" : "select-wrapper"}
                    // onfocus={this.selectedIndex=0}
                    onClick={() => {
                        var valuetopass = this.props.selected == this.props.id ? 0 : this.props.id
                        this.props.setSelected(valuetopass)
    
                    }} 

                    >
                        <span className="select-item"

                        >{this.props.field}</span>
                        <ul>
                            {this.props.dropdown.map((e, i) => {
                                return <li key=
                    {i} >
                                    <div className="custom-control custom-checkbox" >
                                        <input type="checkbox" className="custom-control-input"
                                            id={`${e}${this.props.id}`} name={e} value={e}
                                            checked={ sel.length != 0 && sel[0].value.length != 0 && sel[0].value.includes(e)}
                                            onChange={(i) => this.handleChange(i)}
                                        />
                                        <label className="custom-control-label"
                                            htmlFor={`${e}${this.props.id}`}>{e} </label>
                                    </div>


                                </li>
                            })}

                        </ul>
                    </div>
                    <div className="selected-data">
                        {
                            sel.length != 0 && sel[0].value.length != 0 && sel[0].value.map((s, i) => {
                                return <span key={i}>{s} <small onClick={
                                    ()=>{
                                        console.log("ciicked")

                                        this.removeselected(s)
                                    }
                                }   >x</small> </span>
                            })}

                    </div>
                </div>
            </div>
        )
    }
}
export default Multiselect;