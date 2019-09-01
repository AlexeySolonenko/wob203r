import React from 'react';
import NavItemBase from '../../components/NavItemBase.js';
import { Row, Col, Card } from 'react-bootstrap';
import { fetchPaths } from '../../actions/fetchPaths.js';
import { connect } from 'react-redux';
import Hero from './Hero.js';
import  HeroFriendsAll from './HeroFriendsAll.js';
import CoursesThumbs from './CoursesThumbs.js';

const HomePage = (props) => {

    if(props.location.pathname === '/'){
        props.history.replace('/home');
    }

    console.log('home page props',props);
    return (
        <React.Fragment>
            {/* hero block */}
            <Row className="d-flex h-100">
                <Col xs='12' md='8' className="flex-grow-1 d-flex">
                    <Hero />
                </Col>
                <Col xs='12' md='4' className="flex-grow-1 d-flex" >
                    <HeroFriendsAll />
                </Col>
            </Row>
            {/* why us*/}
            {/* courses block */}
            <CoursesThumbs />
            <h3 className='row no-gutters-sm'>STUDYSNAMI</h3>
           
                <Row>
                {[...props.paths.map((path) => <NavItemBase key={path.path} path={path} />)]}
                </Row>
            
        </React.Fragment>
    );
}

const loadData = (store) => {
    return store.dispatch(fetchPaths());
}
const mapStateToProps = ({paths}) => {
    return ({ paths });
};
export default {
    component: connect(mapStateToProps)(HomePage),
    //loadData: loadData,
}