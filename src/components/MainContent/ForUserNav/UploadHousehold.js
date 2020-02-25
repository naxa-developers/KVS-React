import React, { Component } from 'react'
import UserNav from '../UserNav'
import { Link } from 'react-router-dom'

import CSVReader from "react-csv-reader";
import UploadFile from './UploadFile';



class UploadHousehold extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fileName: '',
            file: [],
            jsonResult: ''
        }
    }



    render() {
       
        // console.log("state", this.state.file);
        // const file = this.state.file


        return (
            <body className="">
                <div className="kvs-wrapper">
                    <header className="main-header user-management-header">
                        <nav className="navbar">
                            <div className="nav-left">
                                <Link to='/home' >
                                    <h1 className="logo-heading"><span>K</span>VS</h1>
                                </Link>
                            </div>
                            <div className="navbar-right">
                                {/* <!-- User Account --> */}
                                <UserNav />
                            </div>
                        </nav>
                    </header>
                    <div className="content-wrapper household-wrapper">
                        <a className="icon-previous" href=""><i className="material-icons">keyboard_backspace</i></a>
                        <div className="container-fluid">
                            <section className="section-wrap-center household-wrap">
                                <span className="content-heading">Upload household</span>

                                <div className="data-center">
                                <span className="icon-content"><i class="icon-file-alt"></i></span>
                                    <h3 className="heading3">Upload your data from Excel or CSV</h3>
                                    <span className="info-para">Drag and drop your files here</span>
                                </div>
       
                                <UploadFile displayFileName = {this.displayFileName} onDrop={(result) => {
        //   console.log('in main', result)
           this.setState({
              file: result
          })
        }} />
        {/* <p className="span-file"><span></span>Damar-Kumar-Household.csv</p> */}
                              {/* <span className="icon-content"><i className="icon-upload-alt"></i></span> */}
                                <main>
                                    <div className="table-responsive table-responsive-mod">
                                        <table className="table common-table">
                                            <thead>
                                                <tr>
                                                    <th>Owner name</th>
                                                    <th>Age group</th>
                                                    <th>Gender</th>
                                                    <th>Citizenship no.</th>
                                                    <th>Phone</th>
                                                    <th>Ward no.</th>   
                                                    <th>Family size</th>
                                                    <th>Social security</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            
                                                {this.state.file && this.state.file.map( (f,i) => {
                                                
                                                    
                                                    return (
                                                        <tr>
                                                        <th>{f.owner_name}</th>
                                                        <td>{f.owner_age}</td>
                                                        <td>{f.owner_sex}</td>
                                                        <td>{f.owner_citizenship_no}</td>
                                                        <td>{f.ward}</td>
                                                        <td>11</td>
                                                        <td>4</td>
                                                        <td>
                                                            <span className="security check">
                                                                <i className="material-icons">check_circle</i>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="more-link">
                                                                <i className="material-icons">more_vert</i>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    )
                                                }

                                                )
                                                
                                                

                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </main>
                            </section>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default UploadHousehold;
