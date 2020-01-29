import React, { Component } from 'react'
import Introduction from './InsideMain/Introduction'
import SystemFeatures from './InsideMain/SystemFeatures'
import Summary from './InsideMain/Summary'
import Footer from './InsideMain/Footer'
import FirstSection from './InsideMain/FirstSection'
import NavBarHome from './InsideMain/NavBarHome'

class Home extends Component {
    render() {
        return (
            <body className="">
                <div className="kvs-wrapper">
                    <NavBarHome />
                    <FirstSection />
                    <Introduction />
                    <Summary />
                    <SystemFeatures />
                    <Footer />
                </div>
            </body>
        )
    }
}

export default Home
