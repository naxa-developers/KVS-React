import React from 'react';
import Groupbg from '../../../img/Group149.png';

function SystemFeatures() {
    return (
        <section className="features pdt-110 pdb-110">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <figure>
                            <img src={Groupbg} alt='' />
                        </figure>
                        <div className="col-md-7">
                            <div className="content-wrap">
                                <span className="section-heading">
                                    System Features
                                </span>
                                <h3 className="heading3">This system is primarily designed to visualize the <span> household status of families living.</span></h3>
                                <ul className="body2">
                                    <li><i className="icon-ok-sign"></i>System login and roles</li>
                                    <li><i className="icon-ok-sign"></i>Household survey data entry/upload</li>
                                    <li><i className="icon-ok-sign"></i>Filter for data visualization</li>
                                    <li><i className="icon-ok-sign"></i>Map based visualization</li>
                                    <li><i className="icon-ok-sign"></i>Overlay Map layers for disasters</li>
                                    <li><i className="icon-ok-sign"></i>Graphs and charts for better visualization</li>
                                    <li><i className="icon-ok-sign"></i>Export household data</li>
                                    <li><i className="icon-ok-sign"></i>Single household data view in a separate page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SystemFeatures
