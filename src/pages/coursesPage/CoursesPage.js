import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesHomePage from './home/CoursesHomePage.js';
import CoursesFlexiblePage from './shortTerm/CoursesFlexiblePage.js';
import CoursesFlexibleGeneralPage from './shortTerm/CoursesFlexibleGeneralPage.js';
import CoursesFlexibleIntensivePage from './shortTerm/CoursesFlexibleIntensivePage.js';
import CoursesFamilyPage from './family/CoursesFamilyPage.js';
import CoursesFamilyTeenagersPage from './family/CoursesFamilyTeenagersPage.js';
import CoursesFamilyCampPage from './family/CoursesFamilyCampPage.js';
import CoursesFamilyKidsPage from './family/CoursesFamilyKidsPage.js';
import CoursesFamilyFullPage from './family/CoursesFamilyFullPage.js';
import CoursesLongTermPage from './longTerm/CoursesLongTermPage.js';
import CoursesBusinessPage from './business/CoursesBusinessPage.js';
import CoursesBusinessGeneralPage from './business/CoursesBusinessGeneralPage.js';
import CoursesBusinessIntensivePage from './business/CoursesBusinessIntensivePage.js';
import CoursesBusinessTargetPage from './business/CoursesBusinessTargetPage.js';
import CoursesTeachersPage from './teachers/CoursesTeachersPage.js';
import BreadCrumbs from '../../microComponents/BreadCrumbs.js';
//import ScrollToTopOnMount from '../../microComponents/ScrollToTopOnMount.js';
import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'test_log.log' })
    ]
});


/**
 * 
 * @todo DUMMY ERROR BOUNDARY - TO REWORK LATER 
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        logger.info('getting derived state from error');
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logger.info(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}


/**
 * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes
 */

/**
 * 
 * @param {Object} props 
 * @param {wob203rRoutes} props.allowedRoutes
 */
const CoursesPage = (props) => {

    logger.info('in courses page ');

    const m = props.match.url;
    const courses = props.allowedRoutes.mainTree.courses;

    return (
        <ErrorBoundary>>
        <React.Fragment>
                {/* <ScrollToTopOnMount /> */}
                {/* <Container>
                <BreadCrumbs tree={courses} location={props.location} />
            </Container> */}
                <Container>
                    <div className='my-2'></div>
                </Container>
                <Route path={courses.all.path} exact component={CoursesHomePage} />
                <Route path={courses.shortTerm.selfNav.path} exact component={CoursesFlexiblePage} />
                <Route path={courses.shortTerm.flexi.path} exact component={CoursesFlexibleGeneralPage} />
                <Route path={courses.shortTerm.intensive.path} exact component={CoursesFlexibleIntensivePage} />
                <Route path={courses.longTerm.selfNav.path} exact component={CoursesLongTermPage} />
                <Route path={courses.family.selfNav.path} exact component={CoursesFamilyPage} />
                <Route path={courses.family.teenagers.path} exact component={CoursesFamilyTeenagersPage} />
                <Route path={courses.family.summerCamp.path} exact component={CoursesFamilyCampPage} />
                <Route path={courses.family.kids.path} exact component={CoursesFamilyKidsPage} />
                <Route path={courses.family.fullFamily.path} exact component={CoursesFamilyFullPage} />
                <Route path={courses.business.selfNav.path} exact component={CoursesBusinessPage} />
                <Route path={courses.business.general.path} exact component={CoursesBusinessGeneralPage} />
                <Route path={courses.business.intensive.path} exact component={CoursesBusinessIntensivePage} />
                <Route path={courses.business.target.path} exact component={CoursesBusinessTargetPage} />
                <Route path={courses.teachers.selfNav.path} exact component={CoursesTeachersPage} />
                {/* <Container className='container-no-p-sm' >
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
            </Container> */}
            </React.Fragment>
        </ErrorBoundary>
    );
}

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default {
    component: connect(mapStateToProps)(CoursesPage),
}