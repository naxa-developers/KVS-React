import React, { Component } from 'react'
 class FamilyNoFilter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectBar: false,
             familyNo: ''
        }
    }
    
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
                                    <span className="select-item">number of family members</span>
                                    <ul>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                    id="ward" name="ward"/>
                                                <label className="custom-control-label" for="ward">Ward no
                                                    1</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        )
    }
}

export default FamilyNoFilter;
