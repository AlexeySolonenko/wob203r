import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

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
        const contentOpenedArrow = this.state.contentAreaOpened ? 'top' : 'bottom';
        return (
            <React.Fragment>
                <Col xs={12} className="border hvh-25 border-dark ">
                    <Row className="h-100">
                        <Col xs={10} >
                            <Row className="h-100 align-items-center">
                                <Col xs={12}  className="h-70 d-flex justify-content-center align-items-center">
                                    <Link to={this.props.path.path}><h3><u><b style={{fontSize:'1.5em'}} >{this.props.path.text.toUpperCase()}</b></u></h3></Link>
                                </Col>
                                <Col xs={12} className="h-30 d-flex align-items-center justify-content-center text-center">
                                    <Col xs={12} onClick={this.toggleContentArea}><b>Кратко<span className={"oi oi-chevron-"+contentOpenedArrow} ></span></b></Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1} className="border-left border-dark">
                        <Link to={this.props.path.path}><div className="inner-center rotate-ccw-90" ><b>Подробно</b></div></Link>
                        </Col>
                        <Col xs={1} className="d-flex align-items-center text-center justify-content-center">
                            <Link to="/courses" ><span className="oi oi-chevron-right text-dark nav-item-base-right-arrow" ></span></Link>
                        </Col>
                    </Row>
                </Col>
                <Row className={contentOpened}>
                    <Col xs={12}>
                        {/* here we should load content from server into store by article ID or the like */}
                        content area in development
                        </Col>
                </Row>
            </React.Fragment>
        );
    }
}
// const mapStateToProps = (state) => state;
// export default connect(mapStateToProps)(NavItemBase);
export default NavItemBase;