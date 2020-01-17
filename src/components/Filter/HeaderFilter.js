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
        // window.addEventListener("click", (event)=> {

        //     const inputornot=event.target.classNameList.contains("select-item")
        //    const form= document.getElementById(this.state.openeddropdown.toString())

    
        //     const wrapper=event.target.classNameList.contains("form-group")
        //     console.log(this.state.openeddropdown, wrapper, inputornot,form)
        //     form

 
           

            
            
        //     // else if(!inputornot){
        //     //     this.setState({openeddropdown:0})
        //     // }
            

            
        //   });
   
    }
    
     
  
    render() {
        return (
            <>
            {<div className="filter">
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
                                {/* {
                                    // this.props.Categories!=''?
                                    this.props.moreCategories.map((e, i)=>{
                                    
                                        return  <div className="col-md-6" key=
                                        {i}>
                                        <MoreFilter selected={this.state.moreOpendropdown} setSelected={this.setMoreSelected}  setVal={(i)=>this.setState({moreselectedVal:i})} selectedVal={this.state.moreselectedVal} dropdown={e.dropdowns}  
                                        field={e.field} id={e.id}/>
                                    </div>
                                    })
                                    } */}
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="kvs-select">
                                        <div class="select-wrapper">
                                            <span class="select-item">Categories</span>
                                            <ul>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="categories" name="categories_grp" />
                                                        <label class="custom-control-label" for="categories">Categories 1
                                                            </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="categories_2" name="categories_grp2" />
                                                        <label class="custom-control-label" for="categories_2">Categories 2
                                                            </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="categories_3" name="categories_grp3" />
                                                        <label class="custom-control-label" for="categories_3">Categories 2
                                                            </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="kvs-select">
                                        <div class="select-wrapper">
                                            <span class="select-item">Expression</span>
                                            <ul>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="exp_1" name="exp_grp1" value="" />
                                                        <label class="custom-control-label"
                                                            for="exp_1">Expression 1 </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="exp_2" name="exp_grp2" value="" />
                                                        <label class="custom-control-label"
                                                            for="exp_2">Expression 2 </label>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="exp_3" name="exp_grp3" value="" />
                                                        <label class="custom-control-label"
                                                            for="exp_3">Expression 3</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="kvs-select">
                                        <div class="select-wrapper">
                                            <span class="select-item">Value</span>
                                            <ul>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="val_1" name="val_grp1" />
                                                        <label class="custom-control-label" for="val_1">Value1
                                                        </label>
                                                    </div>
                                                </li>
                                                <li class="active">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="val_2" name="val_grp2" />
                                                        <label class="custom-control-label" for="val_2">Value2
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="val_3" name="val_grp3" />
                                                        <label class="custom-control-label" for="val_3">Value3
                                                        </label>
                                                    </div>
                                                </li>
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
    }
        </>
        )
    }
}
export default HeaderFilter;
