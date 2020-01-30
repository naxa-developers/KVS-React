import React, { Component } from 'react';
import UserNav from './UserNav';
import MaterialIcon from 'material-icons-react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Table from './Table';
import Map from './Map';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: true,
      table: false,
      i: 0,
      selected: [],
      option: [],
      minLength: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('update');
    if (prevProps.householdData !== this.props.householdData) {
      // console.log('inside');
      const datas = [];
      this.props.householdData.map(data => {
        // console.log(data.owner_name);
        datas.push(data.owner_name);
      });
      // console.log(datas);
      this.setState({ option: datas });
    }
  }

  render() {
    return (
      <div className='main-content'>
        <header className='main-header'>
          <nav className='navbar'>
            <div className='input-group search'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <MaterialIcon icon='search'></MaterialIcon>
                </span>
              </div>

              {/* <input
                type='search'
                name='query'
                id='search-input'
                className='form-control'
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                placeholder='Search by name or citizenship…'
                // onKeyDown={e => this.props.searchTable(e.target.value)}
              /> */}

              <Typeahead
                // {...this.state}
                id='search-input'
                // onChange={selected => this.setState({ selected })}
                onChange={selected => this.props.searchTable(selected)}
                options={this.state.option}
                minLength={2}
                placeholder='Search by name or citizenship'
              />
            </div>
            <div className='navbar-right'>
              {/* <!-- User Account --> */}
              <UserNav />
            </div>
          </nav>
        </header>
        <main>
          <div className='map-wrapper'>
            <div className='tab '>
              <ul>
                <li
                  className={this.state.i === 0 ? 'current' : ''}
                  onClick={() => this.setState({ ...this.state, i: 0 })}
                >
                  Map
                </li>
                <li
                  className={this.state.i !== 0 ? 'current' : ''}
                  onClick={() => this.setState({ ...this.state, i: 1 })}
                >
                  data
                </li>
              </ul>
              {/* <button className="common-button-border no-border is-icon"><i className="material-icons">vertical_align_bottom</i>Export All</button> */}
            </div>
            {/* {this.state.i===0 ?
                        <Map householdData={this.props.householdData} markerref={this.props.markerref} display={this.props.display} />
                        :
                        <Table householdData={this.props.householdData} /> } */}

            <div
              style={{
                display: `${this.state.i !== 0 ? 'block' : 'none'}`,
                position: 'absolute'
              }}
            >
              <Table householdData={this.props.householdData} />
            </div>
            <div
              style={{ display: `${this.state.i === 0 ? 'block' : 'none'}` }}
            >
              <Map
                householdData={this.props.householdData}
                markerref={this.props.markerref}
                display={this.props.display}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
