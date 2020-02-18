import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';

class NavBarHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             navOpen: false
        }
    }
    
    render() {
    return (
       
        <header className='home-header' style={{ zIndex: '20' }}>
            <div className='nav-wrap'>
                <div className='nav-left'>
                    <h1 className='logo-heading' >
                        <span>DCA</span>
            </h1>
                </div>
                <div className='nav-right'>
              
                    <ul className='link-title' id='nav-dropdown' style={{display: `${this.state.navOpen == true ? 'block' : ''}` }} > 
                     
                      <li onClick={this.props.intro}>Introduction</li>
                        <li onClick={this.props.summary}>Summary</li>
                        <li onClick={this.props.feature}>Features</li>
                        <Link to='/login'>
                            <li>Sign in</li>
                        </Link>
                    
                    </ul>
               
                    <div className={this.state.navOpen==true ? 'toggle-button active': 'toggle-button'} onClick={() => this.setState({navOpen: !this.state.navOpen})}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

        </header>
    );
}
}
export default NavBarHome;
