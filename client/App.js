import React from 'react';
import { renderRoutes } from 'react-router-config';
import MainNav from './components/main_nav/MainNav.js';
import { fetchCurrentUser } from './actions/fetchCurrentUser.js';
import { fetchPaths } from './actions/fetchPaths.js';
import { fetchRoutes } from './actions/fetchRoutes.js';
import { fetchViewParams } from './actions/fetchViewParams.js';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { ServiceUnavailable } from './pages/503ServiceUn/ServiceUnavaialble.js';

/**
 * @TODO big big todo - split all code between a mobile and tablet+desktop separate websites
 * 
 * @param {*} props 
 */
const App = (props) => {

    const route = props.route;
    return (
        <React.Fragment>
            <MainNav {...props} />
            <main role="main" className="flex-shrink-0">
                <section className="core-content">
                    {renderRoutes(route.routes)}
                </section>
            </main>
            {/* <footer> */}
            {/* FOOTERS */}
            <Container className='container-no-p-sm'>
                <Row className='no-gutters-sm ' >
                    <Col>
                        <p>Footer under development</p>
                    </Col>
                </Row>
            </Container>
            {/* </footer> */}
        </React.Fragment >
    );
};

/**
 * @todo to handle exceptions in load data
 */
export default {
    component: App,
    loadData: ({ dispatch }) =>
        Promise.all(
            [
                dispatch(fetchPaths()),
                dispatch(fetchViewParams()),
                dispatch(fetchRoutes())
            ]
        ).catch((e) => {
            console.log(e);
        })
    //    {
    //               paths: () => dispatch(fetchPaths()),
    //    viewParams: () => dispatch(fetchViewParams())
    //    }),
    //loadData: loadData
};