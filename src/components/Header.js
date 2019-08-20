import React from 'react';
import { Link } from 'react-router-dom';
import { connect, ReactReduxContext } from 'react-redux';


// const Header = (props) => {

//     const auth = props.auth;
//     console.log('Auth object is: ', auth);
//     console.log('Header props', props);
//     const authButton = auth ? (
//         <a href="/api/logout">Logout</a>
//     ) : (
//             <a href="/api/auth/google">Login</a>
//         );

//     return (
//         <ReactReduxContext.Consumer>
//             {(props) => {
//                 console.log('attempt access header store', props);

//                 return (<nav>
//                     <div >
//                         {/* <ul className="right" className={store}> */}
//                         <ul className="right" >
//                             <li><Link to="/" >Studysnami</Link></li>
//                             <li><Link to="/courses" >Courses</Link></li>
//                             <li><Link to="/testimonials" >Our students</Link></li>
//                             <li><Link to="/contact" >Contact</Link></li>
//                             <li><Link to="/details" >All in details</Link></li>
//                             <li>{authButton}</li>
//                             {/* TODO to add extra menu - myDesk? */}
//                         </ul>
//                     </div>
//                 </nav>
//                 )
//             }}
//         </ReactReduxContext.Consumer>
//     );
// }

const Header = (props) => {
    const auth = props.auth;
    console.log('Auth object is: ', auth);
    console.log('Header props', props);
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
            <a href="/api/auth/google">Login</a>
        );
    console.log('updated header props', props);
    return (<nav>
        <div >
            {/* <ul className="right" className={store}> */}
            <ul className="right" >
                <li><Link to="/" >Studysnami</Link></li>
                <li><Link to="/courses" >Courses</Link></li>
                <li><Link to="/testimonials" >Our students</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/details" >All in details</Link></li>
                <li>{authButton}</li>
                {/* TODO to add extra menu - myDesk? */}
            </ul>
        </div>
    </nav>);
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
