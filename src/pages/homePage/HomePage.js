import React from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { fetchPaths } from '../../actions/fetchPaths.js';
import { connect } from 'react-redux';
import Hero from './Hero.js';
import fs from 'fs';
import WhyUs from './WhyUs.js';
import CoursesThumbs from './CoursesThumbs.js';
import HeroFriendsAllLg from './HeroFriendsAllLg.js';
import HeroFriendsAllXsMd from './HeroFriendsAllXsMd.js';
import winston from 'winston';

const logger = winston.createLogger({
    level:'info',
    format:winston.format.simple(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({filename:'test_log.log'})
    ]   
});

const HomePage = (props) => {

    logger.info('test from home page 2235  ');

    console.log('Node version is: ' + process.version);

    if (props.location.pathname === '/') {
        props.history.replace('/home');
    }

    return (
        <React.Fragment>
            <Container className='container-no-p-sm' bsPrefix="container container-no-p-sm">
                {/* HERO */}
                <Row className=" no-gutters ">
                    <Hero />
                    <Col lg='4' className=" d-none d-lg-flex  align-self-stretch ">
                        <HeroFriendsAllLg />
                    </Col>
                </Row>
                <Row className="d-flex d-lg-none  no-gutters border-bottom border-primary">
                    <HeroFriendsAllXsMd />
                </Row>
                <div className="mb-1 border-bottom border-primary"></div>

                {/* WHY US */}
                <Row className="no-gutters-sm " >
                    <Col xs='12' className='  text-center mt-1'>
                        <h3>ЧТО МЫ МОЖЕМ ВАМ ПРЕДЛОЖИТЬ</h3>
                    </Col>
                </Row>
                <WhyUs />

                <Row className='no-gutters-sm mt-1'>
                    <Col xs='12' className='text-center'><h3>КУРСЫ И ПРОГРАММЫ ОБУЧЕНИЯ</h3></Col>
                    <Col xs='12'></Col>
                </Row>
                <CoursesThumbs />
                <Row className='no-gutters-sm justify-content-center mt-5'>
                    <Col xs='auto'>
                        <Button size='lg' as={NavLink} to='/courses' className='text-center rounded-0'>ВСЕ КУРСЫ</Button>
                    </Col>
                </Row>

            </Container>
            {/* <h3 className='row no-gutters-sm'>STUDYSNAMI</h3>

            <Row>
                {[...props.paths.map((path) => <NavItemBase key={path.path} path={path} />)]}
            </Row> */}

        </React.Fragment>
    );
}

const loadData = (store) => {
    return store.dispatch(fetchPaths());
}
const mapStateToProps = ({ paths, proc }) => {
    return ({ paths, proc });
};
export default {
    component: connect(mapStateToProps)(HomePage),
    //loadData: loadData,
}