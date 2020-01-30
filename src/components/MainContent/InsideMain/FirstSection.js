import React from 'react'
import MaterialIcon from "material-icons-react";

import Emblem from '../../../img/Emblem_of_Nepal.png'

function FirstSection() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-wrap-center pdt-140 pdb-110">
                    <div className="banner-content">
                        <figure>
                            <img src={Emblem} alt="" />
                        </figure>
                        <h2 className="heading2">A <span>Household Data Visualization System</span> for Disaster Risk Reduction and early assistance.</h2>
                        <span className="icon-wrap pdt-140">
                        <MaterialIcon style ={{display: 'none'}}/>
                            <figure><i className="material-icons">arrow_downward</i></figure>
                         
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection
