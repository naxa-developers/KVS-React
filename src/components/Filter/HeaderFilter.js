import React, { Component } from 'react'
import WardFilter from './WardFilter'
import EducationFilter from './EducationFilter'
import AgeFilter from './AgeFilter'
import FamilyNoFilter from './FamilyNoFilter'
import SocialSecurityFilter from './SocialSecurityFilter'

class HeaderFilter extends Component {
    render() {
        return (
            <div className="filter">
            <h2><span>Kathmandu</span> municipality</h2>
            <form>
                <div className="row">

                    <div className="col-md-6">
                        <WardFilter/>
                    </div>
                    <div className="col-md-6">
             <EducationFilter />
                    </div>
                    <div className="col-md-6">
                  <AgeFilter />
                    </div>
                    <div className="col-md-6">
                  <AgeFilter />
                    </div>
                    <div className="col-md-6">
                        <FamilyNoFilter />
                    </div>
                    <div className="col-md-6">
                       <SocialSecurityFilter />

                    </div>
                </div>
                <div className="more">
                    <button role="button" className="common-button-border icon-button">
                        <i className="material-icons">filter_list</i>More
                    </button>
                </div>
                <div className="buttons">
                    <button role="button" className="common-button-bg">
                        apply
                    </button>
                    <button role="button" className="common-button-border">
                        More
                    </button>
                </div>
            </form>
        </div>
        )
    }
}
export default HeaderFilter;
