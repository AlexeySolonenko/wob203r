import React from 'react';
import { renderRoutes } from 'react-router-config';
import MainNav from './components/main_nav/MainNav.js';
import { fetchCurrentUser } from './actions/fetchCurrentUser.js';
import { fetchPaths } from './actions/fetchPaths.js';
import { fetchViewParams } from './actions/fetchViewParams.js';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const App = (props) => {

    const route = props.route;
    return (
        <React.Fragment>
            <header >
                <MainNav {...props} />
            </header>
            <main role="main" class="flex-shrink-0">
                <Container >
                    <section className="core-content">
                        <Row className="no-gutters-sm">
                            <Col sm={12} xl={8} className="core-content-center">
                                {renderRoutes(route.routes)}
                            </Col>
                            <Col sm={12} xl={4} className="core-content-right">side bar in development </Col>
                        </Row>
                    </section>
                </Container>
            </main>
        </React.Fragment>
    );
};

export default {
    component: App,
    loadData: ({ dispatch }) =>
        Promise.all([dispatch(fetchPaths()), dispatch(fetchViewParams())])
    //    {
    //               paths: () => dispatch(fetchPaths()),
    //    viewParams: () => dispatch(fetchViewParams())
    //    }),
    //loadData: loadData
};