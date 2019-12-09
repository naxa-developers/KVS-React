import React, { Component } from 'react'
import Profile from '../../img/profile.png'
import MaterialIcon from "material-icons-react";

class UserNav extends Component {
    render() {
        return (
            <div className="dropdown user-menu ">
            <button className="dropdown-toggle" type="button" data-toggle="dropdown">
                <img src={Profile} className="user-image" alt="User Image"/>
                <div className="user-info">
                    <h6>Sam Shayesta</h6>
                    <span>municipality officer</span>
                </div>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
                {/* <!-- User image --> */}
                <li>
                    <a href="profile.html">
                        My Profile
                    </a>
                </li>
                <li>
                    <a href="#"> Account Setting </a>
                </li>

                <li className="dropdown-footer">
                    <a href="signin.html"> <MaterialIcon className="material-icons" icon="power_settings_new"></MaterialIcon>
                        Log Out
                    </a>
                </li>
            </ul>
        </div>
        )
    }
}
export default UserNav;
