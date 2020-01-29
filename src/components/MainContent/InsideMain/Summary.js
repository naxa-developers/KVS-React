import React from 'react'

function Summary() {
    return (
        <section className="summary pdt-80 pdb-110">
            <div className="container">
                <div className="text-wrap">
                    <span className="section-heading">Data summary</span>
                    <h3 className="heading3">Our <span>highlights </span>of data.</h3>
                </div>
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
    )
}

export default Summary
