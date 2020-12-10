import React, { Component } from "react";
import { motion } from "framer-motion";
import ScrollBar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { Ellipsis } from "react-awesome-spinners";
import SingleRow from "./SingleRow";
// import '../../js/kvs';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.householdData.slice(0, 1),
    };
  }
  exportTableToExcel = () => {
    // let downloadLink;
    const dataType = 'application/vnd.ms-excel';
    const tableSelect = document.getElementById('tableData');
    const tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    const FullDate = new Date();
    const date = `${FullDate.getFullYear()}/${FullDate.getDay()}/${FullDate.getMonth()}`;
    // 
    // Specify file name
    const filename = `Kvs TableData${date}.xls`;

    // Create download link element
    const downloadLink = document.createElement('a');

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      const blob = new Blob(['\ufeff', tableHTML], {
        type: dataType,
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = `data:${dataType}, ${tableHTML}`;

      // Setting the file name
      downloadLink.download = filename;

      // triggering the function
      downloadLink.click();
    }
  };
  recursive = () => {
    setTimeout(() => {
      let hasMore =
        this.state.items.length + 1 < this.props.householdData.length;
      this.setState((prev, props) => ({
        items: props.householdData.slice(0, prev.items.length + 1),
      }));
      if (hasMore) this.recursive();
    }, 0);
  };
  componentDidMount() {
    // this.recursive();
  }

  render() {
    let trimmed = this.props.householdData;
    let trimmedOne = trimmed.slice(0, 100);

    let trimmedPerson = this.props.householdPersonData;
    let trimmedOnePerson = trimmedPerson.slice(0, 100);

    const { tableViewBy } = this.props;
    return (
      <ScrollBar>
        <div style={{ height: "85vh" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
          >
            <div
              id="Spinner"
              style={{
                display: `${this.props.display}`,
                position: "absolute",
                zIndex: "500",
                textAlign: "center",
                paddingLeft: "40%",
              }}
            >
              <Ellipsis />
            </div>
            <div className="table-responsive">
              <button type="button" onClick={()=>{this.exportTableToExcel()}} className="common-button-bg" >Download</button>
              <ul class="data-list">
                <span>Data viewby</span>
                <div>
                  <button
                    onClick={() => {
                      this.props.setTableViewBy("household");
                    }}
                    role="button"
                    class={`common-button-bg
                      ${tableViewBy === "household" ? "active" : ""}
                    `}
                  >
                    Household
                  </button>
                  <button
                    onClick={() => {
                      this.props.setTableViewBy("person");
                    }}
                    role="button"
                    class={`common-button-bg
                    ${tableViewBy === "person" ? "active" : ""}
                  `}
                  >
                    Person
                  </button>
                </div>
              </ul>
              {tableViewBy === "household" && (
                <table
                  className="table common-table"
                  id="tableData"
                  // style={
                  //   tableViewBy === "household"
                  //     ? { display: "block" }
                  //     : { display: "none" }
                  // }
                >
                  <thead>
                    <tr>
                      <th>Owner name</th>
                      <th>Age </th>
                      <th>Gender</th>
                      <th>Citizenship No.</th>
                      <th>phone</th>
                      <th>Ward No.</th>
                      <th>family size</th>
                      <th>social Security</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.props.householdData.length != 0 ? (
                      trimmedOne.map((h) => {
                        return (
                          <tr>
                            <td>
                              <Link
                                to={{
                                  pathname: "/about",
                                  state: {
                                    index: h.id,
                                  },
                                }}
                              >
                                <b style={{ color: "black" }}>{h.owner_name}</b>
                              </Link>
                            </td>
                            <td>
                              <span class="age-group">{h.owner_age}</span>
                            </td>
                            <td>
                              <span class="gender">{h.owner_sex}</span>
                            </td>
                            <td>
                              <span class="citizen">
                                {h.owner_citizenship_no != "nan" || "NaN"
                                  ? h.owner_citizenship_no
                                  : "N/A"}
                              </span>
                            </td>
                            <td>
                              <span class="phone">
                                {" "}
                                {h.contact_no != ""
                                  ? h.contact_no != "nan" || "NaN"
                                    ? h.contact_no
                                    : "N/A"
                                  : "01-******"}
                              </span>
                            </td>
                            <td>
                              <span class="ward">{h.ward}</span>
                            </td>
                            <td>
                              <span class="size">N/A</span>
                            </td>
                            <td>
                              <span>{h.social_security_received}</span>
                              {h.social_security_received !== true && h.social_security_received !==false ? (
                                <span>Data Not Available</span>
                              ) : (
                                <span className="security check">
                                  <i
                                    className="material-icons"
                                    style={{
                                      color: `${
                                        h.social_security_received == true
                                          ? "#71c016"
                                          : "#F32F30"
                                      }`,
                                    }}
                                  >
                                    {h.social_security_received == true
                                      ? "check_circle"
                                      : "cancel"}
                                  </i>
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <span>No data found</span>
                    )}

                    {/* {this.state.items && this.state.items.map( item =>
            {
        return <SingleRow 
      owner_name={item.owner_name}
          /> }) } */}
                    {/* {
                    this.props.householdData != "" ? (
                      this.props.householdData.map((h, i) => {
                        return <SingleRow
                          keyy={i}
                          owner_name={h.owner_name}
                          owner_age={h.owner_age}
                          owner_sex={h.owner_sex}
                          citizenship_no={h.owner_citizenship_no}
                          contact_number={h.contact_number}
                          social_security = {h.social_security_received}
                          ward ={h.ward}

                        />
                      })
                    )
                      : (
                        <tr style={{ display: `${this.props.display === 'none' ? 'block' : 'none'}` }}>
                          <td>No data found</td>
                        </tr>
                      )} */}
                  </tbody>
                </table>
              )}
              {tableViewBy === "person" && (
                <table
                  className="table common-table"
                  id="tableData"
                  // style={
                  //   tableViewBy === "person"
                  //     ? { display: "block" }
                  //     : { display: "none" }
                  //   // tableViewBy === "person"
                  //   //   ? { display: "block" }
                  //   //   : { display: "none" }
                  // }
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age/Group</th>
                      <th>Gender</th>
                      <th>Citizenship No.</th>
                      <th>phone</th>
                      <th>Ward No.</th>
                      {/* <th>family size</th> */}
                      <th>social Security</th>
                    </tr>
                  </thead>
                  {/* <div
                  id="Spinner"
                  style={{
                    display: `${this.props.display}`,
                    position: "absolute",
                    zIndex: "500",
                    textAlign: "center",
                    paddingLeft: "40%",
                  }}
                >
                  <Ellipsis />
                </div> */}
                  <tbody>
                    {this.props.householdPersonData.length != 0 ? (
                      trimmedOnePerson.map((h) => {
                        console.log(h);
                        console.log(h.social_security_received);
                        return (
                          <tr>
                            <td>
                              <Link
                                to={{
                                  pathname: "/about",
                                  state: {
                                    index: h.id,
                                  },
                                }}
                              >
                                <b style={{ color: "black" }}>{h.name}</b>
                              </Link>
                            </td>
                            <td>
                              <span class="age-group">{h.age}</span>
                            </td>
                            <td>
                              <span class="gender">{h.gender}</span>
                            </td>
                            <td>
                              <span class="citizen">
                                {h.citizenship_number != "nan" || "NaN"
                                  ? h.citizenship_number
                                  : "N/A"}
                              </span>
                            </td>
                            <td>
                              <span class="phone">
                                {" "}
                                {h.contact_no != "" || "nan" || "NaN"
                                  ? h.contact_no
                                  : "N/A"}
                              </span>
                            </td>
                            <td>
                              <span class="ward">{h.ward}</span>
                            </td>
                            {/* <td>
                              <span class="size">NaN</span>
                            </td> */}
                            <td>
                              {h.social_security_received !== "Yes" && h.social_security_received !=='No' ? (
                                <span>Data Not Available</span>
                              ) : (
                                <span className="security check">
                                  <i
                                    className="material-icons"
                                    style={{
                                      color: `${
                                        h.social_security_received == "Yes"
                                          ? "#71c016"
                                          : "#F32F30"
                                      }`,
                                    }}
                                  >
                                    {h.social_security_received == "Yes"
                                      ? "check_circle"
                                      : "cancel"}
                                  </i>
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <span>No data found</span>
                    )}

                    {/* {this.state.items && this.state.items.map( item =>
            {
        return <SingleRow 
      owner_name={item.owner_name}
          /> }) } */}
                    {/* {
                    this.props.householdData != "" ? (
                      this.props.householdData.map((h, i) => {
                        return <SingleRow
                          keyy={i}
                          owner_name={h.owner_name}
                          owner_age={h.owner_age}
                          owner_sex={h.owner_sex}
                          citizenship_no={h.owner_citizenship_no}
                          contact_number={h.contact_number}
                          social_security = {h.social_security_received}
                          ward ={h.ward}

                        />
                      })
                    )
                      : (
                        <tr style={{ display: `${this.props.display === 'none' ? 'block' : 'none'}` }}>
                          <td>No data found</td>
                        </tr>
                      )} */}
                  </tbody>
                </table>
              )}
            </div>
          </motion.div>
        </div>
      </ScrollBar>
    );
  }
}

export default Table;
