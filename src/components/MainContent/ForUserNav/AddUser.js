import React, { Component } from 'react'
import UserNav from '../UserNav'
import Axios from 'axios'
import Select from 'react-select'

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: `${localStorage.getItem('myValueInLocalStorage')}`,
            displayWard: true,
            displayDistrict: true,
            displayMunicipality: true
        }
    }

    fetchDropDown = () => {
        Axios({
            method: 'get',
            url: 'http://139.59.67.104:8019/api/v1/user_dropdown',
            headers: {
                Authorization: `Token ${this.state.token}`
            }
        })
            .then(response => {
                console.log('response brother', response.data)
                this.setState({
                    dropdownData: response.data
                })
                console.log('response', response.data.level)
                let array = [];
                Object.values(response.data.level).forEach((data, i) => {
                    let obj = {
                        value: i + 1,
                        label: data,
                        name: 'select1'
                    }
                    array.push(obj)
                })
                this.setState({
                    dropdownLevel: array
                }, () => console.log(response))
            })
    }

    componentWillMount() {
        this.fetchDropDown()
    }

    categoryChanged = (e) => {
        const valDrop = [];
        const valDropNext = [];

        if (e.name === 'select1') {
            this.setState({
                level: e.label
            })

            if (e.label === 'District User') {
                this.setState({
                    district: 'district',
                    displayMunicipality: true,
                    displayWard: true,
                    districtVal: '',
                    municipalityVal: '',
                    wardVal: '',
                }, () => console.log(this.state.district))

                console.log('hey this is select 1')

                this.state.dropdownData && this.state.dropdownData.district.map((data, i) => {
                    console.log('hey i am in')
                    let obj = {
                        label: data,
                        value: i + 1,
                        name: 'district'
                    }
                    valDrop.push(obj)
                })
                this.setState({
                    dropdownVal: valDrop
                })
            }

            if (e.label === 'Municipality User') {
                this.setState({
                    municipality: 'municipality',
                    displayWard: true,
                    municipalityVal: '',
                    wardVal: '',
                    displayMunicipality: false
                }, () => console.log(this.state.municipality))

                this.state.dropdownData && this.state.dropdownData.district.map((data, i) => {
                    console.log('hey i am in')
                    let obj = {
                        label: data,
                        value: i + 1,
                        name: 'municipality',
                        displayDistrict: false
                    }
                    valDrop.push(obj)
                })
                this.setState({
                    dropdownVal: valDrop
                })
            }

            if (e.label === 'Ward User') {
                this.setState({
                    district: 'district',
                    municipality: 'municipality',
                    ward: 'ward',
                    wardVal: '',
                    displayMunicipality: false
                }, () => console.log(this.state.ward))

                this.state.dropdownData && this.state.dropdownData.district.map((data, i) => {
                    console.log('hey i am in')
                    let obj = {
                        label: data,
                        value: i + 1,
                        name: 'ward'
                    }
                    valDrop.push(obj)
                })
                this.setState({
                    dropdownVal: valDrop,
                    displayWard: false,
                    displayDistrict: false
                }, () => console.log('response', this.state.dropdownData))
            }
        }
        if (e.name === 'district') {
            console.log('event', e)

            this.setState({
                districtVal: e.label
            }, () => console.log('hey this is select 2', this.state.dropdownData))

            this.state.dropdownData && this.state.dropdownData.municipality.map((data, i) => {
                let obj = {
                    label: data,
                    value: i + 1,
                    name: 'select2'
                }
                valDropNext.push(obj)
            })
            this.setState({
                dropdownValNext: valDropNext
            })
        }
    }

    addUser = (data) => {
        console.log(data)
        if (data.id === 'user_name') {
            console.log('hey i am username')
            this.setState({
                userName: data.value
            })
        }
        if (data.id === 'email') {
            console.log('hey i am email')
            this.setState({
                email: data.value
            })
        }
        if (data.id === 'activated') {
            console.log('hey i am status on')
            this.setState({
                deActivated: data.name
            })
        }
        if (data.id === 'de-activated') {
            console.log('hey i am status off')
            this.setState({
                deActivated: data.name
            })
        }
        if (data.id === 'ward') {
            console.log('hey i am ward number')
            this.setState({
                wardVal: data.value
            })
        }
    }

    submitHandler = () => {
        console.log('hey i submitted', this.state.level)
        let bodyFormData = new FormData();

        if (this.state.userName && this.state.email && this.state.level) {
            this.state.userName && bodyFormData.append('user_name', this.state.userName)
            bodyFormData.append('email', this.state.email)
            this.state.level && bodyFormData.append('group', this.state.level)

            //name jun select garxa tesko hisab le id aauna parxa

            this.state.district && this.state.districtVal && bodyFormData.append(this.state.district, this.state.districtVal)
            this.state.municipality && this.state.municipalityVal && bodyFormData.append(this.state.municipality, this.state.municipalityVal)
            this.state.ward && this.state.wardVal && bodyFormData.append(this.state.ward, this.state.wardVal)
            bodyFormData.append('deactive', this.state.deActivated)

            for (var p of bodyFormData) {
                console.log(p[0], p[1]);
            }

            Axios({
                url: 'http://139.59.67.104:8019/api/v1/register',
                method: 'post',
                data: bodyFormData,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${this.state.token}`
                }
            })
                .then(response => {
                    console.log(response)
                }, () => this.props.toggleAdd)
        }
        else {
            alert('enter the data in the field')
        }

    }

    render() {
        return (
            <body class="">
                <div class="kvs-wrapper">
                    <header class="main-header user-management-header">
                        <nav class="navbar">
                            <div class="nav-left">
                                <a href="index.html">
                                    <h1 class="logo-heading"><span>K</span>VS</h1>
                                </a>
                            </div>
                            <div class="navbar-right">
                                {/* <!-- User Account --> */}
                                <UserNav />
                            </div>
                        </nav>
                    </header>
                    <div class="content-wrapper">
                        <div class="container-fluid">
                            <section class="section-wrap-center">
                                <span class="content-heading"><a onClick={this.props.toggleAdd}> <i class="material-icons">keyboard_backspace</i></a>Add user</span>
                                <div class="form-wrapper">
                                    <div class="filter">
                                        <form class="user-form-add">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <span class="user-span16">Full Name</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control input-text" id="user_name" placeholder="Full Name" onChange={(e) => this.addUser(e.target)} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="user-span16">Email</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control input-text" id="email" placeholder="Email" onChange={(e) => this.addUser(e.target)} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="user-span16">Level</span>
                                                    <div class="form-group">
                                                        {/* <div class="kvs-select">
                                                            <div class="select-wrapper select-wrapper-mod select-toggle">
                                                                <span class="select-item select-item-mod">Select</span> */}

                                                        <Select
                                                            options={this.state.dropdownLevel}

                                                            rightAligned={false}
                                                            placeholder='Select'
                                                            // onClick = {() => this.categoryClicked()}
                                                            onChange={(e) => { this.categoryChanged(e) }}
                                                        />
                                                        {/*<ul>
                                                                    <li key={i}>
                                                                        <div class="custom-control custom-radio inline-flex radio-opt">
                                                                            <input type="radio" class="custom-control-input" id={`${data}${i}`} name='dropdownLevel' onChange={(e) => this.addUser(e.target)} />
                                                                            <label class="custom-control-label" htmlFor={`${data}${i}`} >{data}
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input" id="bachelor_id" />
                                                                            <label class="custom-control-label" for="bachelor_id"> Bachelor
                                                                </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input" id="college_id" />
                                                                            <label class="custom-control-label" for="college_id">College</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input" id="school_id" />
                                                                            <label class="custom-control-label" for="school_id">School
                                                                </label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="user-span16">Place</span>
                                                    <div class="form-group">
                                                        <Select
                                                            options={this.state.dropdownVal}

                                                            rightAligned={false}
                                                            placeholder='Select'
                                                            // onClick = {() => this.categoryClicked()}
                                                            onChange={(e) => { this.categoryChanged(e) }}
                                                        />
                                                        {/* <div class="kvs-select">
                                                            <div class="select-wrapper select-wrapper-mod">
                                                                <span class="select-item select-item-mod">Select</span>
                                                                <ul>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input" id="one" />
                                                                            <label class="custom-control-label" for="one">Lalitpur
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li class="active">
                                                                        <div class="custom-control custom-checkbox checkbox-opt">
                                                                            <input type="checkbox" class="custom-control-input" id="two" />
                                                                            <label class="custom-control-label" for="two">Bhaktapur
                                                                </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox checkbox-opt">
                                                                            <input type="checkbox" class="custom-control-input" id="three" />
                                                                            <label class="custom-control-label" for="three">Kathmandu
                                                                </label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>

                                                <div class="col-md-12" style={{ display: this.state.displayMunicipality ? 'none' : 'block' }}>
                                                    <span class="user-span16">M Place</span>
                                                    <div class="form-group">
                                                        <Select
                                                            options={this.state.dropdownValNext}

                                                            rightAligned={false}
                                                            placeholder='Select'
                                                            // onClick = {() => this.categoryClicked()}
                                                            onChange={(e) => { this.categoryChanged(e) }}
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-md-12" style={{ display: this.state.displayWard ? 'none' : 'block' }}>
                                                    <span class="user-span16">Ward Number</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control input-text" id="ward" placeholder="ward" onChange={(e) => this.addUser(e.target)} />
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <span class="user-span16">Status</span>
                                                    <div class="form-group">
                                                        <div class="custom-control custom-radio inline-flex radio-opt">
                                                            <input type="radio" class="custom-control-input" id="activated" name='yes' value="False" onChange={(e) => this.addUser(e.target)} />
                                                            <label class="custom-control-label" htmlFor="activated">Activated</label>
                                                        </div>
                                                        <div class="custom-control custom-radio inline-flex radio-opt">
                                                            <input type="radio" class="custom-control-input" id="de-activated" name='yes' value="True" onChange={(e) => this.addUser(e.target)} />
                                                            <label class="custom-control-label" htmlFor="de-activated">Deactivated</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="buttons btn-mod">
                                            <button role="button" class="common-button-bg" onClick={() => this.submitHandler()}>
                                                Save
                                            </button>
                                            <button role="button" class="common-button-plain" onClick={this.props.toggleAdd}>
                                                cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default AddUser
