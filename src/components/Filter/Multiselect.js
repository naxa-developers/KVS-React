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
    handleChange = (v) => {


        let value = v.target.value;
        console.log(this.props.selectedVal,"aaa")

        var selected = this.props.selectedVal.filter(e => {
          

            return e.field == this.props.field
        })
        var others = this.props.selectedVal.filter(e => {
         
            return e.field != this.props.field
        })
      

        let valuetoset = []
        selected[0].value.length!=0&&valuetoset.push(...selected[0].value)
        valuetoset.push(value)


        let newjsonwrapper = []
        others.length!=0&&newjsonwrapper.push(...others)
        

   
        newjsonwrapper.push({field:this.props.field,value:valuetoset})

        

    
        this.props.setVal(newjsonwrapper)
        console.log(this.props.selectedVal,"sleaca")














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
                onBlur={() => this.onBlur()}
            >
                <div className="kvs-select" ref={node => this.node = node}  >
                    <div

                        className={this.state.selectBar ? "select-wrapper select-toggle" : " select-wrapper"}
                    // onfocus={this.selectedIndex=0}

                    >
                        <span className="select-item" onClick={() => this.showSelect()}

                        >{this.props.field}</span>
                        <ul>
                            {this.props.dropdown.map((e) => {
                                return <li>
                                    <div className="custom-control custom-checkbox"  onChange={(i) => this.handleChange(i)}>
                                        <input type="checkbox" className="custom-control-input"
                                            id={e} name={e} value={e}
                                        />
                                        <label  className="custom-control-label"
                                            htmlFor={e}>{e} </label>
                                    </div>
                                </li>
                            })}

                        </ul>
                    </div>
                    <div className="selected-data">
                        {


                            this.state.selectedValue.length != 0 && this.state.selectedValue.map((s, i) => {
                                return <span>{s} <small onClick={(i) => this.removeSelected(i)}  >x</small> </span>
                            })}

                    </div>
                </div>
            </div>
        )
    }
}
export default Multiselect;