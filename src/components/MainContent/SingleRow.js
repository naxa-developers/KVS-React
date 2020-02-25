import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../Filter/FilterCss.css'
import { confirmAlert } from 'react-confirm-alert';


class SingleRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            modalOpened: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    open = (e, key) => {
        this.setState({ open: !this.state.open })
    }
    openModal = (d) => {
        confirmAlert({

            title: 'Are you sure?',
            message: 'Do you really want to delete these data?',
            buttons: [
                {
                    label: 'Cancel',
                    onClick: () => alert('Cancel')
                },
                {
                    label: 'Delete',
                    onClick: () => alert('Deleting user with id'+d)
                }
            ]

        });
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {

        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                open: false
            });
        }
    }


    render() {
        var h = this.props;
        // console.log("keyy", this.props.social_security);



        return (

            <>
                <tr key={h.keyy}>
                    <Link
                        to={{
                            pathname: "/about",
                            state: {
                                index: h.id
                            }
                        }}
                    >
                        <td>
                            <b>{h.owner_name}</b>
                        </td>
                    </Link>
                    <td className="age-group">{h.owner_age}</td>
                    <td className="gender">{h.owner_sex}</td>
                    <td className="citizen">{h.citizenship_no}</td>
                    <td className="phone">
                        {h.contact_number == ""
                            ? h.contact_number
                            : "01-******"}
                    </td>
                    <td className="ward">{h.ward}</td>
                    <td className="size">NaN</td>
                    <td>
                        <span className="security check">
                            <i className="material-icons" style={{color: `${h.social_security == true ? '#71c016' : '#F32F30'}`}}>{ h.social_security == true ? 'check_circle' : 'cancel' }</i>
                        </span>
                    </td>
                    <td>
                        <span className="more-link">
                            <i className="material-icons" onClick={(e, key) => this.open(e, key)}>more_vert</i>
                            <div ref={this.setWrapperRef}>
                                {this.state.open && <div class="more-list" >
                                    <Link to="">Edit</Link>
                                    <p style={{ color: 'black' }} onClick={() => this.openModal(this.props.keyy)}>
                                        Delete
                                                </p>
                                </div>}
                            </div>
                        </span>
                    </td>
                </tr>


            </>

        )
    }
}
export default SingleRow;



