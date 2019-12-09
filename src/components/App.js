import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/kvs.scss';


import Header from './partials/Header';
import HeaderFilter from './Filter/HeaderFilter';
import Overview from './Overview/Overview';
import Main from './MainContent/Main';



export default class App extends Component {
    render() {
        return (
            <body className="" >
                <div className="kvs-wrapper">
                <div className="container-fluid main-wrapper p-0">
                <aside className="sidebar">
                    <div className="card">
                            <Header />    
                            <div className="card-body">
                                <HeaderFilter />
                                <Overview />
                            </div>  
                    </div>

                    </aside>
                    
                    <Main />
                    </div>
                    

                </div>

               
               
                
            </body>
        )
    }
}
