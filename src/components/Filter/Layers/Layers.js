import React, { Component } from 'react'

class Layers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             layersActive: false,
             checked: null
        }
    }
    
    render() {
        console.log("checked", this.state.checked);
        
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
                            <ul>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-1" name="list-1" />
                                        <label class="custom-control-label" for="list-1">Communications
                                        </label>
                                    </div>
                                </li>
                                <li class="active">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-2" name="list-2"/>
                                        <label class="custom-control-label" for="list-2">Toilets
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-3" name="list-3"/>
                                        <label class="custom-control-label" for="list-3">Roads
                                            </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-4" name="list-4"/>
                                        <label class="custom-control-label" for="list-4">Trees
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-5" name="list-5"/>
                                        <label class="custom-control-label" for="list-5">Hospitals
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="list-6" name="list-6"/>
                                        <label class="custom-control-label" for="list-6">Tents
                                        </label>
                                    </div>
                                </li>
                            </ul>
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

export default Layers;