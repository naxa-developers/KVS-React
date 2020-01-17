import React, { Component } from 'react'
import { motion } from 'framer-motion';
import ScrollBar from "react-perfect-scrollbar";

class Table extends Component {
    render() {
        return (
            <ScrollBar >

            <div style={{height:'85vh'}}>

            <  motion.div
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
                        { this.props.householdData!='' ?
                            this.props.householdData.map((h, i) => {
                                return(
                                    <tr key={i}>
                                    <td>
                                <b>{h.owner_name}</b>
                                    </td>
                                <td><span className="age-group">{h.owner_age}</span></td>
                                <td><span className="gender">{h.owner_sex}</span></td>
                                <td><span className="citizen">{h.owner_citizenship_no}</span></td>
                                <td><span className="phone">{h.contact_number==""?h.contact_number:"01-******"}</span></td>
                                <td><span className="ward">{h.ward}</span></td>
                                    <td><span className="size">NaN</span></td>
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
                               
                                )

                            }) : <span>No data found</span>
                        }
                       
                        
                       
                       
                    </tbody>
                </table>
            </div>
            </motion.div>
            </div>

            </ScrollBar>
        )
    }
}
export default Table;