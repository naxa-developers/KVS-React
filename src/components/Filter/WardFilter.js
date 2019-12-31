import React, { Component } from 'react'

 class WardFilter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectBar: false,
             arrayWards: ['Ward No 1', 'Ward No 2', 'Ward No 3']
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
                onClick={()=> this.showSelect()}
                >
                                    <span className="select-item">Ward no</span>
                                    <ul>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                    id="ward" name="ward"/>
                                                    {
                                                        this.state.arrayWards.map((w,i) => {
                                                            console.log("w", w);
                                                            
                                                           
                                                          return  <label className="custom-control-label" htmlFor="ward">{w}</label>
                                                        })
                                                        
                                                    }
                                               
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        )
    }
}
export default WardFilter;
