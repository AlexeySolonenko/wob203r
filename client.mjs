/* START-UP POINT FOR THE CLIENT SITE APPLICATION  */
//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, ReactReduxContext } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
//import Home from './components/Home';
import Routes from './src/routes/Routes.js';
import reducers from './src/reducers/index.js';

import AppTest from './src/AppTest.js';


const axiosInstance = axios.create({
    baseURL: '/api'
});
const testContext = {};
const store = createStore(reducers, window.INITIAL_STORE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
const context = window.INITIAL_CONTEXT;
console.log('store');
console.log(store);
console.log(store.getState());

const StoreTester = (props) => {
    console.log('props from outer test store ',props);
    return (
    <ReactReduxContext.Consumer>
        {(props)=> {
            console.log('props from inner test store , : ',props);
        return (
            <div></div> 
        );}}
    </ReactReduxContext.Consumer>
    );
};

const ConnectedBrowserRouter =  (props) => {
    const AppToRender = props.app;
    return (
        <ReactReduxContext.Consumer>
            {
                (props) => {
                    return <BrowserRouter><AppToRender /></BrowserRouter>;
                }
            }
        </ReactReduxContext.Consumer>
    );
};

class StoreTester2Class extends React.Component {
        
    render(){
        console.log('inside store tester 2',this.props);
        
        return(
            <div>test</div>
        );
    }
}

const ConnectedStoreTester2 = (props) => {
    return (
            <ReactReduxContext.Consumer>
        {
            (props) => { return <StoreTester2Class props={props} /> }
        }
    </ReactReduxContext.Consumer>);
}


import Header from './src/components/Header.js';
import HomePage from './src/pages/HomePage.js';
import ContactPage from './src/pages/ContactPage.js';
import { Route } from 'react-router-dom';

class AppTestClass2 extends React.Component {

    render() {
        console.log('rendering apptest');
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

const AppTest2 = (props) => {
    return (
            <ReactReduxContext.Consumer>
        {
            (props) => { return <AppTestClass2 props={props} /> }
        }
    </ReactReduxContext.Consumer>);
}


// ReactDOM.hydrate(<Provider store={store} >
//     {/* <ConnectedBrowserRouter app={AppTest} /> */}
//         <BrowserRouter >
//         <AppTest />
//         <AppTest2 />
//         {/* <ConnectedStoreTester2 /> */}
//         {/* <StoreTester /> */}
//             {/* {renderRoutes(Routes)} */}
//             {/* <div>{renderRoutes(Routes)}</div> */}
           
//         </BrowserRouter>
//     </Provider>, document.querySelector('#root'));
// console.log(1);
import ClientRenderer from './src/universal/ClientRenderer.js';
ReactDOM.hydrate(<ClientRenderer />, document.querySelector('#root'));
console.log(1);

