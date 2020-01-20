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
            moreselectedVal: []
        }
    }
    storeselectedvalue=()=>{
        // console.log("sle")
        this.props.filterparam.map((e)=>{

            this.state.selectedVal.push({field:e,value:[]})
        })
        // console.log(this.state.selectedVal,"hey i am moreselected val")


    }

    storemoreselectedvalue=()=>{
        // console.log("sle")
        this.props.morefilterparam.map((e)=>{

            this.state.moreselectedVal.push({field:e,value:[]})
        })
        // console.log(this.state.moreselectedVal,"hey i am moreselected val")

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
        // console.log(this.state.openeddropdown,"hi")

    }

    setMoreSelected = (e) => {
        this.setState({moreOpendropdown:e})
        // console.log(this.state.moreOpendropdown,"hello")
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
                            <div className="col-md-4">
                                <MoreFilter moreCategories={this.props.moreCategories} selected={this.state.moreOpendropdown} setSelected={this.setMoreSelected}  setVal={(i)=>this.setState({moreselectedVal:i})} selectedVal={this.state.moreselectedVal}/>
                             </div>
                            {/* <div className="col-md-4">
                                <div className="form-group">
                                    <div className="kvs-select">
                                        <div className="select-wrapper">
                                                <span className="select-item">Categories</span>
                                                <ul>
                                            {
                                            this.props.moreCategories.forEach((i) => {
                                                    <li>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                               />
                                                            <label className="custom-control-label">{i.field}
                                                                </label>
                                                        </div>
                                                    </li>
                                                })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   */}
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
