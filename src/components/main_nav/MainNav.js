import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Button, Image, Navbar, Nav, Col, Row } from 'react-bootstrap';
import MainNavCollapsibleMenu from './MainNavCollapsibleMenu.js';
import BrandLogo from './BrandLogo.js';
import BreadCrumbs from './BreadCrumbs.js';
import PersistentNavItems from './PersistentNavItems.js';
import { Route } from 'react-router-dom';
import MainNavLg from './MainNavLg.js';

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
                <Row className='hvh-10 w-100'>
                    <BrandLogo />
                    <Col >
                        <Row className='align-items-center d-none d-lg-block h-50'>
                            <BreadCrumbs {...this.props} />
                        </Row>
                        <Row className='align-items-center d-block d-md-none h-100'>
                            <BreadCrumbs closeSmMenu={this.closeSmMenu}   {...this.props} />
                        </Row>
                        {/* {this.state.mainMenu ?
                            <Row className='align-items-center d-none d-lg-block h-50'>
                                    <MainNavLg {...this.props}/>
                            </Row>
                            : null} */}
                             <MainNavLg {...this.props}/>
                    </Col>
                    <Col xs='auto'>
                        <PersistentNavItems
                            toggleMainMenu={this.toggleMainMenu}
                            location={this.props.location}
                            toggleSmMenu={this.toggleSmMenu}
                            closeSmMenu={this.closeSmMenu}
                        />
                    </Col>
                </Row>
                {/* <Route closeSmMenu={this.closeSmMenu} path={'*show_collapsible*'} exact component={MainNavCollapsibleMenu} /> */}
                {this.state.smMenu ?
                    <MainNavCollapsibleMenu closeSmMenu={this.closeSmMenu} />
                    : null}
            </Navbar>
        );
    }
};

const mapStateToProps = ({ auth, paths }) => { return { auth, paths }; };
export default connect(mapStateToProps)(MainNav);