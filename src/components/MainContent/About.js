import React, { Component } from "react";
import group223 from "../../img/Group 223.png";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";

class About extends Component {
  render() {
    const { data, ownerName } = this.props.location.state;
    return (
      <body className="">
        <div className="kvs-wrapper">
          <header className="main-header header-mod">
            <nav className="navbar">
              <div className="navbar-left">
                <h1 className="logo">
                  <span>K</span>VS
                </h1>
              </div>
              <div className="navbar-right">
                <UserNav />
              </div>
            </nav>
          </header>
          <div className="main-content">
            <div className="container-fluid">
              <div className="main-wrapper">
                <figure className="backward-icon">
                  <Link to="/home">
                    <i className="material-icons" style={{ color: "black" }}>
                      keyboard_backspace
                    </i>
                  </Link>
                </figure>
                {data.map((value, i) => {
                  if (value.owner_name === ownerName) {
                    return (
                      <div className="row no-gutters" key={i}>
                        <div className="col-md-4">
                          <div className="sticky-sidebar">
                            <div className="user-profile">
                              <div className="user-profile-top">
                                <figure>
                                  <img src={group223} alt="User Image" />
                                </figure>
                                <div className="text-wrap">
                                  <span className="user-title">
                                    {value.owner_name}
                                  </span>
                                  <span className="user-span18">
                                    {value.place_name}, {value.district} <br />
                                    Nepal
                                  </span>
                                  <span className="user-span16">
                                    {value.date}
                                  </span>
                                </div>
                              </div>
                              <div className="user-profile-bottom">
                                <ul>
                                  <li>
                                    <div className="left">
                                      <span className="user-span16">
                                        Age group
                                      </span>
                                      <span className="user-span18">
                                        {value.owner_age} yrs
                                      </span>
                                    </div>
                                    <div className="right">
                                      <span className="user-span16">
                                        Gender
                                      </span>
                                      <span className="user-span18">
                                        {value.owner_sex}
                                      </span>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="left">
                                      <span className="user-span16">
                                        Citizenship No.
                                      </span>
                                      <span className="user-span18">
                                        {value.owner_citizenship_no}
                                      </span>
                                    </div>
                                    <div className="right">
                                      <span className="user-span16">Phone</span>
                                      <span className="user-span18">
                                        {value.contact_no === "nan"
                                          ? "-"
                                          : value.contact_no}
                                      </span>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="left">
                                      <span className="user-span16">
                                        Ward no.
                                      </span>
                                      <span className="user-span18">
                                        {value.ward}
                                      </span>
                                    </div>
                                    <div className="right">
                                      <span className="user-span16">
                                        Family size
                                      </span>
                                      <span className="user-span18">4</span>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="left">
                                      <span className="user-span16">
                                        Social Security
                                      </span>
                                      <span className="user-span18"></span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p className="user-profile-para">
                              <i className="icon-angle-left"></i>
                              <span>Export</span>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="user-info">
                            <div className="user-info-header">
                              <ul>
                                <li className="user-span18 current">
                                  Household data
                                </li>
                                <li className="user-span18">Individual data</li>
                                <li className="user-span18">Animal data</li>
                              </ul>
                            </div>
                            <div className="user-info-body">
                              <ul>
                                <li className="user-span14">
                                  <span>Place name</span>
                                  <span>{value.owner_name}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Ward</span>
                                  <span>{value.ward}</span>
                                </li>

                                <li className="user-span14">
                                  <span>House number</span>
                                  <span>
                                    {value.household_number === ""
                                      ? value.household_number
                                      : "-"}
                                  </span>
                                </li>

                                <li className="user-span14">
                                  <span>GPS coordinates</span>
                                  <span>27.76873817</span>
                                </li>

                                <li className="user-span14">
                                  <span>Coordinates latitude</span>
                                  <span>{value.latitude}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Coordinates longitude</span>
                                  <span>{value.longitude}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Coordinates altitude</span>
                                  <span>{value.altitude}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Coordinates Precisioin</span>
                                  <span>{value.gps_precision}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Household number</span>
                                  <span>{value.household_number}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Owner's Name</span>
                                  <span>{value.owner_name}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Owner's Age</span>
                                  <span>{value.owner_age}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Owner's sex</span>
                                  <span>
                                    {value.owner_sex === "Male"
                                      ? "पुरुष (Male)"
                                      : "महिला (Female)"}
                                  </span>
                                </li>

                                <li className="user-span14">
                                  <span>Status</span>
                                  <span>{value.owner_status}</span>
                                </li>

                                <li className="user-span14">
                                  <span>if_other_please_state_here</span>
                                  <span>
                                    {value.owner_status_other === "nan"
                                      ? "-"
                                      : value.owner_status_other}
                                  </span>
                                </li>

                                <li className="user-span14">
                                  <span>Caste</span>
                                  <span>
                                    {value.owner_caste === "Others" || "others"
                                      ? "अन्य (Other)"
                                      : value.owner_caste}
                                  </span>
                                </li>

                                <li className="user-span14">
                                  <span>caste_other</span>
                                  <span>
                                    {value.owner_caste_other === "nan"
                                      ? "-"
                                      : value.owner_caste_other}
                                  </span>
                                </li>

                                <li className="user-span14">
                                  <span>Religion</span>
                                  <span>{value.religion}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Religion_other</span>
                                  <span>
                                    {value.religion_other === "nan"
                                      ? "-"
                                      : value.religion_other}
                                  </span>
                                </li>

                                <li className="user-span14">
                                  <span>Mother_tongue</span>
                                  <span>{value.mother_tongue}</span>
                                </li>

                                <li className="user-span14">
                                  <span>MT_other</span>
                                  <span>{value.owner_education}</span>
                                </li>

                                <li className="user-span14">
                                  <span>Education_owner</span>
                                  <span>santoshcp</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default About;
