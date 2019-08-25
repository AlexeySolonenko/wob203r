import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Button, Image, Navbar, Nav, Col, Row } from 'react-bootstrap';
//import MainNavCollapsible from './MainNavCollapsibleMenu.js';
import MainNavCollapsibleMenu from './MainNavCollapsibleMenu.js';

/* TODO to check out if makes sens to change to class and to change color on scroll */
const MainNav = (props) => {

    return (
        <Navbar bg='white' expand='lg' sticky='top' className='text-primary font-weight-bold border-bottom border-primary shadow mb-3'>
            <Accordion className='w-100'  >
                <Row className='hvh-10'>
                    <Col xs='auto' className='mr-auto'>
                        <Image src='/img/wob_logo_003.png' fluid className='hvh-10' />
                    </Col>
                    <Col >
                        <Row className='align-items-center h-50'>
                            <Col xs='auto'>back</Col>
                            <Col xs='auto' className='mr-auto'>^</Col>
                            <Col xs='auto' className='d-flex d-md-none'>
                                <Accordion.Toggle as={Button} variant="link" eventKey='mainNavCollapsibleMenu' ><span className='oi oi-menu'></span></Accordion.Toggle>
                            </Col>
                        </Row>
                        <Row className='align-items-center h-50'>
                            <Col>
                                breadcrubs to do
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='auto'>
                        <Row className='h-100 align-items-center'>
                            <Col xs='auto'>Цены</Col>
                            <Col xs='auto'>Связаться</Col>
                        </Row>
                    </Col>
                </Row>
                <MainNavCollapsibleMenu />
            </Accordion>
        </Navbar>
    );
};


export default MainNav;