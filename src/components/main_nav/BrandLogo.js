import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <Col xs='auto' className='mr-auto'>
            <NavLink to='/home' >
                <Image src='/img/wob_logo_003.png' fluid className='hvh-10' />
            </NavLink>
        </Col>
    );
};