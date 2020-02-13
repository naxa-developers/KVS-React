import React from 'react'

function IndividualData(props) {
    const value = props.value
    const data = props.personalData

    return (
        <div className="user-info-body">
            {data.length !== 0 ?
                data.map((data, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li className="user-span14" >
                                    <span >{i + 1}</span>
                                </li>
                            </ul>
                            <ul>
                                <li className="user-span14">
                                    <span>Name</span>
                                    <span>
                                        <input type="text" name='name' defaultValue={data.name} onChange={(e) => this.props.changeHandler(e.target)} />
                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Age</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.age_group} onChange={(e) => this.props.changeHandler(e.target)} />
                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Gender</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.gender} onChange={(e) => this.props.changeHandler(e.target)} />
                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Citizenship No.</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.citizenship_number === 'nan' ? '-' : data.citizenship_number} onChange={(e) => this.props.changeHandler(e.target)} />
                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Education Level</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.education_level === 'nan' ? '-' : data.education_level} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Occupation</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.occupation === 'Others' ? '-' : data.occupation} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Workinf Status</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.working_status === 'nan' ? '-' : data.working_status} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Monthly Income</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.monthly_income === 'nan' ? '-' : Math.trunc(data.monthly_income)} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Falling under Social Security Criteria</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.falling_under_social_security_criteria === 'nan' ? '-' : data.falling_under_social_security_criteria} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Social Security Received</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.social_security_received === 'nan' ? '-' : data.social_security_received} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Reason for not receiving Social Security</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.reasons_for_not_received_social_security === 'nan' ? '-' : data.reasons_for_not_received_social_security} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Status of Family Member</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.status_of_family_member === ' None of these' ? '-' : data.status_of_family_member} onChange={(e) => this.props.changeHandler(e.target)} />

                                    </span>
                                </li>
                            </ul>
                        </div>)
                })
                :
                <ul>
                    <li className="user-span14">
                        <span>No data is available</span>
                    </li>
                </ul>
            }
        </div>
    )
}

export default IndividualData
