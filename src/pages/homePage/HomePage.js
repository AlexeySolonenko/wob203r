import React from 'react';
import NavItemBase from '../../components/NavItemBase.js';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { fetchPaths } from '../../actions/fetchPaths.js';
import { connect } from 'react-redux';
import Hero from './Hero.js';
import HeroFriendsAll from './HeroFriendsAll.js';
import WhyUs from './WhyUs.js';
import CoursesThumbs from './CoursesThumbs.js';

const HomePage = (props) => {

    if (props.location.pathname === '/') {
        props.history.replace('/home');
    }


    console.log('home page props', props);
    return (
        <React.Fragment>
            {/* hero block */}
            <Row noGutters className="d-flex h-100 border-bottom pb-5 border-primary">
                <Col xs='12' md='8' className="flex-grow-1 d-flex">
                    <Hero />
                </Col>
                <Col xs='12' md='4' className="flex-grow-1 d-flex" >
                    <HeroFriendsAll />
                </Col>
            </Row>
            {/* why us*/}

            <Row ><Col xs='12' className='text-center mt-5'><h3>ЧТО МЫ МОЖЕМ ВАМ ПРЕДЛОЖИТЬ</h3></Col></Row>
            <WhyUs />

            <Row className='mt-5'>
                <Col xs='12' className='text-center'><h3>КУРСЫ И ПРОГРАММЫ ОБУЧЕНИЯ</h3></Col>
                <Col xs='12'></Col>
            </Row>
            <CoursesThumbs />
            <Row className='justify-content-center mt-5'>
                <Col xs='auto'>
                    <Button size='lg' as={NavLink} to='/courses' className='text-center rounded-0'>ВСЕ КУРСЫ</Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    Footer under development
                </Col>
            </Row>
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