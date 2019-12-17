import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="card-header">
            <a href="index.html" className="logo">
                {/* <img src="img/logo.png" alt="logo" /> */}
            </a>
            <ul className="sidebar-nav">
                <li className="current">survey</li>
                <li>about</li>
            </ul>
        </div>
        )
    }
}
export default Header;
