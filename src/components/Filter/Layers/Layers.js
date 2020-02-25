import React, { Component } from 'react'
import {connect} from 'react-redux'
import ScrollBar from "react-perfect-scrollbar";

class Layers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             layersActive: false,
            
             items : [
             
               {  text: "सामुदायिक भवन", checked: false  },
               {  text: "विद्यालय भवन", checked: false  },
               {  text: "सुरक्षित आवास तथा स्थान", checked: false  },
               {  text: "सडक", checked: false  },
              
             ],
             selectedValues :[]
        }
    }

    changed = (event) => {
        const checkedArr = [];
    
        const{checked, value} = event.target;
        this.setState((state) => {
            if(checked){
                return{
                    selectedValues: [...state.selectedValues, value]

                }
            }
          if(!checked){
            const filterValue = this.state.selectedValues.filter(f => f!==value)
            return{
                selectedValues: filterValue

            }
          }
            return null

        }, () =>{
            console.log("ss", this.state.selectedValues);
            
            if(checked){
                
               this.props.addLayers(value)
            } else {
               this.props.removeLayers(value)
            }
        })
      

    
  
    }
    render() {
      
        
        return (
         <div class="layers">
            <div class="layer-wrap">
                <a class= {this.state.layersActive== true ? "collapse-btn-layers active" : "collapse-btn-layers"} 
                onClick ={() => this.setState({layersActive: !this.state.layersActive})}
                >Layers</a>
                <div class="collapse" style= {{display:`${this.state.layersActive == true ? "block" : "none" }`}}>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="title">Physical Resource</div>
                           <ScrollBar>
                            <ul>
                               
                                    { this.state.items.map((item,i) => {
                                        return(
                                            <li>
                                            <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id={item.text} name="list-1" value={item.text}
                                             onChange={(e) => this.changed(e) }
                                             />
                                            <label class="custom-control-label" for={item.text}>{item.text}
                                         
                                            </label>
                                        </div>
                                    </li>

                                        )
                                    })}
                                   
                            
                            </ul>
                            </ScrollBar>
                        </div>
                        <div class="col-md-6">
                            <div class="title">Resource, Risk and Hazard</div>
                            <ul>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-part1" name="list-part1"/>
                                        <label class="custom-control-label" for="list-part1">Communications
                                        </label>
                                    </div>
                                </li>
                                <li class="active">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-part2" name="list-part2"/>
                                        <label class="custom-control-label" for="list-part2">Toilets
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-part3" name="list-part3"/>
                                        <label class="custom-control-label" for="list-part3">Roads
                                            </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-part4" name="list-part4"/>
                                        <label class="custom-control-label" for="list-part4">Trees
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-part5" name="list-part5"/>
                                        <label class="custom-control-label" for="list-part5">Hospitals
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-part6" name="list-part6" />
                                        <label class="custom-control-label" for="list-part6">Tents
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default connect()(Layers);