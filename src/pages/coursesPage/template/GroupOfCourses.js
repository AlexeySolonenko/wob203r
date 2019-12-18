import React from 'react';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import OverlayWithTitleAndText from '../../../microComponents/OverlayWithTitleAndText.js';
import SubTopicCard from '../../../microComponents/SubTopicCard.js';
import IconsAndTextBlock01 from '../../../microComponents/IconsAndTextBlock01.js';
import ContactAnAdvisor01 from '../../../microComponents/ContactAnAdvisor01.js';
import ScrollToTopOnMount from '../../../microComponents/ScrollToTopOnMount.js';

/**
 * @typedef import("../../../typdefs/pages/coursesPage/tempalte/GroupOfCourses.js").GroupOfCoursesProps
 */


/**
 * 
 * @param {Object} props
 * @param {GroupOfCoursesProps} props.modelData
 */
const CoursesBusinessPage = ({ modelData }) => {

    let triples = 0;
    let sortedCards = [[]];
    modelData.subTopicCards.forEach( (p, idx) => {
        if(idx % 3 === 0) {
            triples++;
            sortedCards[triples] = [];
        }
        // sortedCards[triples].push(<Col xs='12' md='4'><SubTopicCard key={p.title} cardProps={p} /></Col>);
        sortedCards[triples].push(<SubTopicCard key={p.title} cardProps={p} />);
        return;
    });


    return (
        <React.Fragment>
            <ScrollToTopOnMount />
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
                    {sortedCards.map((cards) => (<CardDeck className=' my-2'>{cards}</CardDeck>))}
                    {/* <Row>{modelData.subTopicCards.map((c)=>(<Col xs='12' md='4'><SubTopicCard key={c.title} cardProps={c} /></Col>))}</Row> */}
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