import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Login from '../../components/login/Login.js';

const AboutPage = () => {

    return (
        <Container>
            <Row>
                <Col xs='12' md='4' xl='2'>
                    <Login />
                </Col>
            </Row>
        </Container>
    );
};

export default {
    component: AboutPage
};



