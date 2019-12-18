import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FactSheetBlock from '../../../microComponents/FactSheetBlock.js';
import OverlayWithTitleAndText from '../../../microComponents/OverlayWithTitleAndText.js';
import ContanctAnAdvisor from '../../../microComponents/ContactAnAdvisor01.js';
import ProgramStructure from '../../../microComponents/ProgramStructure.js';
import ScrollToTopOnMount from '../../../microComponents/ScrollToTopOnMount.js';

/**
 * @typedef import('../../../typedefs/pages/coursesPage/template/KindOfCourses.js').KindOfCoursesProps
 */


/**
 * @function
 * @param {Object} props
 * @param {KindOfCoursesProps} props.pageData
 */
const KindOfCourses = ({ pageData }) => {

    return (
        <React.Fragment>
            <ScrollToTopOnMount />
            <OverlayWithTitleAndText cardProps={pageData.heroCard} />
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h3 className='font-weight-bold my-3'>{pageData.underHeroCardGreeting}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' md='8'>{pageData.description}</Col>
                    <Col xs='12' md='4'>
                        <Card className='shadow bg-teal02'>
                            <Card.Body>
                                <FactSheetBlock factSheetProps={pageData.factSheet} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs='12 mb-3'>
                        <Row>
                            <Col xs='auto' >
                                <ContanctAnAdvisor />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className='w-100 h-auto position-relative py-3'>
                <div className='container-blue-bg'></div>
                <Container>
                    <Row><Col xs='12' style={{ fontSize: '1.25em' }} className='text-left'><b>СОСТАВ ПРОГРАММЫ</b></Col></Row>
                    <ProgramStructure programStruct={pageData.programStructure} />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default KindOfCourses;