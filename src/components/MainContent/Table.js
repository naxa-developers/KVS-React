import React, { Component } from 'react'
import { motion } from 'framer-motion';

class Table extends Component {
    render() {
        return (
            <  motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30
            }}
                 >
            <div class="table-responsive">

                <table class="table common-table">
                    <thead>
                        <tr>
                            <th>Owner name</th>
                            <th>Age Group</th>
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
                        { this.props.householdData.length!=0 ?
                            this.props.householdData.map((h) => {
                                return(
                                    <tr>
                                    <td>
                                <b>{h.owner_name}</b>
                                    </td>
                                    <td><span class="age-group">18-59 yrs</span></td>
                                <td><span class="gender">{h.owner_sex}</span></td>
                                <td><span class="citizen">{h.owner_citizenship_no}</span></td>
                                <td><span class="phone">{h.contact_number}</span></td>
                                <td><span class="ward">{h.ward}</span></td>
                                    <td><span class="size">NaN</span></td>
                                    <td>
                                        <span class="security check">
                                            <i class="material-icons">check_circle</i>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="download">
                                            <i class="material-icons">keyboard_tab</i>
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
        )
    }
}
export default Table;