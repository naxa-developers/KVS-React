import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Emblem from '../../img/Emblem_of_Nepal.png'
import KVS from '../../img/KVS.png'
import AWO from '../../img/AWO.png'
import DCA from '../../img/dca.svg'

class Home extends Component {
    render() {
        return (
            <body className="">
                <div className="kvs-wrapper">
                    <header>
                        <div className="container-fluid">
                            <div className="nav-wrap">
                                <div className="nav-left">
                                    {/* <a href="index.html"> */}
                                    <h1 className="logo-heading"><span>K</span>VS</h1>
                                    {/* </a> */}
                                </div>
                                <div className="nav-right">
                                    <ul className="link-title" id="nav-dropdown">
                                        <li><a href="#">Introduction</a></li>
                                        <li><a href="#">Summary</a></li>
                                        <li><a href="#">Features</a></li>
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
                    <section className="banner">
                        <div className="container">
                            <div className="banner-wrap-center pdt-140 pdb-110">
                                <div className="banner-content">
                                    <figure>
                                        <img src={Emblem} alt="" />
                                    </figure>
                                    <h2 className="heading2">A <span>Household Data Visualization System</span> for Disaster Risk Reduction and early assistance.</h2>
                                    <span className="icon-wrap pdt-140">
                                        <figure><i className="material-icons">arrow_downward</i></figure>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about pdt-170 pdb-170">
                        <div className="container-fluid">
                            <div className="about-wrap-center">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <div className="about-wrap">
                                            <span className="section-heading">About Project</span>
                                            <h3 className="heading3">This system is primarily designed to visualize the <span>household status of families living</span> in various districts of nepal.</h3>
                                            <p className="body1">The primary objective is to study the risk associated with each household with reference to various disasters like flood, earthquake etc and seek for possible measures of assistance before occurrence. The system also focuses on visualization of various map layers extracted from VCA tool.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- summary --> */}
                    <section className="summary pdt-80 pdb-110">
                        <div className="container">
                            {/* <!-- text-wrap --> */}
                            <div className="text-wrap">
                                <span className="section-heading">Data summary</span>
                                <h3 className="heading3">Our <span>highlights </span>of data.</h3>
                            </div>
                            {/* <!-- flex-series-boxes --> */}
                            <div className="flex-series-boxes">
                                <div className="flex-sm-boxes">
                                    <a href="#">
                                        <span className="heading1">124</span>
                                        <span className="body1">Districts</span>
                                    </a>
                                </div>

                                <div className="flex-sm-boxes">
                                    <a href="#">
                                        <span className="heading1">1360</span>
                                        <span className="body1">Households</span>
                                    </a>
                                </div>

                                <div className="flex-sm-boxes">
                                    <a href="#">
                                        <span className="heading1">5882</span>
                                        <span className="body1">People</span>
                                    </a>
                                </div>

                                <div className="flex-sm-boxes">
                                    <a href="#">
                                        <span className="heading1">500</span>
                                        <span className="body1">Senior citizens</span>
                                    </a>
                                </div>

                                <div className="flex-sm-boxes">
                                    <a href="#">
                                        <span className="heading1">900</span>
                                        <span className="body1">Children</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- feature --> */}
                    <section className="features pdt-110 pdb-110">
                        <div className="container-fluid">
                            <div className="row-wrap">
                                <div className="content-wrap">
                                    <span className="section-heading">
                                        System Features
                                    </span>
                                    <h3 className="heading3">This system is primarily designed to visualize the <span> household status of families living.</span></h3>
                                    <ul className="body2">
                                        <li><i className="material-icons">check</i>System login and roles</li>
                                        <li><i className="material-icons">check</i>Household survey data entry/upload</li>
                                        <li><i className="material-icons">check</i>Filter for data visualization</li>
                                        <li><i className="material-icons">check</i>Map based visualization</li>
                                        <li><i className="material-icons">check</i>Overlay Map layers for disasters</li>
                                        <li><i className="material-icons">check</i>Graphs and charts for better visualization</li>
                                        <li><i className="material-icons">check</i>Export household data</li>
                                        <li><i className="material-icons">check</i>Single household data view in a separate page</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- <section className="features-lr pdt-110 pdb-110">
                        <div className="features-left">
                            <div className="content-wrap">
                                <span className="section-heading">
                                    System Features
                                </span>
                                <h3 className="heading3">This system is primarily designed to visualize the <span> household status of families living.</span></h3>
                                <ul className="body2">
                                    <li><i className="material-icons">check</i>System login and roles</li>
                                    <li><i className="material-icons">check</i>Household survey data entry/upload</li>
                                    <li><i className="material-icons">check</i>Filter for data visualization</li>
                                    <li><i className="material-icons">check</i>Map based visualization</li>
                                    <li><i className="material-icons">check</i>Overlay Map layers for disasters</li>
                                    <li><i className="material-icons">check</i>Graphs and charts for better visualization</li>
                                    <li><i className="material-icons">check</i>Export household data</li>
                                    <li><i className="material-icons">check</i>Single household data view in a separate page</li>
                                </ul>
                            </div>
                        </div>
                        <div className="features-right">
                            <figure>
                                
                            </figure>
                        </div>
                    
                    </section> --> */}

                    <footer>
                        <div className="footer-left pdt-50 pdb-50">
                            <div className="footer-left-wrap">
                                <span className="section-heading">Our mission</span>
                                <p className="span">This system is primarily designed to visualize the household status of families living in various districts of nepal. The primary objective is to study the risk associated with each family with reference to various disasters like flood, earthquake etc and seek for possible measures of assistance before occurrence. The system also focuses on visualization of various map layers extracted from VCA tool.</p>
                                <div className="logo-wrap">
                                    <span className="span">Supported by</span>
                                    <div className="logo-img">

                                        <figure>
                                            <img src={KVS} alt="kvs" />
                                        </figure>

                                        <figure>
                                            <svg src={DCA} alt="dca" />
                                        </figure>

                                        <figure>
                                            <img src={AWO} alt="awo" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-right pdt-50 pdb-50">
                            <div className="footer-right-wrap">
                                <span className="section-heading">Contact</span>
                                <ul className="contact-addr">
                                    <li className="body1">
                                        <span><i className="material-icons">where_to_vote</i></span>
                                        <span>Rajbiraj-4, Saptari, Nepal</span>
                                    </li>

                                    <li className="body1">
                                        <span><i className="material-icons">phone</i></span>
                                        <span>+977 01-439 325 23, 405 456 09</span>
                                    </li>

                                    <li className="body1">
                                        <span><i className="material-icons">mail</i></span>
                                        <span>mail@kvs.com.np</span>
                                    </li>
                                </ul>
                                <div className="copy-right">
                                    <span className="sm-span">© <span className="bold-span">KVS</span> All rights reserved. Designed by <span className="bold-span">NAXA</span>.</span>
                                </div>
                            </div>
                        </div>
                    </footer>


                </div>
            </body>
        )
    }
}

export default Home
