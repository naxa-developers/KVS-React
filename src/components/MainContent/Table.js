import React, { Component } from "react";
import { motion } from "framer-motion";
import ScrollBar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

class Table extends Component {
  render() {
    return (
      <ScrollBar>
        <div style={{ height: "85vh" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30
            }}
          >
            <div className="table-responsive">
              <table className="table common-table">
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
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.householdData != "" ? (
                    this.props.householdData.map((h, i) => {
                      return (
                        <tr key={i}>
                          <Link
                            to={{
                              pathname: "/about",
                              state: {
                                index: h.id
                              }
                            }}
                          >
                            <td>
                              <b>{h.owner_name}</b>
                            </td>
                          </Link>
                          <td className="age-group">{h.owner_age}</td>
                          <td className="gender">{h.owner_sex}</td>
                          <td className="citizen">{h.owner_citizenship_no}</td>
                          <td className="phone">
                            {h.contact_number == ""
                              ? h.contact_number
                              : "01-******"}
                          </td>
                          <td className="ward">{h.ward}</td>
                          <td className="size">NaN</td>
                          <td>
                            <span className="security check">
                              <i className="material-icons">check_circle</i>
                            </span>
                          </td>
                          <td>
                            <span className="download">
                              <i className="material-icons">keyboard_tab</i>
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                      <tr>
                        <td>No data found</td>
                      </tr>
                    )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </ScrollBar>
    );
  }
}

export default Table;
