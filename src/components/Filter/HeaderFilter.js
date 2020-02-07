import React, { Component } from 'react';
import Multiselect from './Multiselect';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import Select from 'react-select'
import MoreFilter from './MoreFilter';

import './FilterCss.css'
import Axios from 'axios';

class HeaderFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVal: [],
      openeddropdown: 0,
      toogle: false,
      moreOpendropdown: 0,
      moreselectedVal: [],
     
      selectValues: '',
      categoryVal: '',
      selCat: '',
      selCatValue: '',
      totalCat: '',
   
      toDel: [],
    
      newselected: [],
      newothers: [],
      
      optionsCat: '',
      selectedCategory: '',
      filteredOptions: ''
    };
    
  }
  storeselectedvalue = () => {
    this.props.filterparam.map(e => {
      this.state.selectedVal.push({ field: e, value: [] });
    });
  };
  storemoreselectedvalue = () => {
    this.props.morefilterparam.map(e => {
      this.state.moreselectedVal.push({ field: e, value: [] });
    });
  };
  toggleForm = () => {
    this.setState({
      ...this.state,
      toogle: !this.state.toogle
    });
  };
  reset = () => {
    this.props.dataReset();
    let newselectedVal = [];
    this.props.filterparam.map(e => {
      newselectedVal.push({ field: e, value: [] });
    });
    this.setState({
      selectedVal: newselectedVal,
      selectedSid: [],
      exp: null
    });
  };
  onApply = () => {

    this.state.selectedSid.length!=0 ?  this.props.onApplyMore(this.state.selectedSid, this.state.selCat)

    
    :
    // console.log(this.state.selectedVal, 'hey selected val');
    console.log(this.state.newmore, 'call with above filter');
    this.props.onApply(this.state.selectedVal);
  };
  setSelected = e => {
    this.setState({ openeddropdown: e });
  };
  setMoreSelected = e => {
    this.setState({ moreOpendropdown: e });
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  

  setVal = i => this.setState({ moreselectedVal: i });
  newsetVal = i => this.setState({ newmore: i });
  
  





  categoryClicked = () => {
    console.log("categ");
    
    document.getElementsByClassName('css-1wa3eu0-placeholder').style.color= 'black';
  }
  fetchCategoriesDrop = () => {
    Axios.get('http://139.59.67.104:8019/api/v1/more_dropdown').then (
      res => {
        var array = [];
        // console.log("d", res.data.data);
        
        Object.keys(res.data.data[0]).forEach((m,i) => {
          let obj = {
            value: i+1,
            label: m,
            dropValues: res.data.data[0][m],
            
          }
          array.push(obj)
          
        })
        console.log("array", array);
        this.setState({
          optionsCat: array
        })
       
      }
    )
    
   

  }
  categoryChanged = (e) => {
    // console.log("ee", e);
    
    this.setState({ selectedCategory: e
    
    } 

    )
   let filteredValues =  this.state.optionsCat.filter((o) => {
    return  o.label===e.label 
     
     
    });

    console.log("filtered", filteredValues);
    this.setState({
      filteredOptions: filteredValues.dropValues
    })
    
    // this.state.selectedCategory&& 
   
    
  }
  componentDidMount() {
    this.fetchCategoriesDrop();
  
  }
  
  render() {
    console.log("cat",this.state.selectedCategory);
    
    // console.log("param", this.props.filterparam);
    // console.log("c", this.props.moreCategories);
    

    const optionsExp = [
      { label: '=', value: 1},
      { label: '>', value: 2},
      { label: '<', value: 2},

    ]
    const optionsValues = [
      { label: 'Flood', value: 1},
      { label: 'Landslide', value: 2},
      { label: 'Earthquake', value: 3},

    ]
   
    const options = [
      { label: 'Hazard_Type', value: 1},
      { label: 'Religion', value: 2},
      { label: 'Owner Sex', value: 2},
      { label: 'Animal Data', value: 2},
    ];
    // const customStyles = {
    //   menu: (provided, state) => ({
    //     ...provided,
    //     width: state.selectProps.width,
    
    //     color: 'black',
    //     padding: 20,
    //   }),

    // }
    console.log("fop", this.state.filteredOptions);
    
    return (
      <>
        <div className='filter'>
          <h2>
            <span>Saptakoshi</span> municipality
            <span>
              {localStorage.getItem('name') === 'saptakoshiward3'
                ? '  Ward 3'
                : ''}
            </span>
          </h2>
          <div className='row'>
            {// this.props.Categories!=''?
              this.props.Categories.map((e, i) => {
                return (
                  <div className='col-md-6' key={i}>
                    <Multiselect
                      selected={this.state.openeddropdown}
                      setSelected={this.setSelected}
                      setVal={i => this.setState({ selectedVal: i })}
                      selectedVal={this.state.selectedVal}
                      dropdown={e.dropdown}
                      field={e.field}
                      id={e.id}
                    />
                  </div>
                );
              })}
          </div>
          <div className="more">
            <div
              className="toggle_form"
              id="clickable_form"
              style={{ display: `${this.state.toogle ? "block" : "none"}` }}
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                  <Select
                    value = {this.state.selectedCategory}
                    options={this.state.optionsCat}
                    // styles={customStyles}
                    rightAligned = {false}
                    placeholder = 'Categories'
                    // onClick = {() => this.categoryClicked()}
                    onChange = {(e) => {this.categoryChanged(e)}}
                    />

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                  {this.state.selectedCategory &&
                  <ReactMultiSelectCheckboxes 
                    options={optionsExp}
                  
                    rightAligned = {false}
                    placeholderButtonLabel = 'Expressions'
                    />
  }
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="kvs-select">
                    {this.state.selectedCategory &&  
                    
                    
                    <ReactMultiSelectCheckboxes 
                    options={this.state.filteredOptions}
                
                    rightAligned = {true}
                    placeholderButtonLabel = 'Values'
                    />
                  }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              role="button"
              className="common-button-border icon-button filter_button "
              onClick={() => this.toggleForm()}
            >
              <i className="material-icons">filter_list</i>
              {`${!this.state.toogle ? "More Filters" : "Show Less"}`}
            </button>
          </div>
          <div className='buttons'>
            <button
              role='button'
              className='common-button-bg'
              onClick={() => {
                this.onApply();
              }}
            >
              apply
            </button>
            <button
              role='button'
              className='common-button-border no-border'
              onClick={() => this.reset()}
            >
              Clear
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default HeaderFilter;