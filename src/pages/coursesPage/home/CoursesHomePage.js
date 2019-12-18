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
            <div className='my-2 '></div>
            <Container>
                <Row className='my-2  '>
                    <Col className=' text-center text-uppercase'>
                        <h4 >Курсы для взрослых (от 16 лет и старше)</h4>
                    </Col>
                    <Col xs='12'>
                    <p>Взрослые и дети могут проходить курсы вместе в рамках одной поездки.</p>
                    <p>Курсы для взрослых представлены ниже. </p>
                    </Col>
                </Row>
            </Container>
            <AdultCourses />
            <div className='my-2 '></div>
            <Container>
                <Row className='my-2  '>
                    <Col className=' text-center text-uppercase'>
                        <h4>Курсы для детей и подростков</h4>
                    </Col>
                    <Col xs='12'>
                    <p>Дети с ? лет могут проходить обучение самостоятельно. При этом подростки живут либо в школьных апартаментах или надзираемых школой гостевых семьях. За ребятами осуществляется надзор вожатыми от школы.</p>
                    <p>На Мальте разработаны программы обучения английскому для малышей с ? лет. Родители, приезжающие по долгосрочным программам, могут направить своих маленьких студентов в специальный детский сад английского.</p>
                    </Col>
                </Row>
            </Container>
            <KidsCourses />
        </React.Fragment>
    );
}

export default CoursesHomePage;