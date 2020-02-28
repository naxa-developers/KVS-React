import React from 'react'

function AnimalData(props) {
    const value = props.value
    const data = props.animalData
    return (
        <div className="user-info-body">

            <ul className="data-mod">
                {data.length > 0 ?
                    data.map((data, i) => {
                        return (
                            <>
                                <li className="user-span14" >
                                    <span >{i + 1}</span>
                                </li>
                                <li className="user-span14">
                                    <span>Animal Type</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.animal_type} onChange={(e) => this.props.changeHandler(e.target)} />
                                    </span>
                                </li>

                                <li className="user-span14">
                                    <span>Animal Number</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={Math.trunc(data.animal_number)} onChange={(e) => this.props.changeHandler(e.target)} />
                                    </span>
                                </li>
                                <li className="user-span14">
                                    <span>Is it for Commercial Purpose</span>
                                    <span>
                                        <input type="text" className="form-control" id="exampleInputText" defaultValue={data.is_it_for_commercial_purpose} onChange={(e) => this.props.changeHandler(e.target)} />
                                    </span>
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
