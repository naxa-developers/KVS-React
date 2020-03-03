import React, { Component } from "react";
import { motion } from "framer-motion";
import ScrollBar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import { Ellipsis } from "react-awesome-spinners";
import SingleRow from "./SingleRow";
// import '../../js/kvs';

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
 
let trimmed = this.props.householdData
let trimmedOne = trimmed.slice(0, 100)
// console.log("trim", trimmedOne);


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
            <ul class="data-list">
                  <span>Data viewby</span>
                  <div>
                      <button role="button" class="common-button-bg">Household</button>
                      <button role="button" class="common-button-border">Person</button>
                  </div>
              </ul>
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
                { this.props.householdData.length!=0 ? 
             
             trimmedOne.map((h) => {
                                return(
                                    <tr>
                                    <td>
                                

                                <Link
                        to={{
                            pathname: "/about",
                            state: {
                                index: h.id
                            }
                        }}
                    >
                    
                            <b style={{color:'black'}}>{h.owner_name}</b>
                       
                    </Link>
                           
                                    </td>
                                    <td><span class="age-group">18-59 yrs</span></td>
                                <td><span class="gender">{h.owner_sex}</span></td>
                                <td><span class="citizen">{h.owner_citizenship_no}</span></td>
                                <td><span class="phone"> {h.contact_number == ""
                            ? h.contact_number
                            : "01-******"}</span></td>
                                <td><span class="ward">{h.ward}</span></td>
                                    <td><span class="size">NaN</span></td>
                                    <td>
                                    <span className="security check">
                            <i className="material-icons" style={{color: `${h.social_security == true ? '#71c016' : '#F32F30'}`}}>{ h.social_security == true ? 'check_circle' : 'cancel' }</i>
                        </span>
                                    </td>
                                    <td>
                                        {/* <span class="download">
                                            <i class="material-icons">keyboard_tab</i>
                                        </span> */}
                                    </td>
                                </tr>
                               
                                )

                            }) 
                          : <span>No data found</span>
                        }
                       
                        
                       



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