import React from 'react'
import { Link, HashRouter } from 'react-router-dom'

function NavBarHome() {
    return (
        <header className="home-header">
            <div className="container-fluid">
                <div className="nav-wrap">
                    <div className="nav-left">
                        <h1 className="logo-heading"><span>K</span>VS</h1>
                    </div>
                    <div className="nav-right">
                        <ul className="link-title" id="nav-dropdown">
                            <li><Link to="/introduction">Introduction</Link></li>
                            <li><Link to="/summary">Summary</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/login">Sign in</Link></li>

                        </ul>
                        <div className="toggle-button active">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBarHome
