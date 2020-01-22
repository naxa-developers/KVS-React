import React, { Component } from 'react'
import Multiselect from './Multiselect';
import { BoxLoading,JumpCircleLoading,RotateCircleLoading } from 'react-loadingg';
import MoreFilter from './MoreFilter';

class HeaderFilter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedVal:[],
            openeddropdown:0,
            toogle:false,
            moreOpendropdown:0,
            moreselectedVal: [],
            togglediv: false,
            togglediv1: false,
            togglediv2: false,
            selectValues:'',
            categoryVal: '',
            selCat:'',
            totalCat: ''
        }
    }
    storeselectedvalue=()=>{
        this.props.filterparam.map((e)=>{

            this.state.selectedVal.push({field:e,value:[]})
        })


    }

    storemoreselectedvalue=()=>{
        this.props.morefilterparam.map((e)=>{

            this.state.moreselectedVal.push({field:e,value:[]})
        })

    }
    
    toggleForm = () => {
        this.setState({
            ...this.state,
            toogle:!this.state.toogle,
        })
    }

    reset = () => {
        this.props.fetchedData()
        let newselectedVal = []
        this.props.filterparam.map((e)=>{
 
            newselectedVal.push({field:e,value:[]})
        })
        this.setState({
            selectedVal : newselectedVal
        })

    }

    onApply=()=>{
        console.log(this.state.selectedVal)
        this.props.onApply(this.state.selectedVal)

        
    }
    setSelected=(e)=>{
        
        this.setState({openeddropdown:e})

    }

    setMoreSelected = (e) => {
        this.setState({moreOpendropdown:e})
    }

    togglediv = () => {
        this.setState({
            togglediv:!this.state.togglediv
        })
    }

    togglediv1 = () => {
        this.setState({
            togglediv1:!this.state.togglediv1
        })
    }

    togglediv2 = () => {
        this.setState({
            togglediv2:!this.state.togglediv2
        })
    }

    setVal = (i) => this.setState({moreselectedVal:i})

    handleChange = (v) => {
        let value = v.target.value;
        var selected = this.state.moreselectedVal.filter(e => {
            return e.field == v.target.value
        })
        console.log(selected,'selected')
        var others = this.state.moreselectedVal.filter(e => {
            return e.field != v.target.value
        })
        let valuetoset = []
        selected[0].length != 0 && valuetoset == selected[0].value
        if (!selected[0].value.includes(value)) {
            valuetoset.push(value)
        }
        else {
            valuetoset = selected[0].value.filter(e => e != value)
        }
        let jsonwrapper = []
        others.length != 0 && jsonwrapper.push(...others)
        jsonwrapper.push({ field: v.target.value, value: valuetoset })
        this.setVal(jsonwrapper)
        this.setState({categoryVal: valuetoset[0], selCat:valuetoset})
    }

    removeselected=(val)=>{
        var selected = this.state.moreselectedVal.filter(e => {
            return e.field == val
        })
        var others = this.state.moreselectedVal.filter(e => {
            return e.field != val
        })

       let neww= selected.filter((e)=>e!=val);
        this.setState({
            selCat: ''
        })
        let newjsonwrapper = []
        others.length != 0 && newjsonwrapper.push(...others)
        newjsonwrapper.push({ field: this.props.field, value: neww })
        this.setVal(newjsonwrapper)
    }


    componentWillMount(){

    }
  
    render() {
        return (
            <>
            <div className="filter">
            <h2><span>Saptakoshi</span> municipality</h2>
 
                <div className="row">
               
                {
                // this.props.Categories!=''?
                this.props.Categories.map((e, i)=>{
                   
                    return  <div className="col-md-6" key=
                    {i}>
                    <Multiselect selected={this.state.openeddropdown} setSelected={this.setSelected}  setVal={(i)=>this.setState({selectedVal:i})} selectedVal={this.state.selectedVal} dropdown={e.dropdown}  field={e.field} id={e.id}/>
                </div>
                })
                }
        
                </div>
                <div className="more">
                    <div className="toggle_form" id="clickable_form" style={{display:`${this.state.toogle ? 'block':'none'}`}}>
                        <div className="row">
                            {/* <div className="col-md-4">
                                <MoreFilter moreCategories={this.props.moreCategories} selected={this.state.moreOpendropdown} setSelected={this.setMoreSelected}  setVal={(i)=>this.setState({moreselectedVal:i})} selectedVal={this.state.moreselectedVal}/>
                             </div> */}
                            <div className="col-md-4">
                                <div className="form-group">
                                    <div className="kvs-select">
                                        <div className={`${this.state.togglediv ? "select-wrapper select-toggle" : "select-wrapper"}`} >
                                            <span className="select-item" onClick={() => this.togglediv()}>Categories</span>
                                            <ul>
                                            {this.props.moreCategories.map((data,i) => {
                                                let sel = this.state.moreselectedVal.filter(e => e.field === data.field)
                                                {/* console.log(sel[0],'sel man') */}
                                            return( 
                                                <li key={i}>
                                                    <div className="custom-control custom-checkbox" >
                                                        <input type="checkbox" className="custom-control-input"
                                                            id={`${data.field}${data.id}`} field={data.field} value={data.field}
                                                            checked={sel.length != 0 && sel[0].value.length !=0 && sel[0].value.includes(data.field)}
                                                            onChange={(i) => this.handleChange(i)} 
                                                        />
                                                        <label className="custom-control-label"
                                                            htmlFor={`${data.field}${data.id}`}>{data.field} </label>
                                                    </div>
                                                </li>)
                                                })}
                                            </ul>
                                        </div>
                                        <div className="selected-data">
                                            {this.state.selCat.length != 0 && this.state.selCat.map((data, i) => {
                                                return <span key={i}>{data} <small onClick={
                                                    ()=>{
                                                        console.log("ciicked")

                                                        this.removeselected(data)
                                                    }
                                                }   >x</small> </span>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <div className="kvs-select">
                                        <div
                                            className={`${this.state.togglediv1 ? "select-wrapper select-toggle" : "select-wrapper"}`}
                                        >
                                            <span className="select-item" onClick={() => this.togglediv1()}>Expression</span>
                                            <ul>
                                            {this.props.moreCategories.map((data,i) => {
                                            return( 
                                                <li key={i}>
                                                    <div className="custom-control custom-checkbox" >
                                                        <input type="checkbox" className="custom-control-input"
                                                            key={data.id} name={data.id} value={data.id} />
                                                        <label className="custom-control-label"
                                                            htmlFor={data.id}>{data.id} </label>
                                                    </div>
                                                </li>)
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <div className="kvs-select">
                                        <div
                                            className={`${this.state.togglediv2 ? "select-wrapper select-toggle" : "select-wrapper"}`}
                                        >
                                            <span className="select-item" onClick={() => this.togglediv2()}>Values</span>
                                            <ul>
                                            {this.props.moreCategories.map((data,i) => {
                                                return(
                                                    <div key={i}>
                                                    {data.field === this.state.categoryVal && data.dropdowns.map((data,i) => {
                                                        return(
                                                    <li key={i}>
                                                        <div key={i} className="custom-control custom-checkbox" >
                                                            <input type="checkbox" className="custom-control-input"
                                                                key={i} name={data} value={i} />
                                                            <label className="custom-control-label"
                                                                htmlFor={i}>{data}</label>
                                                        </div>
                                                    </li>)})}
                                                    {data.field === null && data.dropdowns.map((data,i) => {return (<div key={i}></div>)})}
                                                </div>)})}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button role="button" className="common-button-border icon-button filter_button " onClick={() => this.toggleForm()}>
                        <i className="material-icons">filter_list</i>{`${!this.state.toogle ? 'More':'Less'}`}
                    </button>
                </div>
                <div className="buttons">
                    <button role="button" className="common-button-bg" onClick={()=>{
                       this.onApply()
                    }}>
                        apply
                    </button>
                    <button role="button" className="common-button-border no-border" onClick={() => this.reset()}>
                        Clear
                    </button>
                </div>
            </div>
            </>
        )
    }
}
export default HeaderFilter;
