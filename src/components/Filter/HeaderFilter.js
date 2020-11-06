import React, { Component } from 'react';
import Multiselect from './Multiselect';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import Select from 'react-select'


import './FilterCss.css'
import Axios from 'axios';

class HeaderFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVal: [],
      openeddropdown: 0,
      toogle: false,

      selectValues: '',
      categoryVal: '',
      selCat: '',
      selCatValue: '',
      totalCat: '',


      optionsCat: '',
      selectedCategory: '',
      filteredOptions: '',
      filteredForDrop: '',
      dropdownDisabled: true,
      selectedValuesArray: [],
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
    };

  }
  storeselectedvalue = () => {
    this.props.filterparam.map(e => {
      this.state.selectedVal.push({ field: e, value: [] });
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
      exp: null,
      selectedValuesArray: [],
      selectedCategory: '',
      filteredForDrop: '',
    });
  };

  onApply = () => {
    let count = 0
    this.state.selectedVal.map((data) => {
      count = count + data.value.length
    })
    if (this.state.selectedValuesArray.length !== 0 || count !== 0) {

      this.state.toogle == true ?
        //  console.log("call more api with", this.state.selectedCategory.label,  this.state.selectedValuesArray )
        this.props.onApplyMore(this.state.selectedValuesArray, this.state.selectedCategory.label)
        :
        this.props.onApply(this.state.selectedVal);
    }
  };

  setSelected = e => {
    this.setState({ openeddropdown: e });
  };




  categoryClicked = () => {
   

    document.getElementsByClassName('css-1wa3eu0-placeholder').style.color = 'black';
  }
  fetchCategoriesDrop = () => {
    Axios.get(`${process.env.BASE_URL}api/v1/more_dropdown`,
      {
        headers: {
          // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
          Authorization: `Token ${this.state.token}`
        }
      }).then(
        res => {
          var array = [];
          Object.keys(res.data.data[0]).forEach((m, i) => {
            let obj = {
              value: i + 1,
              label: m,
              dropValues: res.data.data[0][m],

            }
            array.push(obj)

          })
          this.setState({
            optionsCat: array
          })

        }
      )



  }
  categoryChanged = (e) => {

    this.setState({
      selectedCategory: e

    }

    )
    let filteredValues = this.state.optionsCat.filter((o) => {
      return o.label === e.label


    });
    let arr = [];
    filteredValues[0].dropValues.map((f, i) => {

      let filteredObj = {
        label: f,
        value: i + 1
      }
      arr.push(filteredObj);


    })
    this.setState({ filteredForDrop: arr })

  }
  getValues = (e) => {

    this.setState({ selectedValuesArray: e })
  }
  componentDidMount() {
    this.fetchCategoriesDrop();

  }

  render() {



    const optionsExp = [
      { label: '=', value: 1 },
    ]

    return (
      <>
        <div className='filter'>
          <h2 > <span style={{color: '#F7D315'}}>{(localStorage.getItem("mun"))}</span>   
            <span></span> municipality
            <span>
              {
                localStorage.getItem("ward") !== 'null' && <span> Ward {localStorage.getItem("ward")} </span>

              }
            </span>
            </h2>
          <div className='row'>
            {// this.props.Categories!=''?
              this.props.Categories.map((e, i) => {
                return (

                  <div className="col-md-6" id={this.state.toogle == false ? 'show' : 'hide'} key={i}>
                    {localStorage.getItem('ward') == 'null' ?
                      (
                        <Multiselect
                          selected={this.state.openeddropdown}
                          setSelected={this.setSelected}
                          setVal={i => this.setState({ selectedVal: i })}
                          selectedVal={this.state.selectedVal}
                          dropdown={e.dropdown}
                          field={e.field}
                          id={e.id}
                        />


                      ) : (

                        e.field !== 'ward' && <Multiselect
                          selected={this.state.openeddropdown}
                          setSelected={this.setSelected}
                          setVal={i => this.setState({ selectedVal: i })}
                          selectedVal={this.state.selectedVal}
                          dropdown={e.dropdown}
                          field={e.field}
                          id={e.id}
                        />
                      )
                    }
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
                      value={this.state.selectedCategory}
                      options={this.state.optionsCat}

                      rightAligned={false}
                      placeholder='Categories'
                      // onClick = {() => this.categoryClicked()}
                      onChange={(e) => { this.categoryChanged(e) }}
                    />

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <Select
                      // value = {this.state.selectedCategory}
                      options={optionsExp}
                      // styles={customStyles}
                      rightAligned={false}
                      placeholder='Expressions'
                    // isDisabled = {this.state.dropdownDisabled}

                    // onChange = {(e) => {this.categoryChanged(e)}}
                    />



                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="kvs-select">
                      {this.state.selectedCategory &&


                        <ReactMultiSelectCheckboxes
                          options={this.state.filteredForDrop && this.state.filteredForDrop}

                          rightAligned={true}
                          placeholderButtonLabel='Values'
                          onChange={(e) => this.getValues(e)
                          }
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
              style={{ fontFamily: '"Poppins", sans-serif' }}
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