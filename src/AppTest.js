import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import CoursesPage from './pages/CoursesPage.js';
import DetailsPage from './pages/DetailsPage.js';
import TestimonialsPage from './pages/TestimonialsPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import Header from './components/Header.js';

import { ReactReduxContext } from 'react-redux';
import { connect } from 'react-redux';

// const StoreTester = (props) => {
//     console.log('props from outer test store ',props);
//     return (
//     <ReactReduxContext.Consumer>
//         {(props)=> {
//             console.log('props from inner test store , : ',props);
//         return (
//             <div></div> 
//         );}}
//     </ReactReduxContext.Consumer>
//     );
// };

const StoreTester = (props) => {
    console.log('props from  test store external ', props);
    return (
        <div></div>
    );
};

const mapStateToProps = (state) => state;
const StoreTesterComp = connect(mapStateToProps)(StoreTester);

// const AppTestComp = (props) => {
//     console.log('rendering apptest');
//     console.log('props',props);
//     //console.log(arguments);
//     const clickHandler = () => {console.log('click')};



//     return (
//         //  <React.Fragment>
//         <div>
//             <StoreTesterComp />
//             <Header ></Header>
//             <Route component={HomePage.component} path='/' exact />
//             <Route component={ContactPage.component} path='/contact' exact />
//             <button id='testBtn' onClick={clickHandler}>TEST</button>
//         </div>
//         // {/* </React.Fragment> */}
//     );
// }

class AppTestClass extends React.Component {

    render() {
        console.log('rendering apptest external');
        console.log('props', this.props);
        //console.log(arguments);
        const clickHandler = () => { console.log('click') };



        return (
            //  <React.Fragment>
            <div>
                {/* <StoreTesterComp /> */}
                <Header ></Header>
                <Route component={HomePage.component} path='/' exact />
                <Route component={ContactPage.component} path='/contact' exact />
                <button id='testBtn' onClick={clickHandler}>TEST</button>
            </div>
            // {/* </React.Fragment> */}
        );
    }
}

// const AppTest = connect(mapStateToProps)(AppTestComp);
//const AppTest = connect(mapStateToProps)(AppTestClass);

const AppTest = (props) => {
    console.log('props from outer of app test',props);
    return (
            <ReactReduxContext.Consumer>
        {
            (props) => { 
                console.log('props from inner of app test',props);
                return (<AppTestClass props={props} />); }
        }
    </ReactReduxContext.Consumer>);
}

export default AppTest;
