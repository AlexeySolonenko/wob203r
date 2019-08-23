import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

class NavItemBase extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            contentAreaOpened: false,
        };
        this.toggleContentArea = this.toggleContentArea.bind(this);
    }
    

    toggleContentArea(){
        this.setState(oldState => ({contentAreaOpened:!oldState.contentAreaOpened}));
    }

    render() {
        const contentOpened = !this.state.contentAreaOpened && 'd-none';
        return (
            <React.Fragment>
                <Col xs={12} className="border hvh-25 border-dark ">
                    <Row className="h-100">
                        <Col xs={10} >
                            <Row className="h-100 align-items-center">
                                <Col xs={12}  className="h-70 d-flex justify-content-center align-items-center">
                                    <h3 onClick={this.toggleContentArea}><u><b style={{fontSize:'2.5em'}} >COURSES</b></u></h3>
                                </Col>
                                <Col xs={12} onClick={this.toggleContentArea} className="h-30 d-flex align-items-center justify-content-center text-center">
                                    <Col xs={12} style={{ fontSize: '1em' }} ><b>Short Description<span className="oi oi-chevron-bottom" ></span></b></Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1}>
                            <div className="inner-center rotate-ccw-90">Read More </div>
                        </Col>
                        <Col xs={1} className="d-flex align-items-center text-center justify-content-center">
                            <Link to="/courses" ><span className="oi oi-chevron-right text-dark nav-item-base-right-arrow" ></span></Link>
                        </Col>

                    </Row>
                </Col>
                <Row className={contentOpened}>
                    <Col xs={12}>
                        content area to be hidden
                        </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default NavItemBase;