import React, { Component } from 'react'
import UserNav from '../UserNav'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import AddUser from './AddUser'

class UserManagement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: `${localStorage.getItem('myValueInLocalStorage')}`,
            displayAdd: true,
            user: `${localStorage.getItem('gro')}`
        }
        this.toggleAdd = this.toggleAdd.bind(this)
    }


    fetchData = () => {
        Axios.get('http://139.59.67.104:8019/api/v1/user_list',
            {
                headers: {
                    'Content-type': 'multipart/form-data',
                    Authorization: `Token ${this.state.token}`
                }
            })
            .then(response => {
                this.setState({
                    userData: response.data.data
                })
            })
    }

    componentDidMount() {
        this.fetchData()
        if (this.state.user === 'Ward User') {
            document.getElementById('UserAddTab').style.display = "none"
        }
    }

    toggleAdd = () => {
        // debugger
        this.setState({
            displayAdd: !this.state.displayAdd
        }, () => console.log('this is called'))
    }

    componentWillUpdate() {
        this.fetchData()
    }

    render() {
        return (
            <>
                {this.state.displayAdd ?
                    <body class="">
                        <div class="kvs-wrapper">
                            <header class="main-header user-management-header">
                                <nav class="navbar">
                                    <div class="nav-left">
                                        <a>
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
                                <div class="container container-mod">
                                    <span class="content-heading"><Link to='/home'><i class="material-icons">keyboard_backspace</i></Link>User management</span>
                                    <div class="section-nav">
                                        <div class="input-group search">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="material-icons">search</i>
                                                </span>
                                            </div>
                                            <input type="text" name="query" id="search-input" class="form-control" placeholder="Search by name..." />
                                        </div>
                                        <div class="add-user-group" id="UserAddTab">
                                            <span><a onClick={() => this.toggleAdd()}>Add user</a></span>
                                        </div>
                                    </div>
                                    <section class="table-section">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Level</th>
                                                    <th>Place</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.userData && this.state.userData.map((data, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th>{data.name}</th>
                                                            <td>{data.email}</td>
                                                            <td>{data.group === null ? '-' : data.group}</td>
                                                            <td>{data.place === null ? '-' : data.place}</td>
                                                            <td></td>
                                                            <td>
                                                                <span><i></i></span>
                                                                <span><i></i></span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </body>
                    :
                    <AddUser toggleAdd={() => this.toggleAdd()} data={this.state.userData} />
                }
            </>
        )
    }
}

export default UserManagement
