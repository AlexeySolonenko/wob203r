import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default (props) => {
    //let to = props.location.pathname.indexOf('show_collapsible') > 0 ? '' : '/show_collapsible';
    //to = props.location.pathname.replace('/show_collapsible', '') + to;

    return (
        <Row className='h-100 align-items-center'>
            <Col xs='auto'>Цены</Col>
            <Col xs='auto'>
                <NavLink onClick={props.closeSmMenu} to='/contact'>
                    Связаться <span className="oi oi-chat"></span></NavLink>
            </Col>
            {/* Main large screen menu toggle */}
            <Col xs='auto' className='d-none d-md-flex' onClick={props.toggleMainMenu}><span className='oi oi-menu'></span>
            </Col>
            {/* Smal screen menu toggle */}
            <Col xs='auto' className='d-flex d-md-none'>
                <Button onClick={props.toggleSmMenu} ><span className='oi oi-menu'></span></Button>
            </Col>
        </Row>
    );
};
