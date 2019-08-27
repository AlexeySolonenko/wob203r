import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default () => {

    return (
        <Row className='h-100 align-items-center'>
            <Col xs='auto'>Цены</Col>
            <Col xs='auto'>
                <NavLink to='/contact' className='border border-circle border-primary'>
                    <span className="oi oi-chat"></span></NavLink>
            </Col>
            <Col xs='auto' className='d-flex d-md-none'>
                <Accordion.Toggle as={Button} variant="link" eventKey='mainNavCollapsibleMenu' ><span className='oi oi-menu'></span></Accordion.Toggle>
            </Col>
        </Row>
    );
};
