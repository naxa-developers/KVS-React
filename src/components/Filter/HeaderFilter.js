import React, { Component } from 'react'
import Multiselect from './Multiselect';
import { BoxLoading,JumpCircleLoading,RotateCircleLoading } from 'react-loadingg';




class HeaderFilter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
     
  
    render() {
        return (
            <>
            {<div className="filter">
            <h2><span>Kathmandu</span> municipality</h2>
            <form>
                <div className="row">
               
                {
                // this.props.Categories!=''?
                this.props.filterparam.map((e)=>{
                    return  <div className="col-md-6">
                    <Multiselect dropdown={this.props.Categories[e]}  title={e}/>
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
                    <button role="button" className="common-button-bg">
                        apply
                    </button>
                    <button role="button" className="common-button-border no-border">
                        Clear
                    </button>
                </div>
            </form>
            
        </div>
    }
        </>
        )
    }
}
export default HeaderFilter;
