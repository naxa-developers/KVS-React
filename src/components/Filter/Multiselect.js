import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
class Multiselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBar: false,
      selectedValue: [],
      indexset: false,
      thiscompvalue: [],
      visible: true,
      toggleDrop: false
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  removeselected = val => {
    var selected = this.props.selectedVal.filter(e => {
      return e.field == this.props.field;
    });

    var others = this.props.selectedVal.filter(e => {
      return e.field != this.props.field;
    });

    let neww = selected[0].value.filter(e => e != val);

    let newjsonwrapper = [];
    others.length != 0 && newjsonwrapper.push(...others);
    newjsonwrapper.push({ field: this.props.field, value: neww });
    // console.log(newjsonwrapper, "new")
    this.props.setVal(newjsonwrapper);
  };

  handleChange = v => {
    let value = v.target.value;
    var selected = this.props.selectedVal.filter(e => {
      return e.field == this.props.field;
    });
    var others = this.props.selectedVal.filter(e => {
      return e.field != this.props.field;
    });

    let valuetoset = [];
    selected[0].value.length != 0 && valuetoset.push(...selected[0].value);
    if (!selected[0].value.includes(value)) {
      valuetoset.push(value);
    } else {
      valuetoset = selected[0].value.filter(e => e != value);
    }
    console.log(valuetoset, 'hey valuetoset');
    let newjsonwrapper = [];
    others.length != 0 && newjsonwrapper.push(...others);
    newjsonwrapper.push({ field: this.props.field, value: valuetoset });
    this.props.setVal(newjsonwrapper);
  };

  fieldHandler = data => {
    if (data === 'social_security_received') {
      return (data = 'Social Security Recieved');
    }
    if (data === 'senior_citizen') {
      return (data = 'Senior Citizen');
    }
    if (data === 'flood') {
      return (data = 'Flood Prone Area');
    } else {
      return data;
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    console.log('hey mousedown');
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        toggleDrop: false
      });
    }
  }

  classHandler = (selected, id) => {
    if (selected === id) {
      if (selected !== id) {
        this.setState({
          toggleDrop: false
        });
      } else {
        this.setState({
          toggleDrop: false
        });
      }
    } else {
      if (selected !== id) {
        this.setState({
          toggleDrop: true
        });
      } else {
        this.setState({
          toggleDrop: false
        });
      }
    }
  };

  render() {
    // console.log("f", this.props.field);

    let sel = this.props.selectedVal.filter(e => e.field == this.props.field);
    return (
      <div className='form-group' id={this.props.id}>
        <div className='kvs-select'>
          <div
            ref={this.setWrapperRef}
            className={
              this.state.toggleDrop
                ? 'select-wrapper select-toggle'
                : 'select-wrapper'

              // this.clickHandlers(this.props.selected, this.props.id)
            }
            onClick={() => {
              var valuetopass =
                this.props.selected == this.props.id ? 0 : this.props.id;
              this.props.setSelected(valuetopass);
              this.classHandler(this.props.selected, this.props.id);
            }}
            style={{ display: this.state.visible ? 'block' : 'none' }}
          >
            <span className='select-item'>
              {this.fieldHandler(this.props.field)}
            </span>
            <ul>
              {this.props.dropdown.map((e, i) => {
                return (
                  <li key={i}>
                    <div className='custom-control custom-checkbox'>
                      <input
                        type='checkbox'
                        className='custom-control-input'
                        id={`${e}${this.props.id}`}
                        name={e}
                        value={e}
                        checked={
                          sel.length != 0 &&
                          sel[0].value.length != 0 &&
                          sel[0].value.includes(e)
                        }
                        onChange={i => this.handleChange(i)}
                      />
                      <label
                        className='custom-control-label'
                        style={{
                          width: '100%',
                          paddingTop: '5px',
                          paddingBottom: '5px'
                        }}
                        htmlFor={`${e}${this.props.id}`}
                      >
                        {e}{' '}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='selected-data'>
            {sel.length != 0 &&
              sel[0].value.length != 0 &&
              sel[0].value.map((s, i) => {
                return (
                  <span key={i}>
                    {s}{' '}
                    <small
                      onClick={() => {
                        // console.log("ciicked")

                        this.removeselected(s);
                      }}
                    >
                      x
                    </small>{' '}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default Multiselect;
