import React, { Component } from 'react'

class EducationFilter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectBar: false,
             Illiterate: ''
        }
    }
    
    showSelect = () => {
            
         this.setState({
             selectBar: !this.state.selectBar
         })
     }

     handleChange = (e) => {
         let value = e.target.value;
         console.log("edu",value);
         

     }
   
    render() {

      
        return (
            <div className="form-group">
            <div className="kvs-select" >
                <div className={this.state.selectBar? "select-wrapper select-toggle" :" select-wrapper"}
                onClick={()=> this.showSelect()}
                >
                    <span className="select-item">Education</span>
                    <ul>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="Illiterate" name="Iliterate" value="Illiterate"  onChange ={(e) => this.handleChange(e)}/>
                                <label className="custom-control-label"
                                    htmlFor="Illiterate">Illiterate </label>
                            </div>
                        </li>
                        <li className="active">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="literate" name="literate"/>
                                <label className="custom-control-label"
                                    htmlFor="literate">literate </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="primary" name="primary"/>
                                <label className="custom-control-label"
                                    htmlFor="primary">primary level (1-8) </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="secondary" name="secondary"/>
                                <label className="custom-control-label"
                                    htmlFor="secondary">secondary level (9-12) </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="bachelor" name="bachelor"/>
                                <label className="custom-control-label"
                                    htmlFor="bachelor">Bachelor’s degree </label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    id="master" name="master"/>
                                <label className="custom-control-label"
                                    htmlFor="master">master's level (9-12) </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default EducationFilter;
