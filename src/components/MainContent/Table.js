import React, { Component } from "react";
import { motion } from "framer-motion";
import ScrollBar from "react-perfect-scrollbar";

import { Ellipsis } from "react-awesome-spinners";
import SingleRow from "./SingleRow";

class Table extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items: this.props.householdData.slice(0, 1)
    }
  }
  
  recursive = () => {
    setTimeout(() => {
      let hasMore = this.state.items.length + 1 < this.props.householdData.length;
      this.setState( (prev, props) => ({
        items: props.householdData.slice(0, prev.items.length + 1)
      }));
      if (hasMore) this.recursive();
    }, 0);
  }
  componentDidMount() {
    // this.recursive();
 }

  render() {
    // console.log("for id", this.props.householdData);
    console.log("slice", this.state.items);
    
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
                <div
                  id="Spinner"
                  style={{
                    display: `${this.props.display}`,
                    position: "absolute",
                    zIndex: "500",
                    textAlign: "center",
                    paddingLeft: '40%',
                  }}
                >
                  <Ellipsis />
                </div>
                <tbody>
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
            </div>
          </motion.div>
        </div>
      </ScrollBar>
    );
  }
}

export default Table;
