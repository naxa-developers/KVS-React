import React, { Component } from 'react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const options = [
    { label: 'Illiterate', value: 1},
    { label: 'Literate', value: 2},
    { label: 'Primary Level(1-8)', value: 3},
    { label: 'Secondary Level(9-12)', value: 4},
    { label: 'Bachelors Level', value: 5},
  ];


 class EducationOne extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
     
    handleChange = (e) =>  {
        var options = e.target.options;
        console.log("opt", options);
        
        var value = [];
        for (var i =0; i<options.length; i++) {
            if(options[i].selected) {
                value.push(options[i].value);
            }
        }
        console.log("v", value);
        
    }
    render() {
        return (
            <div>
                <ReactMultiSelectCheckboxes 
                options={options} 
                placeholderButtonLabel	="Education"
                onChange = {(e)=>this.handleChange(e)}
                
                />
            </div>
        )
    }
}
export default EducationOne;
