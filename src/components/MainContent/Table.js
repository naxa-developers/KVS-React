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
                        <tr>
                            <td>
                                <b>Damar Kumari thapa</b>
                            </td>
                            <td><span class="age-group">18-59 yrs</span></td>
                            <td><span class="gender">male</span></td>
                            <td><span class="citizen">495098568</span></td>
                            <td><span class="phone">9849-087-908</span></td>
                            <td><span class="ward">11</span></td>
                            <td><span class="size">4</span></td>
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
                        <tr>
                            <td>
                                <b>Damar Kumari thapa</b>
                            </td>
                            <td><span class="age-group">18-59 yrs</span></td>
                            <td><span class="gender">male</span></td>
                            <td><span class="citizen">495098568</span></td>
                            <td><span class="phone">9849-087-908</span></td>
                            <td><span class="ward">11</span></td>
                            <td><span class="size">4</span></td>
                            <td>
                                <span class="security cross">
                                    <i class="material-icons">cancel</i>
                                </span>
                            </td>
                            <td>
                                <span class="download">
                                    <i class="material-icons">keyboard_tab</i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Damar Kumari thapa</b>
                            </td>
                            <td><span class="age-group">18-59 yrs</span></td>
                            <td><span class="gender">male</span></td>
                            <td><span class="citizen">495098568</span></td>
                            <td><span class="phone">9849-087-908</span></td>
                            <td><span class="ward">11</span></td>
                            <td><span class="size">4</span></td>
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
                        <tr>
                            <td>
                                <b>Damar Kumari thapa</b>
                            </td>
                            <td><span class="age-group">18-59 yrs</span></td>
                            <td><span class="gender">male</span></td>
                            <td><span class="citizen">495098568</span></td>
                            <td><span class="phone">9849-087-908</span></td>
                            <td><span class="ward">11</span></td>
                            <td><span class="size">4</span></td>
                            <td>
                                <span class="security cross">
                                    <i class="material-icons">cancel</i>
                                </span>
                            </td>
                            <td>
                                <span class="download">
                                    <i class="material-icons">keyboard_tab</i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Damar Kumari thapa</b>
                            </td>
                            <td><span class="age-group">18-59 yrs</span></td>
                            <td><span class="gender">male</span></td>
                            <td><span class="citizen">495098568</span></td>
                            <td><span class="phone">9849-087-908</span></td>
                            <td><span class="ward">11</span></td>
                            <td><span class="size">4</span></td>
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
                        <tr>
                            <td>
                                <b>Damar Kumari thapa</b>
                            </td>
                            <td><span class="age-group">18-59 yrs</span></td>
                            <td><span class="gender">male</span></td>
                            <td><span class="citizen">495098568</span></td>
                            <td><span class="phone">9849-087-908</span></td>
                            <td><span class="ward">11</span></td>
                            <td><span class="size">4</span></td>
                            <td>
                                <span class="security cross">
                                    <i class="material-icons">cancel</i>
                                </span>
                            </td>
                            <td>
                                <span class="download">
                                    <i class="material-icons">keyboard_tab</i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </motion.div>
        )
    }
}
export default Table;




