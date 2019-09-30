import React from 'react';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import OverlayWithTitleAndText from '../../../microComponents/OverlayWithTitleAndText.js';
import SubTopicCard from '../../../microComponents/SubTopicCard.js';
import IconsAndTextBlock01 from '../../../microComponents/IconsAndTextBlock01.js';
import ContactAnAdvisor01 from '../../../microComponents/ContactAnAdvisor01.js';

/**
 * 
 * @typedef import('../../../typedefs/view').pictureProps
 */

/**
* @typedef import("../../../typedefs/microComponents/SubTopicCard.js").SubTopicCardProps
*/

/**
* @typedef import("../../../typedefs/navTypeDefs.js").wob203rRoutes
*/

/**
 * @typedef import("../../../typdefs/microComponents/IconsAndTextBlock01.js").IconsAndTextBlock01Props
 */


/**
 * 
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const CoursesFlexiblePage = ({ allowedRoutes }) => {
    const shortTerm = allowedRoutes.mainTree.courses.shortTerm;
    /**@type  */
    const pic = {
        srcXs: '/img/courses/2019q3-courses-flexi-001--xs.png',
        srcSm: '/img/courses/2019q3-courses-flexi-001--sm.png',
        alt: 'Group of students in a class. A teacher is showing to students two cartoon cut hand-drawn smiley faces.',
    }

    const heroCardProps = {
        title: 'АДАПТИВНЫЕ КУРСЫ АНГЛИЙСКОГО',
        text: 'Учебные планы подстроенные под Ваш бюджет, график и нужды'
    };

    /**@type SubTopicCardProps */
    const flexiCardProps = {
        title: 'КРАТКОСРОЧНЫЕ ОПЦИИ',
        text: '',
        readMoreRoute: shortTerm.flexi,
    }
    /**@type pictureProps */
    const flexiCardPic = {
        srcXs: '/img/courses/2019q3-courses-flexi-001--sm.png',
        alt: ''
    }
    /**@type SubTopicCardProps */
    const intensiveCardProps = {
        title: 'ОБЩИЙ КУРС',
        text: '',
        readMoreRoute: shortTerm.intensive,
    }
    /**@type pictureProps */
    const intensiveCardPic = {
        srcXs: '/img/courses/2019q3-courses-flexi-001--sm.png',
        alt: ''
    }
    /**@type SubTopicCardProps */
    const businessCardProps = {
        title: 'БИЗНЕС КУРСЫ',
        text: '',
        readMoreRoute: shortTerm.business,
    }
    /**@type pictureProps */
    const businessCardPic = {
        srcXs: '/img/courses/2019q3-courses-flexi-001--sm.png',
        alt: ''
    }

    /* why choose a flexible course icons */

    /**@type IconsAndTextBlock01Props */
    const icons = {
        items: [
            {
                iconUnicode: "⚖",
                title: "Сбалансированное под Ваши нужды",
                text: "Краткосрочный курс легко забронировать. Частые акции и скидки. Подстраиваемые под любые особенности графика, целей изучения, и начального уровня языка."
            },
            {
                iconUnicode: "⏱",
                title: "Контроль над временем и нагрузкой",
                text: "Если Вы хотите совместить отдых на море с полезными уроками - выбирайте умеренный учебный план. Хотите выжать максимум - к Вашим услугам интенсивные программы и дополнительные занятия"
            },
            {
                iconUnicode: "🏆",
                title: "Результат начиная от 1й недели",
                text: "Английский с погружением в языковой среде всегда эффективен. Вы почувствуете результат даже если посетите только 1у неделю."
            },
            
        ]
    };

    return (
        <React.Fragment>
            <OverlayWithTitleAndText pic={pic} cardProps={heroCardProps} />
            <div className="my-1"></div>
            <Container>
                <Row>
                    <Col className='text-center'>
                    <p className='font-weight-bold' style={{fontSize:'1.5em'}}>КРАТКОСРОЧНЫЕ ПРОГРАММЫ - САМОЕ ПОКУПАЕМОЕ ПРЕДЛОЖЕНИЕ</p>
                    <p>Наиболее востребованные курсы. Краткосрочные программы от 1 до 8-12 недель. Под любые нужды и цели позедки. Вечерние и утренние классы, умеренная и интенсивная учебная нагрузка.</p>
                    </Col>
                </Row>
            </Container>
            <div className="my-1"></div>
            <Container>
                <CardDeck>
                    <SubTopicCard cardProps={flexiCardProps} pic={flexiCardPic} />
                    <SubTopicCard cardProps={intensiveCardProps} pic={intensiveCardPic} />
                    <SubTopicCard cardProps={businessCardProps} pic={businessCardPic} />
                </CardDeck>
            </Container>
            <div className='my-1'></div>
            <Container className='position-relative'>
                {/* <div className='container-blue-bg'></div> */}
                <IconsAndTextBlock01 blockProps={icons} />
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

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(CoursesFlexiblePage);