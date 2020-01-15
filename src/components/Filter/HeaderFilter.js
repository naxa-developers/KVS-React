import React, { Component } from 'react'
import Multiselect from './Multiselect';
import { BoxLoading,JumpCircleLoading,RotateCircleLoading } from 'react-loadingg';




class HeaderFilter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedVal:[],
            openeddropdown:0
            
        }
    }
    storeselectedvalue=()=>{
        // console.log("sle")
        this.props.filterparam.map((e)=>{
 
            this.state.selectedVal.push({field:e,value:[]})
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

    componentWillMount(){
        // window.addEventListener("click", (event)=> {

        //     const inputornot=event.target.classList.contains("select-item")
        //    const form= document.getElementById(this.state.openeddropdown.toString())

    
        //     const wrapper=event.target.classList.contains("form-group")
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
            <h2><span>Kathmandu</span> municipality</h2>
 
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
                    <button role="button" className="common-button-border icon-button">
                        <i className="material-icons">filter_list</i>More
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
