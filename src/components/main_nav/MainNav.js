import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Button, Container, Image, Navbar, Nav, Col, Row } from 'react-bootstrap';
import MainNavCollapsibleMenu from './MainNavCollapsibleMenu.js';
import BrandLogo from './BrandLogo.js';
import BreadCrumbs from './BreadCrumbs.js';
import PersistentNavItems from './PersistentNavItems.js';
import { Route } from 'react-router-dom';
import MainNavLg from './MainNavLg.js';
import MenuBar from './MenuBar.js';
import TopNavRow from './TopNavRow.js';
import MenuTreeSm from './MenuTreeSm.js';


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
                        <Col xs='4' md='2' lg='1' className='mr-auto'>
                            <BrandLogo />
                        </Col>
                        <Col xs="8" md='10' lg='11'>
                            <Row className="align-items-center justify-content-end bg-primary ">
                                <TopNavRow {...this.props} />
                            </Row>
                            <Row className="align-items-center justify-content-end ">
                                <MenuBar {...this.props} />
                            </Row>
                            {/* <Row className='align-items-center d-none d-lg-block h-50'> */}



                            {/* <Row className='align-items-center d-block d-md-none h-100'> */}

                            {/* {this.state.mainMenu ?
                            <Row className='align-items-center d-none d-lg-block h-50'>
                                    <MainNavLg {...this.props}/>
                            </Row>
                            : null} */}

                        </Col>
                        {/* <Col xs='auto'>
                            <PersistentNavItems
                                toggleMainMenu={this.toggleMainMenu}
                                location={this.props.location}
                                toggleSmMenu={this.toggleSmMenu}
                                closeSmMenu={this.closeSmMenu}
                            />
                        </Col> */}
                    </Row>
                    {/* <Route closeSmMenu={this.closeSmMenu} path={'*show_collapsible*'} exact component={MainNavCollapsibleMenu} /> */}
                    {/* {this.state.smMenu ?
                        <MainNavCollapsibleMenu closeSmMenu={this.closeSmMenu} />
                        : null} */}


                </Container>
                <Navbar.Collapse id='small-main-menu'>
                    <Nav className='mr-auto'>
                        <MenuTreeSm {...this.props} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

const mapStateToProps = ({ auth, paths }) => { return { auth, paths }; };
export default connect(mapStateToProps)(MainNav);


/*
 {/* <BreadCrumbs {...this.props} />

 {<Row className='align-items-center d-block d-md-none '>
                                <BreadCrumbs closeSmMenu={this.closeSmMenu}   {...this.props} />
                            </Row>
 <MainNavLg {...this.props} />}
*/