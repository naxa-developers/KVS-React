import React, { Component, createRef } from "react";

import Main from "./MainContent/Main";
import Filter from "./Filter/Filter";

import Axios from "axios";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.markerref = createRef();

    this.state = {
      householdData: "",
      bollean: [],
      bounds: "",
      display: "block",
      token: `${localStorage.getItem("myValueInLocalStorage")}`
    };
  }

  fetchDataF = () => {
    var bodyFormData = new FormData();

    bodyFormData.append("ward", JSON.stringify([6, 2]));
    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    Axios({
      method: "post",
      url: "http://139.59.67.104:8019/api/v1/fdd",
      data: bodyFormData,
      headers: {
        "Content-type": "multipart/form-data",
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      console.log("Data is here");
      console.log(res.data.data);
      this.setState({ householdData: res.data.data }, () => {
        window.mapRef.current.leafletElement.fitBounds(
          this.markerref.current.leafletElement.getBounds()
        );
      });
    });
  };

  searchTable = keyword => {
    let filteredData = this.state.householdData.filter(data =>
      data.owner_name.toLowerCase().includes(keyword)
    );

    this.setState({
      householdData: filteredData
    });
  };

  fetchDatafilter = () => {
    this.setState({ ...this.state, display: "block" });
    var bodyFormData = new FormData();

    bodyFormData.append("ward", JSON.stringify([6, 3]));
    // // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    bodyFormData.append("security", "Yes");
    // // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));
    // // console.log(this.props,"hey props")
    Axios({
      method: "post",
      url: "http://139.59.67.104:8019/api/v1/fdd",
      data: bodyFormData,
      headers: {
        "Content-type": "multipart/form-data",
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
      // Authorization:`Token ${this.props.token}` }
    }).then(res => {
      this.setState({ householdData: res.data.data }, () => {
        window.mapRef.current.leafletElement.fitBounds(
          this.markerref.current.leafletElement.getBounds()
        );
      });
      localStorage.setItem("HouseholdData", this.state.householdData);
      this.state.householdData != "" && this.setState({ display: "none" });
    });
  };

  onApply = selected => {
    this.setState({ ...this.state, display: "block" });
    var bodyFormData = new FormData();

    // bodyFormData.append('education_lists',JSON.stringify(['Literate']));
    // bodyFormData.append('security', "Yes");
    // bodyFormData.append('age_group_list',JSON.stringify(["20-40"]));

    selected.forEach(i => {
      if (i.value.length != 0) {
        if (i.field === "flood" || i.field === "social_security_received") {
          i.value[0] === "Yes" && bodyFormData.append(i.field, "Yes");
          i.value[0] !== "Yes" && bodyFormData.append(i.field, "No");
          return;
        }

        if (i.field === "senior_citizen") {
          i.value[0] === "Senior citizen" &&
            bodyFormData.append(i.field, "Yes");
          i.value[0] !== "Senior citizen" && bodyFormData.append(i.field, "No");
          return;
        }

        bodyFormData.append(i.field, JSON.stringify(i.value));
      }

      // i.value.length!=0&&bodyFormData.append(i.field, JSON.stringify(i.value));
      // // i.value.length !=0 && i.field === 'flood' &&  (i.value[0] !== 'Yes') ||  (i.value[0] === 'Yes') ? bodyFormData.append(i.field, 'No') : bodyFormData.append(i.field, 'Yes')
      // i.value.length !=0 && i.field === 'flood' &&  i.value[0] === 'Yes' && bodyFormData.append(i.field, 'Yes');
      // i.value.length !=0 && i.field === 'flood' &&  i.value[0] !== 'Yes' && bodyFormData.append(i.field, 'No');

      // i.value.length !=0 && i.field === 'senior_citizen' &&  i.value[0] === 'Senior citizen' && bodyFormData.append(i.field, 'Yes');
      // i.value.length !=0 && i.field === 'senior_citizen' &&  i.value[0] !== 'Senior citizen' && bodyFormData.append(i.field, 'No');

      // i.value.length !=0 && i.field === 'social_security_received' &&  i.value[0] === 'Yes' && bodyFormData.append(i.field, 'Yes');
      // i.value.length !=0 && i.field === 'social_security_received' &&  i.value[0] !== 'Yes' && bodyFormData.append(i.field, 'No');
    });

    for (var p of bodyFormData) {
      console.log(p[0], p[1]);
    }

    Axios({
      method: "post",
      url: "http://139.59.67.104:8019/api/v1/fdd",
      data: bodyFormData,
      headers: {
        "Content-type": "multipart/form-data",
        // Authorization: `Token 7d9f1c535b1323f607525fa99a4989b961bc5e01`
        Authorization: `Token ${this.state.token}`
      }
    }).then(res => {
      console.log("Data is here");
      console.log(res.data.data);
      this.setState({ householdData: res.data.data }, () => { });

      setTimeout(() => {
        if (res.data.data.length !== 0) {
          window.mapRef.current.leafletElement.fitBounds(
            this.markerref.current.leafletElement.getBounds()
          );
        } else {
          alert("No data is available");
        }
      }, 1000);
      console.log(this.state.householdData, "hey household data");
      this.state.householdData != "" &&
        this.setState({ ...this.state, display: "none" });
    });
  };

  componentDidMount() {
    // this.fetchData();
    this.fetchDatafilter();
    // console.log(this.props,"props")
  }

  render() {
    return (
      <div className="">
        <div className="kvs-wrapper">
          <div
            className="container-fluid main-wrapper p-0"
            style={{ position: "fixed" }}
          >
            <Filter
              householdData={this.state.householdData}
              onApply={this.onApply}
              fetchedData={() => this.fetchDatafilter()}
            />
            <Main
              householdData={this.state.householdData}
              searchTable={this.searchTable}
              markerref={this.markerref}
              display={this.state.display}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Parent;
