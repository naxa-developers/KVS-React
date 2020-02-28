import React, { Component } from 'react'
import UserNav from '../UserNav'
import Axios from 'axios'
import Select from 'react-select'

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: `${localStorage.getItem('myValueInLocalStorage')}`,
            user: `${localStorage.getItem('gro')}`,
            displayWard1: true,
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

    valueSelect = () => {
        const valDrop = [];

        if (this.state.user === 'Province User') {
            this.state.dropdownData && this.state.dropdownData.district.map((data, i) => {
                let obj = {
                    label: data,
                    value: i + 1,
                    name: 'select2'
                }
                valDrop.push(obj)
            })
            this.setState({
                district: 'district',
                dropdownVal: valDrop
            })
        }

        if (this.state.user === 'District User') {
            this.state.dropdownData && this.state.dropdownData.municipality.map((data, i) => {
                let objData = Object.keys(data)

                let obj = {
                    label: objData[0],
                    value: i + 1,
                    name: 'select2'
                }
                valDrop.push(obj)
            })
            this.setState({
                municipality: 'municipality',
                dropdownVal: valDrop,
            })
        }
    }

    categoryChanged = (e) => {

        if (e.name === 'select1') {
            this.setState({
                level: e.label
            })
        }
        if (this.state.user === 'Province User') {
            console.log('province user')

            if (e.label === 'District User') {
                console.log('district user')
                this.valueSelect()
                this.setState({
                    munVal: '',
                    wardVal: '',
                    displayWard: true,
                    displayMunicipality: true
                })
            }

            if (e.label === "Municipality User") {
                console.log('municipality user')
                this.valueSelect()
                this.setState({
                    municipality: 'municipality',
                    displayWard: true,
                    municipalityVal: '',
                    wardVal: '',
                    displayMunicipality: false
                })
            }

            if (e.label === "Ward User") {
                console.log('ward user')
                this.valueSelect()
            }

            if (e.name === 'select2') {
                console.log('sel 2')
                console.log(e.label)
                this.setState({
                    distVal: e.label
                })
                Axios({
                    url: `http://139.59.67.104:8019/api/v1/municipality?district=${e.label}`,
                    method: 'get',
                    headers: {
                        Authorization: `Token ${this.state.token}`
                    }
                })
                    .then(response => {
                        let munDrop = []
                        // console.log(response.data)
                        response.data.data.map((data, i) => {
                            let objData = Object.keys(data)
                            console.log(objData)
                            let obj = {
                                label: objData[0],
                                value: i + 1,
                                name: 'select3'
                            }
                            munDrop.push(obj)
                        })
                        this.setState({
                            dropdownMunVal: munDrop,
                        }, () => console.log(this.state.dropdownMunVal))

                    })
            }

            if (e.name === 'select3') {
                console.log('sel 3')
                console.log(e.label)
                this.setState({
                    munVal: e.label
                })
            }
        }
        if (this.state.user === 'District User') {
            if (e.label === 'Municipality User') {
                this.valueSelect()
                this.setState({
                    displayWard: true,
                    wardVal: '',
                    ward: ''
                })
            }
            if (e.label === 'Ward User') {
                this.valueSelect()
                this.setState({
                    displayWard: false,
                    ward: 'ward'
                })
            }
            if (e.name === 'select2') {
                console.log('sel 2')
                console.log(e.label)
                this.setState({
                    munVal: e.label
                })
            }
        }
        if (this.state.user === 'Municipality User') {
            if (e.label === 'Ward User') {
                this.setState({
                    municipality: "municipality",
                    munVal: localStorage.getItem('mun'),
                    ward: 'ward',
                    wardVal: ''
                })
            }
        }
        if (this.state.user === 'Ward User') {
            console.log('ward user')
        }
    }

    componentWillMount() {
        this.fetchDropDown()
        if (this.state.user === 'District User') {
            this.setState({

            })
        }
        if (this.state.user === "Municipality User") {
            this.setState({
                displayWard1: false,
                displayWard: false
            })
        }
    }

    addUser = (data) => {
        if (data.id === 'user_name') {
            this.setState({
                userName: data.value
            }, () => console.log(this.state.userName))
        }
        if (data.id === 'authentication') {
            this.setState({
                password: data.value
            }, () => console.log(this.state.password))
        }
        if (data.id === 'email') {
            this.setState({
                email: data.value
            }, () => console.log(this.state.email))
        }
        if (data.id === 'activated') {
            this.setState({
                deActivated: data.name
            }, () => console.log(this.state.deActivated))
        }
        if (data.id === 'de-activated') {
            this.setState({
                deActivated: data.name
            }, () => console.log(this.state.deActivated))
        }
        if (data.id === 'ward') {
            this.setState({
                wardVal: data.value
            }, () => console.log(this.state.wardVal))
        }
    }

    submitHandler = () => {
        console.log('hey i submitted', this.state.level)
        let bodyFormData = new FormData();

        if (this.state.userName && this.state.email && this.state.level) {
            this.state.userName && bodyFormData.append('user_name', this.state.userName)
            bodyFormData.append('email', this.state.email)
            this.state.level && bodyFormData.append('group', this.state.level)
            this.state.password && bodyFormData.append('password', this.state.password)

            //name jun select garxa tesko hisab le id aauna parxa

            this.state.district && this.state.distVal && bodyFormData.append(this.state.district, this.state.distVal)
            this.state.municipality && this.state.munVal && bodyFormData.append(this.state.municipality, this.state.munVal)
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
            }, () => this.props.toggleAdd)
                .then(response => {
                    console.log(response)
                })
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
                                                        <input type="text" class="form-control input-text" id="user_name" placeholder="Username" onChange={(e) => this.addUser(e.target)} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="user-span16">Password</span>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control input-text" id='authentication' placeholder="Password" onChange={(e) => this.addUser(e.target)} />
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
                                                <div class="col-md-12" style={{ display: this.state.displayWard1 ? 'block' : 'none' }}>
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
                                                            options={this.state.dropdownMunVal}
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
