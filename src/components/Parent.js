import React, { Component, createRef } from 'react';

import Main from './MainContent/Main';
import Filter from './Filter/Filter';

import Axios from 'axios';
import { Popup } from 'leaflet';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.markerref = createRef();
    this.clusterRef = createRef()
    this.state = {
      householdData: '',
      bollean: [],
      bounds: '',
      display: 'block',
      token: `${localStorage.getItem('myValueInLocalStorage')}`,
      tempData: ''
    };
  }

  fetchDataF = () => {
    var bodyFormData = new FormData();

    // bodyFormData.append('ward', JSON.stringify([6, 2]));
    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      // console.log('Data is here');
      console.log(res.data.data);

      this.setState({ householdData: res.data.data }, () => {
        window.mapRef.current.leafletElement.fitBounds(
          this.markerref.current.leafletElement.getBounds()
        );
      });
    });
  };

  // searchTable = keyword => {
  //   let filteredData = this.state.householdData.filter(data =>
  //     data.owner_name.includes(keyword)
  //   );

  //   this.setState({
  //     householdData: filteredData
  //   });
  // };

  // const cluster = window.clusterRef.current.leafletElement;
  // const singlemarker = cluster.getLayers();
  // singlemarker[0].openPopup()

  searchTable = keyword => {
    if (keyword.length > 0) {
      let filteredData = this.state.householdData.filter(data =>
        data.owner_name.includes(keyword)
      );
      setTimeout(() => {
        this.setState({
          householdData: filteredData,
        }, () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
          window.mapRef.current.leafletElement.setZoom(14);
          const cluster = this.clusterRef.current.leafletElement.getLayers()
          cluster[0].openPopup()
        });
      }, 1200)
    } else {
      if (JSON.parse(sessionStorage.getItem("available")) != true) {
        return
      }
      else {
        this.state.householdData = JSON.parse(sessionStorage.getItem("household"))
        this.setState({},
          () => {
            window.mapRef.current.leafletElement.fitBounds(
              this.markerref.current.leafletElement.getBounds()
            );
          }
        )
      }
    }
  }

  fetchDatafilter = () => {
    this.setState({ ...this.state, display: 'block' });
    var bodyFormData = new FormData();

    // bodyFormData.append('ward', JSON.stringify([6, 3]));
    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', 'Yes');
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    // console.log(this.props,"hey props")
    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      console.log('Data is here');
      console.log(res.data.data);
      this.setState(
        { householdData: res.data.data, tempData: res.data.data },
        () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
        }
      );
      sessionStorage.setItem('household', JSON.stringify(res.data.data))
      sessionStorage.setItem('available', true);
      this.state.householdData != '' && this.setState({ display: 'none' });
    });
  };

  dataReset = () => {
    if (JSON.parse(sessionStorage.getItem("available")) != true) {
      this.fetchDatafilter();
    }
    else {

      this.state.householdData = JSON.parse(sessionStorage.getItem("household"))
      this.setState({

        display: 'none'


      },
        () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
        }
      )

    }

  }

  onApply = selected => {
    this.setState({ ...this.state, display: 'block' });
    var bodyFormData = new FormData();
    var morebodyFormData = new FormData();

    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));

    selected.forEach(i => {
      if (i.value.length != 0) {
        if (i.field === 'flood' || i.field === 'social_security_received') {
          i.value[0] === 'Yes' && bodyFormData.append(i.field, 'Yes');
          i.value[0] !== 'Yes' && bodyFormData.append(i.field, 'No');
          return;
        }

        if (i.field === 'senior_citizen') {
          i.value[0] === 'Yes' &&
            bodyFormData.append(i.field, 'Senior citizen');
          return;
        }
        if (i.field === 'ward' || i.field === 'education') {
          bodyFormData.append(i.field, JSON.stringify(i.value));
          return
        }
        if (i.field === 'hazard_type') {
          console.log(i.value)
          bodyFormData.append(i.field, JSON.stringify(i.value))
        }
      }
    });

    for (var p of bodyFormData) {
      console.log(p[0], p[1]);
    }

    Axios({
      method: 'post',
      url: 'http://139.59.67.104:8019/api/v1/fdd',
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      this.setState({ householdData: res.data.data }, () => { });

      setTimeout(() => {
        if (res.data.data.length !== 0) {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
        } else {
          alert('No data is available');
        }
      }, 1000);
      this.state.householdData != '' &&
        this.setState({ ...this.state, display: 'none' });
    });

    Axios({
      method: "post",
      url: "http://139.59.67.104:8019/api/v1/fdd",
      data: bodyFormData,
      headers: {
        'Content-type': 'multipart/form-data',
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    })
  };

  componentDidMount() {
    console.log("data", sessionStorage.household, "session", sessionStorage.getItem("available"));

    if (JSON.parse(sessionStorage.getItem("available")) != true) {
      console.log("sessionstorage is empty");

      this.fetchDatafilter();
    }
    else {
      console.log("data from storage");
      this.state.householdData = JSON.parse(sessionStorage.getItem("household"))
      this.setState({

        display: 'none'


      },
        () => {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
        }
      )

    }




  }

  render() {
    return (
      <div className=''>
        <div className='kvs-wrapper'>
          <div
            className='container-fluid main-wrapper p-0'
            style={{ position: 'fixed' }}
          >
            <Filter
              householdData={this.state.householdData && this.state.householdData}
              onApply={this.onApply}
              fetchedData={() => this.fetchDatafilter()}
              markerref={this.markerref}
              dataReset={this.dataReset}
            />
            <Main
              householdData={this.state.householdData && this.state.householdData}
              searchTable={this.searchTable}
              markerref={this.markerref}
              display={this.state.display}
              clusterRef={this.clusterRef}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Parent;
