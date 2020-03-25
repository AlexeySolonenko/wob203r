import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const ServiceUnavailable = () => {


    return (
        <Container>
            <Row>
                <Col xs='12' style={{color:'green'}}>
                    <p>Our Site will be back very soon! We are missing you so much!</p>
                </Col>
            </Row>

        </Container>
    );
};

export default {
    component: ServiceUnavailable
};