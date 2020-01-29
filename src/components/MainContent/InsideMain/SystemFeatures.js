import React from 'react'

function SystemFeatures() {
    return (
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
    )
}

export default SystemFeatures
