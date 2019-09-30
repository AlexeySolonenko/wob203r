import React from 'react';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import OverlayWithTitleAndText from '../../../microComponents/OverlayWithTitleAndText.js';
import SubTopicCard from '../../../microComponents/SubTopicCard.js';
import IconsAndTextBlock01 from '../../../microComponents/IconsAndTextBlock01.js';
import ContactAnAdvisor01 from '../../../microComponents/ContactAnAdvisor01.js';

/**
 * @typedef import("../../../typdefs/pages/coursesPage/tempalte/GroupOfCourses.js").GroupOfCoursesProps
 */


/**
 * 
 * @param {Object} props
 * @param {GroupOfCoursesProps} props.modelData
 */
const CoursesBusinessPage = ({ modelData }) => {

    return (
        <React.Fragment>
            <OverlayWithTitleAndText cardProps={modelData.heroCard} />
            <div className="my-1"></div>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <p className='font-weight-bold' style={{ fontSize: '1.5em' }}>{modelData.underHeroCardGreeting}</p>
                        <p>{modelData.underHeroCardText}</p>
                    </Col>
                </Row>
            </Container>
            <div className="my-1"></div>
            <div className='w-100 h-auto position-relative py-3' >
                <div className='container-blue-bg'></div>
                <Container>
                    <CardDeck>
                        {modelData.subTopicCards.map((p) => (<SubTopicCard key={p.title} cardProps={p} />))}
                    </CardDeck>
                </Container>
            </div>
            <div className='my-1'></div>
            <Container className='position-relative'>
                <IconsAndTextBlock01 blockProps={modelData.icons} />
            </Container>
            <div className='my-1'></div>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs='auto'><ContactAnAdvisor01 /></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default CoursesBusinessPage;