import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesHomePage from './CoursesHomePage.js';
import CoursesFlexiblePage from './CoursesFlexiblePage.js';

/**
 * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes
 */

/**
 * 
 * @param {Object} props 
 * @param {wob203rRoutes} props.allowedRoutes
 */
const CoursesPage = (props) => {

    const m = props.match.url;
    const courses = props.allowedRoutes.mainTree.courses;

    return (
        <React.Fragment>
            <Route path={courses.all.path} exact component={CoursesHomePage} />
            <Route path={courses.shortTerm.selfNav.path} exact component={CoursesFlexiblePage} />
            <Container className='container-no-p-sm' >
                <Row className='no-gutters-sm'>
                    <Col xs='12'><h3>COURSES PAGE</h3></Col>
                    <Col xs='12'><p>The courses you may find in Malta</p></Col>
                    <Col xs='12'>
                        <NavLink to={m + '/business'}>Бизнес</NavLink>
                        <NavLink to={m + '/short-term'}>Краткосрочные</NavLink>
                        <NavLink to={m + '/long-term'}>Долгосрочные</NavLink>
                        <NavLink to={m + '/family'}>Для всей семьи</NavLink>
                    </Col>
                    <Col xs='12'>
                        <Route path={m + '/business'} render={routeProps => ('бизнес курсы')} />
                        <Route path={m + '/short-term'} render={routeProps => ('краткосрочные курсы')} />
                        <Route path={m + '/long-term'} render={routeProps => ('долгосрочные курсы ')} />
                        <Route path={m + '/family'} render={routeProps => ('для всей семьи')} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default {
    component: connect(mapStateToProps)(CoursesPage),
}