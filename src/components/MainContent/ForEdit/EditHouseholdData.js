import React from 'react'

function HouseholdData(props) {
    const value = props.value
    const entries = Object.entries(value)
    // console.log(value)
    let houseData = []
    entries.forEach(data => {
        houseData.push({ fields: data[0], value: data[1] })
    })
    return (
        <div className="user-info-body">
            <ul className="data-mod">
                {/* {houseData.map((data, i) => {
                    return (<li className="user-span14" key={i}>
                        <span>{data.fields}</span>
                        <span>
                            <input type="text" name='name' defaultValue={data.value} onChange={(e) => this.props.changeHandler(e.target)} />
                        </span>
                    </li>)
                })} */}

                <li className="user-span14">
                    <span>Ward</span>
                    <span>{value.ward}</span>
                </li>

                <li className="user-span14">
                    <span>House Number</span>
                    <span>
                        {value.household_number === ""
                            ? value.household_number
                            : "-"}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Coordinates Latitude</span>
                    <span>{value.latitude}</span>
                </li>

                <li className="user-span14">
                    <span>Coordinates Longitude</span>
                    <span>{value.longitude}</span>
                </li>

                <li className="user-span14">
                    <span>Coordinates Altitude</span>
                    <span>{value.altitude}</span>
                </li>

                <li className="user-span14">
                    <span>Coordinates Precisioin</span>
                    <span>{value.gps_precision}</span>
                </li>

                <li className="user-span14">
                    <span>Household Number</span>
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
                    <span>Owner's Sex</span>
                    <span>
                        {value.owner_sex === "Male"
                            ? "पुरुष (Male)"
                            : "महिला (Female)"}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Citizenship No.</span>
                    <span>{value.owner_citizenship_no}</span>
                </li>

                <li className="user-span14">
                    <span>Status</span>
                    <span>{value.owner_status}</span>
                </li>

                <li className="user-span14">
                    <span>If other please state here</span>
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
                    <span>Caste Other</span>
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
                    <span>Religion Other</span>
                    <span>
                        {value.religion_other === "nan"
                            ? "-"
                            : value.religion_other}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Mother Tongue</span>
                    <span>{value.mother_tongue}</span>
                </li>

                <li className="user-span14">
                    <span>MT Other</span>
                    <span>{value.mother_tongue_other === "nan"
                        ? '-'
                        : value.mother_tongue_other}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Education</span>
                    <span>{value.owner_education}</span>
                </li>

                <li className="user-span14">
                    <span>Occupation</span>
                    <span>{value.main_occupation}</span>
                </li>

                <li className="user-span14">
                    <span>Other Occupation</span>
                    <span>{value.other_occupation === "nan"
                        ? '-'
                        : value.other_occupation}</span>
                </li>

                <li className="user-span14">
                    <span>Business</span>
                    <span>{value.business === "nan"
                        ? '-'
                        : value.business}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Other Business</span>
                    <span>{value.other_business === "nan"
                        ? '-'
                        : value.other_business}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Other Small Business</span>
                    <span>{value.other_small_business === "nan"
                        ? '-'
                        : value.other_small_business}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Crop Sufficiency</span>
                    <span>{value.crop_sufficiency === "nan"
                        ? '-'
                        : value.crop_sufficiency}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Food Type</span>
                    <span>{value.food_type === "nan"
                        ? '-'
                        : value.food_type}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Monthly Expenses</span>
                    <span>{value.monthly_expenses === "nan"
                        ? '-'
                        : Math.trunc(value.monthly_expenses)}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Monthly Income</span>
                    <span>{value.monthly_income === "nan"
                        ? '-'
                        : Math.trunc(value.monthly_income)}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Loan</span>
                    <span>{value.loan === "nan"
                        ? '-'
                        : value.loan}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Loan Amount</span>
                    <span>{value.loan_amount === "nan"
                        ? '-'
                        : value.loan_amount}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Loan Duration</span>
                    <span>{value.loan_duration === "nan"
                        ? '-'
                        : value.loan_duration}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Animal Presence</span>
                    <span>{value.animal_presence === "nan"
                        ? '-'
                        : value.animal_presence}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Insurance</span>
                    <span>{value.insurance === "nan"
                        ? '-'
                        : value.insurance}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Vehicle</span>
                    <span>{value.vehicle === "nan"
                        ? '-'
                        : value.vehicle}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Facilities Type</span>
                    <span>{value.facilities_type === "nan"
                        ? '-'
                        : value.facilities_type}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Fuel Type</span>
                    <span>{value.fuel_type === "nan"
                        ? '-'
                        : value.fuel_type}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Land Ownership</span>
                    <span>{value.land_ownership === "nan"
                        ? '-'
                        : value.land_ownership}
                    </span>
                </li>

                <li className="user-span14">
                    <span>House Type</span>
                    <span>{value.house_type === "nan"
                        ? '-'
                        : value.house_type}
                    </span>
                </li>

                <li className="user-span14">
                    <span>House Storey</span>
                    <span>{value.house_stories === "nan"
                        ? '-'
                        : value.house_stories}
                    </span>
                </li>

                <li className="user-span14">
                    <span>House Built Year</span>
                    <span>{value.house_built_year === "nan"
                        ? '-'
                        : Math.trunc(value.house_built_year)}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Total Land Area</span>
                    <span>{value.owned_land_area === "nan"
                        ? '-'
                        : value.owned_land_area}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Main road</span>
                    <span>{value.distance_from_main_road === "nan"
                        ? '-'
                        : value.distance_from_main_road}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Nearest School</span>
                    <span>{value.distance_from_nearest_school === "nan"
                        ? '-'
                        : value.distance_from_nearest_school}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Nearest Health Institution</span>
                    <span>{value.distance_from_nearest_health_institution === "nan"
                        ? '-'
                        : value.distance_from_nearest_health_institution}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Nearest Security Forces</span>
                    <span>{value.distance_from_nearest_security_forces === "nan"
                        ? '-'
                        : value.distance_from_nearest_security_forces}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Nearest Open Space</span>
                    <span>{value.distance_to_nearest_open_space === "nan"
                        ? '-'
                        : value.distance_to_nearest_open_space}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Nearest Market</span>
                    <span>{value.distance_to_nearest_market === "nan"
                        ? '-'
                        : value.distance_to_nearest_market}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Alternative Market</span>
                    <span>{value.distance_to_alternative_market === "nan"
                        ? '-'
                        : `${value.distance_to_alternative_market} and alternative market is ${value.alternative_market_name}`}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Distance from Public Tap</span>
                    <span>{value.public_tap_distance === "nan"
                        ? '-'
                        : value.public_tap_distance}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Water Sources</span>
                    <span>{value.water_sources === "nan"
                        ? '-'
                        : value.water_sources}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Tubewell Type</span>
                    <span>{value.tubewell_type === "nan"
                        ? '-'
                        : value.tubewell_type}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Tubewell Status</span>
                    <span>{value.tubewell_status === "nan"
                        ? '-'
                        : value.tubewell_status}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Toilet Facility</span>
                    <span>{value.toilet_facility === "nan"
                        ? '-'
                        : value.toilet_facility}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Toilet Type</span>
                    <span>{value.toilet_type === "nan"
                        ? '-'
                        : value.toilet_type}
                    </span>
                </li>

                <li className="user-span14">
                    <span>Disaster Type</span>
                    <span>{value.disaster_type === "nan"
                        ? '-'
                        : value.disaster_type}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default HouseholdData
