import React from 'react';
import { renderRoutes } from 'react-router-config';
import MainNav from './components/main_nav/MainNav.js';
import { fetchCurrentUser } from './actions/fetchCurrentUser.js';
import { fetchPaths } from './actions/fetchPaths.js';
import { fetchRoutes } from './actions/fetchRoutes.js';
import { fetchViewParams } from './actions/fetchViewParams.js';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * @TODO big big todo - split all code between a mobile and tablet+desktop separate websites
 * 
 * @param {*} props 
 */
const App = (props) => {

    const route = props.route;
    return (
        <React.Fragment>
            {/* <header >
               
            </header> */}
            <MainNav {...props} />
            <main role="main" class="flex-shrink-0">
                <section className="core-content">
                    <Container >
                        {/* <Row className="no-gutters-sm">
                        <Col sm={12}  className="core-content-center"> */}
                        {renderRoutes(route.routes)}
                        {/* </Col>
                    </Row> */}
                    </Container>
                </section>
            </main>
            <footer>
                <Row className='no-gutters-sm ' >
                    <Col>
                        Footer under development
                </Col>
                </Row>
            </footer>
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
        )
    //    {
    //               paths: () => dispatch(fetchPaths()),
    //    viewParams: () => dispatch(fetchViewParams())
    //    }),
    //loadData: loadData
};