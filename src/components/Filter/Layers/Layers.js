import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollBar from "react-perfect-scrollbar";

class Layers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            layersActive: false,
            dropdown: '',

            selectedValues: [],
            selectedNames: []
        }
    }

    changed = (event) => {
      
        const { checked, value, id } = event.target;
      
        
        this.setState((state) => {
            if (checked) {
                return {
                    selectedValues: [...state.selectedValues, value],
                    selectedNames: [...state.selectedNames, id]

                }
            }
            if (!checked) {
                const filterValue = this.state.selectedValues.filter(f => f !== value)
                const filterName = this.state.selectedNames.filter(f => f !== id)
                return {
                    selectedValues: filterValue,
                    selectedNames: filterName

                }
            }
            return null

        }, () => {
            // console.log("selec", this.state.selectedNames);
            
            if (checked) {

                this.props.addLayers(value)
                // this.props.addLegend(this.state.selectedNames)
            } else {
               
                
                this.props.removeLayers(value)
            }
        })

    }
    componentDidMount() {
       this.props.fetchVCALayers();
        
    }
    render() {

// console.log("d", this.props.dropArrHazard);
const dropArr = this.props.dropArr;

const dropArrHazard = this.props.dropArrHazard;

        return (
            <div class="layers">
                <div class="layer-wrap">
                    <a class={this.state.layersActive == true ? "collapse-btn-layers active" : "collapse-btn-layers"}
                        onClick={() => this.setState({
                             layersActive: !this.state.layersActive },
                          
                             )}
                    >Layers
                        <span class="info-tooltip"><i class="icon-info-sign"></i><span class="tooltip-text">VCA layers</span></span>
                    </a>
                    <div class="collapse" style={{ display: `${this.state.layersActive == true ? "block" : "none"}` }}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="col-wrap">  
                                    <div class="title">Physical Resource</div>
                                    <ScrollBar>
                                    <ul>
                                        {
                                           Object.keys(dropArr).map((item, i) => {
                                            //   console.log(dropArr[item].text);
                                               
                                               
                                            return (
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id={dropArr[item].text} name="list-1" value={dropArr[item].id}
                                                            onChange={(e) => this.changed(e)}
                                                        />
                                                        <label class="custom-control-label" for={dropArr[item].text}>{dropArr[item].text} </label>
                                                    </div>
                                                </li>

                                            )
                                        })
                                        }

                                      


                                    </ul>
                                </ScrollBar>
                                </div>
                            </div>
                            <div class="col-md-6">
                            <div class="col-wrap"> 
                                <div class="title">Risk and Hazard</div>
                                <ul>
                                {
                                           Object.keys(dropArrHazard).map((item, i) => {
                                             
                                            
                                             
                                                   
                                            return (
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id={dropArrHazard[item].text} name="list-1" value={dropArrHazard[item].id}
                                                            onChange={(e) => this.changed(e)}
                                                        />
                                                        <label class="custom-control-label" for={dropArrHazard[item].text}>{dropArrHazard[item].text} </label>
                                                    </div>
                                                </li>

                                            )
                                        })
                                        }
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(Layers);