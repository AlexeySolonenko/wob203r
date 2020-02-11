import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

const AccentLinks = ()=> {

    return (
        <Row>
            <NavLink to='/courses/business' className='text-white'></NavLink>
        </Row>
    )
};