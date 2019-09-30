import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import WhyShouldYouStudyEnglish from '../../../components/WhyShouldYouStudyEnglish.js';

const MainHeroCard = (props) => {

    let coursesStyle = {
        style: {
            backgroundColor: "rgba(255,255,255,70%)"
        }
    };
    const coursesEntryText = (
        <React.Fragment>
            <p style={{ fontSize: '1.5em' }} className='font-weight-bold  py-0 text-primary'>Английский на Мальте</p>
            <p className='font-weight-bold '>Качественное и эффективное образование с удовольствием</p>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Container className='container-no-p-sm'>
                <Card className='no-gutters-sm w-100 rounded-0' >
                    <Card.Img
                        src='/img/courses/2019q3-courses-main-hero-001--xs.png'
                        alt='Three adult students in a class. Sitting at the desks, chatting'
                    >
                    </Card.Img>
                    <Card.ImgOverlay className=" d-none d-md-flex ">
                        <Row className=' align-items-end  justify-content-between h-100 pb-2'>
                            <Col md="5" lg='4' {...coursesStyle} >
                                {coursesEntryText}
                            </Col>
                            <Col lg="4" md='6'>
                                <WhyShouldYouStudyEnglish />
                            </Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <Container>
                <Row className=' mt-2 d-flex d-md-none'>
                    <Col xs='12 '>{coursesEntryText}</Col>
                </Row>
            </Container>
            <Container className='container-no-p-sm '>
                <Row className='no-gutters-sm mt-2 d-flex d-md-none'>
                    <Col xs='12'>
                        <WhyShouldYouStudyEnglish />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default MainHeroCard;