import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/**
 * @typedef import("../typedefs/navTypeDefs.js").wob203rRoutes
 */

/**
 * 
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const WhyShouldYouStudyEnglish = ({ allowedRoutes }) => {

    const style = {
        style: {
            backgroundColor: 'rgba(0,0,0,50%)'
        }
    }

    return (
        <React.Fragment>
            <Row className='w-100  no-gutters-sm text-white' {...style}>
                <Col xs='12' className='px-2  '>
                    <Row className='no-gutters-sm'>
                        <Col xs="12 font-weight-bold  ">Зачем Вам учить английский</Col>
                        <Col xs='12 '>
                            <div><span className="oi text-danger px-2 oi-check "></span>Карьерные возможности</div>
                            <div><span className="oi text-danger px-2 oi-check "></span>Повышение квалификации</div>
                            <div><span className="oi text-danger px-2 oi-check "></span>Международный бизнес</div>
                            <div><span className="oi text-danger px-2 oi-check "></span>Владение всемирным языком</div>
                            <div><span className="oi text-danger px-2 oi-check "></span>Друзья со всего света</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='w-100 no-gutters-sm bg-primary text-white'>
                <Col xs='12' className='px-xs-2 px-md-3'>
                    <Row className='no-gutters-sm'>
                        <Button as={NavLink} to='toupdate' className='btn-block btn-priary col-12 p-3 p-md-0'>ПОДРОБНЕЕ О ПОЛЬЗЕ ЯЗЫКОВ</Button>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    );
}


const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(WhyShouldYouStudyEnglish);
