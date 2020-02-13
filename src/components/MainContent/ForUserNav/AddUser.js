import React, { Component } from 'react'
import UserNav from '../UserNav'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: `${localStorage.getItem('myValueInLocalStorage')}`,
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
                console.log('response', response)
            })
    }

    componentWillMount() {
        this.fetchDropDown()
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
                status: true
            })
        }
        if (data.id === 'de-activated') {
            console.log('hey i am status off')
            this.setState({
                status: false
            })
        }
    }

    submitHandler = () => {
        console.log('hey i submitted')
        let bodyFormData = new FormData();

        bodyFormData.append('first_name', 'Subash')
        bodyFormData.append('last_name', 'Tiwari')
        bodyFormData.append('user_name', this.state.userName)
        bodyFormData.append('email', this.state.email)
        bodyFormData.append('group', `Ward User`)
        //name jun select garxa tesko hisab le id aauna parxa
        // bodyFormData.append('ward', `Saptakoshiward2`)

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
            })
    }

    render() {
        console.log(JSON.stringify(this.state.userName))
        console.log(JSON.stringify(this.state.email))
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
                                <span class="content-heading"><Link to='usermanagement'><i class="material-icons">keyboard_backspace</i></Link>Add user</span>
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
                                                        <div class="kvs-select">
                                                            <div class="select-wrapper select-wrapper-mod">
                                                                <span class="select-item select-item-mod">Select</span>
                                                                <ul>
                                                                    <li>
                                                                        <div class="custom-control custom-checkbox">
                                                                            <input type="checkbox" class="custom-control-input" id="master_id" />
                                                                            <label class="custom-control-label" for="master_id">Masters
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <span class="user-span16">Place</span>
                                                    <div class="form-group">
                                                        <div class="kvs-select">
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
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <span class="user-span16">Status</span>
                                                    <div class="form-group">
                                                        <div class="custom-control custom-radio inline-flex radio-opt">
                                                            <input type="radio" class="custom-control-input" id="activated" name="yes" onChange={(e) => this.addUser(e.target)} />
                                                            <label class="custom-control-label" for="activated">Activated</label>
                                                        </div>
                                                        <div class="custom-control custom-radio inline-flex radio-opt">
                                                            <input type="radio" class="custom-control-input" id="de-activated" name="yes" onChange={(e) => this.addUser(e.target)} />
                                                            <label class="custom-control-label" for="de-activated">Deactivated</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="buttons btn-mod">
                                            <button role="button" class="common-button-bg" onClick={() => this.submitHandler()}>
                                                Save
                                            </button>
                                            <button role="button" class="common-button-plain">
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
