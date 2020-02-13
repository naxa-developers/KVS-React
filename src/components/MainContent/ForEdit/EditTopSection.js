import React from 'react';
import home from '../../../img/homeImage.png';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Select from 'react-select'

class EditPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            ageGroup: '',
            gender: '',
            citizenshipNo: '',
            wardNo: '',
            phoneNo: '',
            familySize: '',
            socialSecurity: null,
        }
    }

    categoryChanged = (e) => {
        console.log(e.label)
        // this.setState({selectedVal : e})
    }

    render() {

        console.log("on edit page", this.props.detailsToEdit);
        const details = this.props.detailsToEdit
        const optionsAge = [
            { label: 'under 18', value: 1, name: 'ageGroup' },
            { label: '19 - 29', value: 2, name: 'ageGroup' },
            { label: '30 - 39', value: 3, name: 'ageGroup' },
            { label: '40 - 49', value: 4, name: 'ageGroup' },
            { label: '50 - 59', value: 5, name: 'ageGroup' },
            { label: 'Above 60', value: 6, name: 'ageGroup' },
        ]

        const optionGen = [
            { label: 'Male', value: 1, name: 'gender' },
            { label: 'Female', value: 2, name: 'gender' },
            { label: 'Other', value: 3, name: 'gender' },
        ]

        return (

            <aside className='sidebar auto-h'
                style={{
                    position: 'sticky',
                    top: '0px',
                    height: '100vh'
                }}
            >

                <div className="card">
                    <div className='card-header'>
                        <a href='index.html'>
                            <h1 className="logo-heading logo-white">
                                <span>Saptakoshi </span>Muncipality
                            </h1>
                        </a>
                       {/*  <h4 style={{ color: 'white' }}>
                            <span style={{ color: '#F7D315' }}>Saptakoshi </span>
                            Municipality
                            {localStorage.getItem('name') === 'saptakoshiward3' ?
                                <span style={{ color: '#F7D315' }} > Ward 3</span>
                                :
                                ''
                            }
                        </h4> */}
                    </div>
                    <div className="card-body">
                        <a href=""><span className="previous-icon"></span></a>
                        <div className="user-profile user-profile-edit">
                            {/* <!-- top --> */}
                            <div className="user-profile-top">
                                <figure>
                                    <img src={home} alt="" />
                                </figure>
                                <div className="text-wrap">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputText" placeholder={details[0]} name='ownerName' onChange={(e) => this.props.changeHandler(e.target)} />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputAddress" placeholder={details[8]} name='address' onChange={(e) => this.props.changeHandler(e.target)} />
                                        </div>
                                    </form>
                                    <span className="user-span16">{details[9]}</span>
                                </div>
                            </div>

                            {/* <!-- bottom --> */}
                            <div className="user-profile-bottom">
                                <div className="filter">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <span className="user-span16">Age group</span>
                                                <div className="form-group">
                                                    {/* <div className="kvs-select">
                                                        <div className="select-wrapper select-toggle">
                                                            <span className="select-item">{`${this.state.ageValue === ''}` ? 'Please Select Age Group' : `${this.state.ageValue}`}</span>
                                                            <ul>
                                                                <li>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input"
                                                                            id="above" name="above" />
                                                                        <label className="custom-control-label" for="above">Above 60
                                                                            </label>
                                                                    </div>
                                                                </li>
                                                                <li className="active">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input"
                                                                            id="tf" name="tf" />
                                                                        <label className="custom-control-label" for="tf">45 - 59
                                                                            </label>
                                                                    </div>
                                                                </li>
                                                                <li className="active">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input"
                                                                            id="tf" name="tf" />
                                                                        <label className="custom-control-label" for="tf">30 - 44
                                                                            </label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input"
                                                                            id="et" name="et" />
                                                                        <label className="custom-control-label" for="et">19 -
                                                                                29</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input"
                                                                            id="under" name="under" />
                                                                        <label className="custom-control-label" for="under">Under 18
                                                                            </label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div> */}
                                                    <Select
                                                        options={optionsAge}
                                                        rightAligned={false}
                                                        placeholder={details[1]}
                                                        onChange={(e) => this.props.changeHandler(e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="user-span16">Gender</span>
                                                <div className="form-group">
                                                    {/* <div className="kvs-select">
                                                        <div className="select-wrapper">
                                                            <span className="select-item">Male</span>
                                                            <ul>
                                                                <li>
                                                                    <div className="custom-control custom-radio radio-mod inline-flex">
                                                                        <input type="radio" className="custom-control-input" id="opt_male" name="opt_male" />
                                                                        <label className="custom-control-label" htmlFor="opt_male">Male</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="custom-control custom-radio radio-mod nline-flex">
                                                                        <input type="radio" className="custom-control-input" id="opt_female" name="opt_female" />
                                                                        <label className="custom-control-label" htmlFor="opt_female">Female</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div> */}
                                                    <Select
                                                        options={optionGen}
                                                        rightAligned={false}
                                                        placeholder={details[2]}
                                                        onChange={(e) => this.props.changeHandler(e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="user-span16">Citizenship No.</span>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="citizenshipId" name='citizenShip' placeholder={details[3]} onChange={(e) => this.props.changeHandler(e.target)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="user-span16">Phone</span>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="PhoneId" name='phoneNumber' placeholder={details[4]} onChange={(e) => this.props.changeHandler(e.target)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="user-span16">Ward No.</span>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="WardId" name="wardNumber" placeholder={details[5]} onChange={(e) => this.props.changeHandler(e.target)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="user-span16">Family Size</span>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="Familysize_Id" name='familySize' placeholder={details[7]} onChange={(e) => this.props.changeHandler(e.target)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="user-span16">Social Security</span>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio inline-flex">
                                                        <input type="radio" className="custom-control-input" id="yes"
                                                            name="yes" onChange={(e) => this.props.changeHandler(e.target)} />
                                                        <label className="custom-control-label" htmlFor="yes" >Yes</label>
                                                    </div>
                                                    <div className="custom-control custom-radio inline-flex">
                                                        <input type="radio" className="custom-control-input" id="no"
                                                            name="yes" onChange={(e) => this.props.changeHandler(e.target)} />
                                                        <label className="custom-control-label" htmlFor="no">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="buttons btn-mod">
                                <button role="button" className="common-button-bg" onClick={() => this.props.submitHandler()}>
                                    Save
                                    </button>
                                <button role="button" className="common-button-plain" onClick={() => this.props.displayEdit()} >
                                    cancel
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );

    }

}

export default EditPage;
