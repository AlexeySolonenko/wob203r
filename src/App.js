import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/main_nav/Header.js';
import { fetchCurrentUser } from './actions/fetchCurrentUser.js';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const App = (props) => {
    console.log(props);
    const route = props.route;
    return (
        <React.Fragment>
            <Container className='test' >
                <Header />
            </Container>
            <Container fluid>
                <section className="core-content">
                    <Row className="no-gutters-sm">
                        <Col sm={12} xl={8} className="core-content-center">
                            {renderRoutes(route.routes)}
                        </Col>
                        <Col sm={12} xl={4} className="core-content-right">side bar in development </Col>
                    </Row>
                </section>
            </Container>
        </React.Fragment>
    );
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};