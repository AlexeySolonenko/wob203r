import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Dropdown, DropdownButton, Image, Navbar, Nav, Col, Row } from 'react-bootstrap';
import BrandLogo from './BrandLogo.js';
import { Route } from 'react-router-dom';
import MainNavRowTop from './MainNavRowTop.js';
import MainNavMenuSm from './MainNavMenuSm.js';
import MainNavMenuLg from './MainNavMenuLg.js';


/* TODO to check out if makes sens to change to class and to change color on scroll */
class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainMenu: false,
            smMenu: false,
        };

        this.toggleMainMenu = this.toggleMainMenu.bind(this);
        this.toggleSmMenu = this.toggleSmMenu.bind(this);
        this.closeSmMenu = this.closeSmMenu.bind(this);
    }

    toggleMainMenu() {
        this.setState((oldState) => ({ mainMenu: !oldState.mainMenu }));
    }

    toggleSmMenu() {
        this.setState((oldState) => ({ smMenu: !oldState.smMenu }));
    }

    closeSmMenu() {
        this.setState({ smMenu: false });
    }

    render() {

        /**
         * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes 
         */
        /**
         * @type wob203rRoutes
         */
        let n;
        n = this.props.paths;
        

        console.log('main nav prps', this.props);
        const authButton = this.props.auth ? (
            <a href="/api/logout">Logout</a>
        ) : (
                <a href="/api/auth/google">Login</a>
            );

        return (

            <Navbar bg='white' expand='lg' sticky='top' className='text-primary font-weight-bold border-bottom border-primary shadow mb-3'>
                <Container >
                    <Row className=' w-100 '>
                        <Col xs='4' md='2' lg='2' className='mr-auto'>
                            <BrandLogo />
                        </Col>
                        <Col xs="8" md='10' lg='10'>
                            <Row className="align-items-center justify-content-end bg-primary pt-1">
                                <MainNavRowTop {...this.props} />
                            </Row>
                            <Row className="align-items-center ">
                                <div className="d-none d-lg-flex col-12 pr-0">
                                    <MainNavMenuLg />
                                </div>
                                <div className="d-flex ml-auto d-lg-none col-auto pr-0">
                                    <Navbar.Toggle aria-controls='small-main-menu'><span className='oi oi-menu'></span></Navbar.Toggle>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="d-flex d-lg-none col-auto  pr-0">

                </div>
                <div className="d-flex w-100 d-lg-none  col-auto pr-0">
                    <Navbar.Collapse id='small-main-menu' style={{overflow:"auto",maxHeight:"60vh"}}>
                        <Nav className='mr-auto'>
                            <MainNavMenuSm {...this.props} />
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
};

const mapStateToProps = ({ auth, paths, allowedRoutes }) => { return { auth, paths, allowedRoutes }; };
export default connect(mapStateToProps)(MainNav);