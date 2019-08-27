import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Button, Image, Navbar, Nav, Col, Row } from 'react-bootstrap';
import MainNavCollapsibleMenu from './MainNavCollapsibleMenu.js';
import BrandLogo from './BrandLogo.js';
import BreadCrumbs from './BreadCrumbs.js';
import PersistentNavItems from './PersistentNavItems.js';

/* TODO to check out if makes sens to change to class and to change color on scroll */
const MainNav = (props) => {

    const authButton = props.auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
            <a href="/api/auth/google">Login</a>
        );

    console.log('navbar props', props);

    return (

        <Navbar bg='white' expand='lg' sticky='top' className='text-primary font-weight-bold border-bottom border-primary shadow mb-3'>
            <Accordion className='w-100'  >
                <Row className='hvh-10'>
                    <BrandLogo />
                    <Col >
                        <Row className='align-items-center h-50'>
                            <Col xs='auto'>back</Col>
                        </Row>
                        <Row className='align-items-center h-50'>
                            <BreadCrumbs {...props} />
                        </Row>
                    </Col>
                    <Col xs='auto'>
                        {/* accordion toggle here */}
                        <PersistentNavItems />
                    </Col>
                </Row>
                {/* accordion collapse here */}
                <MainNavCollapsibleMenu />
            </Accordion>
        </Navbar>
    );
};

const mapStateToProps = ({ auth }) => { return { auth }; };
export default connect(mapStateToProps)(MainNav);