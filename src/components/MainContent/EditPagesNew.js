import React, { Component } from 'react'
import UserNav from './UserNav';
import EditTopSection from './ForEdit/EditTopSection';
import EditHouseholdData from './ForEdit/EditHouseholdData';
import EditIndividualData from './ForEdit/EditIndividualData';
import EditAnimalData from './ForEdit/EditAnimalData'

export class EditPagesNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            i: 0
        }
    }

    render() {
        return (
            <>
                <body className="">
                    <div className="kvs-wrapper">
                        <div className="container-fluid main-wrapper p-0">
                            <div className="flex-wrapper">
                                <EditTopSection
                                    value={this.props.value}
                                    detailsToEdit={this.props.detailsToEdit}
                                    changeHandler={this.props.changeHandler}
                                    name={this.props.detailsToEdit[0]}
                                    contact={this.props.detailsToEdit[4]}
                                    submitHandler={this.props.submitHandler}
                                    displayEdit={this.props.displayEdit}
                                />
                                <div className="main-content">
                                    <header className="main-header">
                                        <nav className="navbar">
                                            <div className="input-group search">

                                            </div>
                                            <div className="navbar-right">
                                                <UserNav />
                                            </div>
                                        </nav>
                                    </header>
                                    <main>
                                        <div className="user-info">
                                            <div className="user-info-header">
                                                <ul>
                                                    <li className={`${this.state.i === 0 ? 'user-span18 current' : 'user-span18'}`} onClick={() => this.setState({ i: 0 })}>Household data</li>
                                                    <li className={`${this.state.i === 1 ? 'user-span18 current' : 'user-span18'}`} onClick={() => this.setState({ i: 1 })}>Individual data</li>
                                                    <li className={`${this.state.i === 2 ? 'user-span18 current' : 'user-span18'}`} onClick={() => this.setState({ i: 2 })}>Animal data</li>
                                                </ul>
                                            </div>
                                            <div style={this.state.i === 0 ? { display: 'block' } : { display: 'none' }}>
                                                <EditHouseholdData value={this.props.value} />
                                            </div>
                                            <div style={this.state.i === 1 ? { display: 'block' } : { display: 'none' }}>
                                                <EditIndividualData value={this.props.value} personalData={this.props.personalData} />
                                            </div>
                                            <div style={this.state.i === 2 ? { display: 'block' } : { display: 'none' }}>
                                                <EditAnimalData value={this.props.value} animalData={this.props.animalData} />
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </>
        );
    }
}

export default EditPagesNew
