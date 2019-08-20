import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../routes/Routes.js';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import AppTest from '../AppTest.js';
import { ReactReduxContext } from 'react-redux';


import Header from '../components/Header.js';
import HomePage from '../pages/HomePage.js';
import ContactPage from '../pages/ContactPage.js';
import { Route } from 'react-router-dom';

export default (req, store, context) => {

    const StoreTester = (props) => {
        console.log('props from outer test store ',props);
        return (
        <ReactReduxContext.Consumer>
            {(props)=> {
                console.log('props from inner test store ',props);
            return (
                <div></div> 
            );}}
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
                (props) => { return <StoreTester2Class props={props} />}
            }
        </ReactReduxContext.Consumer>);
    }

    const ConnectedBrowserRouter =  (props) => {
        const AppToRender = props.app;
        return (
            <ReactReduxContext.Consumer>
                {
                    (props) => {
                        return <StaticRouter context={context} location={req.path}><AppToRender /></StaticRouter>;
                    }
                }
            </ReactReduxContext.Consumer>
        );
    };




    
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




    console.log('initial context',context);
    const content = renderToString(
        <Provider store={store} >
            {/* <ConnectedBrowserRouter app={AppTest} /> */}
            {/* <StaticRouter location={req.path} context={context}> */}
            <StaticRouter location={req.path}    >
            <AppTest />
            <AppTest2 />
            {/* <ConnectedStoreTester2 /> */}
            {/* <StoreTester /> */}
                {/* {renderRoutes(Routes)} */}
                {/* <div>{renderRoutes(Routes)}</div> */}
                
            </StaticRouter>
        </Provider>
    );
    const matchedRoute = matchRoutes(Routes,req.path);
    console.log('matchedRoute',matchedRoute);
    const helmet = Helmet.renderStatic();
        //console.log('context after renderer',context);
    return (/* html */
        `
            <html>
                <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                </head>
                <body>
                    <div id='root'>${content}</div>
                    <script>
                       // window.INITIAL_STORE = ${serialize(store.getState())};
                        window.INITIAL_STORE = ${JSON.stringify(store.getState())};
                        window.INITIAL_CONTEXT = ${serialize(context)};
                    </script>
                    <script type="text/javascript" src="bundle.js"></script>
                </body>
            </html>
        `
    );
}
