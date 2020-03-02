import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollBar from "react-perfect-scrollbar";

class Layers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            layersActive: false,
            dropdown: '',

            selectedValues: []
        }
    }

    changed = (event) => {
        const checkedArr = [];

        const { checked, value } = event.target;
        this.setState((state) => {
            if (checked) {
                return {
                    selectedValues: [...state.selectedValues, value]

                }
            }
            if (!checked) {
                const filterValue = this.state.selectedValues.filter(f => f !== value)
                return {
                    selectedValues: filterValue

                }
            }
            return null

        }, () => {


            if (checked) {

                this.props.addLayers(value)
            } else {
                
                this.props.removeLayers(value)
            }
        })

    }
    componentDidMount() {
       this.props.fetchVCALayers();
        
    }
    render() {

// console.log("d", this.state.selectedValues);
const dropArr = this.props.dropArr;

const dropArrHazard = this.props.dropArrHazard;

        return (
            <div class="layers">
                <div class="layer-wrap">
                    <a class={this.state.layersActive == true ? "collapse-btn-layers active" : "collapse-btn-layers"}
                        onClick={() => this.setState({
                             layersActive: !this.state.layersActive },
                          
                             )}
                    >Layers</a>
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
                                <div class="title">Risk and Hazard</div>
                                <ul>
                                {
                                           Object.keys(dropArrHazard).map((item, i) => {
                                             
                                            //    console.log("haz", dropArrHazard[item]);
                                                   
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
        )
    }
}


export default connect()(Layers);