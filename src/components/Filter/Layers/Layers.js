import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollBar from "react-perfect-scrollbar";

class Layers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            layersActive: false,

            resourceItems: [

                { text: "सामुदायिक भवन", checked: false },
                { text: "विद्यालय भवन", checked: false },
                { text: "सुरक्षित आवास तथा स्थान", checked: false },
                { text: "सडक", checked: false },

            ],
            hazardItems: [

                { text: "जनावर आतङ्क", checked: false },
                { text: "बाढी", checked: false },
                { text: "आगलागी", checked: false },
                { text: "सडक दूर्घटना", checked: false },
                { text: "सर्प टोकाई", checked: false },

            ],
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


        return (
            <div class="layers">
                <div class="layer-wrap">
                    <a class={this.state.layersActive == true ? "collapse-btn-layers active" : "collapse-btn-layers"}
                        onClick={() => this.setState({ layersActive: !this.state.layersActive })}
                    >Layers</a>
                    <div class="collapse" style={{ display: `${this.state.layersActive == true ? "block" : "none"}` }}>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="title">Physical Resource</div>
                                <ScrollBar>
                                    <ul>

                                        {this.state.resourceItems.map((item, i) => {
                                            return (
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id={item.text} name="list-1" value={item.text}
                                                            onChange={(e) => this.changed(e)}
                                                        />
                                                        <label class="custom-control-label" for={item.text}>{item.text} </label>
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
                                    {
                                        this.state.hazardItems.map((h) => {
                                            return (
                                                <li>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id={h.text} name="list-part1" value={h.text}
                                                        onChange= {(e) => this.changed(e)}
                                                        />
                                                        <label class="custom-control-label" for={h.text}>{h.text}
                                                        </label>
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