import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FactSheetBlock from '../../../microComponents/FactSheetBlock.js';
import OverlayWithTitleAndText from '../../../microComponents/OverlayWithTitleAndText.js';
import ContanctAnAdvisor from '../../../microComponents/ContactAnAdvisor01.js';
import ProgramStructure from '../../../microComponents/ProgramStructure.js';

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
            <OverlayWithTitleAndText cardProps={pageData.heroCard} />
            <Container>
                <Row>
                    <Col className='text-center'>
                        <p className='font-weight-bold' style={{ fontSize: '1.5em' }}>{pageData.underHeroCardGreeting}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' md='8'>{pageData.description}</Col>
                    <Col xs='12' md='4'>
                        <FactSheetBlock factSheetProps={pageData.factSheet} />
                    </Col>
                    <Col xs='12'>
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
                    <Row><Col xs='12' style={{ fontSize: '1.25em' }}><b>СОСТАВ ПРОГРАММЫ</b></Col></Row>
                    <ProgramStructure programStruct={pageData.programStructure} />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default KindOfCourses;