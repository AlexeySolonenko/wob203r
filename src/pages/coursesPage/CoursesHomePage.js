import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainHeroCard from './MainHeroCard.js';
import AdultCourses from './AdultCourses.js';
import KidsCourses from './KidsCourses.js';


/**
 * 
 * @param {Object} props 
 */
const CoursesHomePage = (props) => {

    return (
        <React.Fragment>
            <MainHeroCard />
            <div className='my-1 '></div>
            <Container>
                <Row>
                    <Col>
                        <h4>Курсы для взрослых (от 16 лет и старше)</h4>
                    </Col>
                </Row>
            </Container>
            <AdultCourses />
            <div className='my-1 '></div>
            <Container>
                <Row>
                    <Col>
                        <h4>Курсы для детей и подростков</h4>
                    </Col>
                </Row>
            </Container>
            <KidsCourses />
        </React.Fragment>
    );
}

export default CoursesHomePage;