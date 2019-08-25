import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TopStaticMainNav from './TopStaticMainNav.js';
import MainNav from './MainNav.js';

const Header = (props) => {
    const auth = props.auth;
    //console.log('Auth object is: ', auth);
    //console.log('Header props', props);
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
            <a href="/api/auth/google">Login</a>
        );
    //console.log('updated header props', props);
    return (
        <React.Fragment>
             <MainNav />
            {/* <nav >
               
                <TopStaticMainNav />
                
            </nav> */}
        </React.Fragment>
    );
}



function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
