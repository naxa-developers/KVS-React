import React from 'react'

function IndividualData(props) {
    const value = props.value
    const data = props.personalData
    return (
        <div className="user-info-body">
            {data.length !== '' &&
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
                                    <span>{data.name}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Age</span>
                                    <span>{data.age_group}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Gender</span>
                                    <span>{data.gender}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Citizenship No.</span>
                                    <span>{data.citizenship_number === 'nan'
                                        ? '-'
                                        : data.citizenship_number}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Education Level</span>
                                    <span>{data.education_level === 'nan'
                                        ? '-'
                                        : data.education_level}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Occupation</span>
                                    <span>{data.occupation === 'Others'
                                        ? '-'
                                        : data.occupation}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Workinf Status</span>
                                    <span>{data.working_status === 'nan'
                                        ? '-'
                                        : data.working_status}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Monthly Income</span>
                                    <span>{data.monthly_income === 'nan'
                                        ? '-'
                                        : Math.trunc(data.monthly_income)}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Falling under Social Security Criteria</span>
                                    <span>{data.falling_under_social_security_criteria === 'nan'
                                        ? '-'
                                        : data.falling_under_social_security_criteria}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Social Security Received</span>
                                    <span>{data.social_security_received === 'nan'
                                        ? '-'
                                        : data.social_security_received}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Reason for not receiving Social Security</span>
                                    <span>{data.reasons_for_not_received_social_security === 'nan'
                                        ? '-'
                                        : data.reasons_for_not_received_social_security}</span>
                                </li>
                            </ul>

                            <ul>
                                <li className="user-span14">
                                    <span>Status of Family Member</span>
                                    <span>{data.status_of_family_member === ' None of these'
                                        ? '-'
                                        : data.status_of_family_member}</span>
                                </li>
                            </ul>
                        </div>)
                })

            }
            {
                data.length === '' &&
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
