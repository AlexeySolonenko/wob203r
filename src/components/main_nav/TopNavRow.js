import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

const TopNavRow = (props) => {

    const contact =
        <Row as={NavLink} to={props.paths.contact.path} className='text-white'>
            <Col xs='12' md='3'><span className="oi oi-chat"></span></Col>
            <Col xs='12' md='9'>{props.paths.contact.text}</Col>
        </Row>;

    const prices =
        <Row as={NavLink} to={props.paths.prices.path} className='text-white'>
            <Col xs='12' md='3'><span className="oi oi-document"></span></Col>
            <Col xs='12' md='9'>{props.paths.prices.text}</Col>
        </Row>;

    return (
        <React.Fragment>
            <Col xs='auto' className='text-center'>{contact}</Col>
            <Col xs='auto' className='text-center'>{prices}</Col>
        </React.Fragment>
    );
};

const mapStateToProps = ({ paths }) => ({ paths });

export default connect(mapStateToProps)(TopNavRow);