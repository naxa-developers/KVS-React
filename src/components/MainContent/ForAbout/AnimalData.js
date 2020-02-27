import React from 'react'

function AnimalData(props) {
    const value = props.value
    const data = props.animalData
    return (
        <div className="user-info-body">
            <ul>
                {data.length > 0 ?
                    data.map((data, i) => {
                        return (
                            <>
                                <li className="user-span14" >
                                    <span >{i + 1}</span>
                                </li>
                                <li className="user-span14">
                                    <span>Animal Type</span>
                                    <span>{data.animal_type}</span>
                                </li>
                                <li className="user-span14">
                                    <span>Animal Number</span>
                                    <span>{Math.trunc(data.animal_number)}</span>
                                </li>
                                <li className="user-span14">
                                    <span>Is it for Commercial Purpose</span>
                                    <span>{data.is_it_for_commercial_purpose}</span>
                                </li>
                            </>
                        )
                    })
                    :
                    <li className="user-span14">
                        <span>No data is available</span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default AnimalData
