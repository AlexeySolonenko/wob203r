import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HeroFriendBase from './HeroFriendBase.js';

export default (props ) => {

    const courses = <HeroFriendBase img={{src:'/img/home/2019q3-home-accent-courses-007--xs.png'}} title="КУРСЫ" ></HeroFriendBase>;
    const why = <HeroFriendBase img={{src:'/img/home/2019q3-home-accent-why-001--xs.png'}} title="КОМУ НУЖНО ЕХАТЬ?" ></HeroFriendBase>;
    const promos = <HeroFriendBase img={{src:'/img/home/2019q3-home-accent-promos-001--xs.png'}} title="АКЦИИ И СКИДКИ" ></HeroFriendBase>;

    return (
        <Row noGutters className="d-flex flex-grow-1 ">
            <Col xs='4' md='12' className='align-self-start ' as={NavLink} to='/courses'>{courses}</Col>
            <Col xs='4' md='12' className='align-self-center ' as={NavLink} to='/courses'>{why}</Col>
            <Col xs='4' md='12' className='align-self-end ' as={NavLink} to='/promos'>{promos}</Col>
        </Row>
    );

};