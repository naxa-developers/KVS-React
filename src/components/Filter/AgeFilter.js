import React, { Component } from 'react'

 class AgeFilter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectBar: false,
            age: ''
        }
    }
    // opens the dropdown
    showSelect = () => {
            
         this.setState({
             selectBar: !this.state.selectBar
         })
     }
    render() {
        return (
            <div className="form-group">
            <div className="kvs-select">
                <div className={this.state.selectBar? "select-wrapper select-toggle" :" select-wrapper"}
                onClick={()=> this.showSelect()}>
                    <span className="select-item">Age</span>
                    <ul>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="above" name="above" value="above 60" 
                                    onChange={(e) => console.log("age", e.target.value)
                                    }
                                    />
                                <label className="custom-control-label" htmlFor="above">Above 60
                                </label>
                            </div>
                        </li>
                        <li className="active">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="tf" name="tf" value="30-40"/>
                                <label className="custom-control-label" htmlFor="tf">30 - 40
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="et" name="et" value="19-29"/>
                                <label className="custom-control-label" htmlFor="et">19 -
                                    29</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="under" name="under" value="under 18"/>
                                <label className="custom-control-label" htmlFor="under">Under 18
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="selected-data">
                    <span>Above 60 <small>x</small></span><span>30 -
                        40<small>x</small></span>
                </div>
            </div>
        </div>
        )
    }
}
export default AgeFilter;
