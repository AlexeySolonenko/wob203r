import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import AccentLinks from './AccentLinks.js';

const Footer = (props ) =>{



    return(
        <Row className='no-gutters-sm bg-secondary '>
            <Col xs='12' lg='8'>
                <AccentLinks />
            </Col>
        </Row>
    );
};