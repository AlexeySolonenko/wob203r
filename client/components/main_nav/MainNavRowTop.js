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
            <Col lg='auto' className='text-white d-none d-lg-flex' style={
                                    {
                                        fontFamily:'"Caveat", cursive',
                                        fontSize:"2em",
                                        fontStretch:'150%',
                                        }
                                        }>Б.е.з. Г.р.а.н.и.ц.</Col>
            <Col xs='6' lg='auto' className=' ml-auto text-center'>{contact}</Col>
            <Col xs='6' lg='auto' className='text-center'>{prices}</Col>
        </React.Fragment>
    );
};

const mapStateToProps = ({ paths }) => ({ paths });

export default connect(mapStateToProps)(TopNavRow);