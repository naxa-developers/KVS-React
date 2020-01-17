import React, { Component } from 'react'
import { Thumbnail } from 'react-bootstrap'
class MoreFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectBar: false,
            selectedValue: [],
            indexset: false,
            thiscompvalue: []
        }
    }

    removeselected=(val)=>{
        var selected = this.props.selectedVal.filter(e => {
            return e.field == this.props.field
        })
        var others = this.props.selectedVal.filter(e => {
            return e.field != this.props.field
        })
        let neww= selected[0].value.filter((e)=>e!=val)
        let jsonwrapper = []
        // jsonwrapper.push({ field: this.props.field, value: neww })
        // console.log(jsonwrapper, "new")
        this.props.setVal(jsonwrapper)
    }

    handleChange = (v) => {
        let value = v.target.value;
        console.log(value)
        var selected = this.props.selectedVal.filter(e => {
            return e.field == this.props.field
        })
        console.log(selected[0],"hi selected")
        var others = this.props.selectedVal.filter(e => {
            return e.field != this.props.field
        })
        console.log(others,'hi others')
        // console.log(this.props.selectedVal,"Hey brother i am selected val")
        let valuetoset = []
        selected[0].value.length != 0 && valuetoset == selected[0].value
        console.log(selected[0])
        if (!selected[0].value.includes(value)) {
            valuetoset.push(value)
        }
        else {
            valuetoset = selected[0].value.filter(e => e != value)
        }

        let jsonwrapper = []
        // others.length != 0 && jsonwrapper.push(...others)
        jsonwrapper.push({ field: this.props.field, value: valuetoset })
        // console.log(newjsonwrapper, "new")
        this.props.setVal(jsonwrapper)
        console.log(jsonwrapper,"hi selected")

    }
    componentDidMount() {

    }

    render() {
        let sel = this.props.selectedVal.filter((e) => e.field == this.props.field)
        // console.log(sel, "this is sel")
        return (
            <div className="form-group" id={this.props.id}
              
            >
                <div className="kvs-select" ref={node => this.node = node}  >
                    <div
                        className={this.props.selected == this.props.id ? "select-wrapper select-toggle" : "select-wrapper"}
                        onClick={() => {
                            var valuetopass = this.props.selected == this.props.id ? 0 : this.props.id
                            this.props.setSelected(valuetopass)
                        }} 
                    >
                        <span className="select-item">{this.props.field}</span>
                        <ul>
                            {this.props.dropdown.map((e, i) => {
                                return <li key={i} >
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
                                        // console.log("ciicked")
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
export default MoreFilter;