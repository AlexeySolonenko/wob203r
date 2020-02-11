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
const CoursesLongTermPage = ({ allowedRoutes }) => {
    const family = allowedRoutes.mainTree.courses.family;
    /**@type  */
    const pic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--xs.png',
        srcSm: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: 'Group of students in a class. A teacher is showing to students two cartoon cut hand-drawn smiley faces.',
    }

    const heroCardProps = {
        title: 'ДОЛГОСРОЧНЫЕ ПРОГРАММЫ',
        text: 'Программы фундаментальной подготовки. Академические и профессиональные. Неоценимый вклад в будущее.'
    };

    /**@type SubTopicCardProps */
    const semestrCardProps = {
        title: 'АКАДЕМИЧЕСКИЙ СЕМЕСТР',
        text: 'Оптимальное соотношение цены и эффективности. Отличное подспорье готовящимся к защите, к продвижению компании на мировые рынки.',
        readMoreRoute: family.selfNav,
    }
    /**@type pictureProps */
    const semestrCardPic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: ''
    }
    /**@type SubTopicCardProps */
    const yearCardProps = {
        title: 'АКАДЕМИЧЕСКИЙ ГОД',
        text: 'Программа углубленного изучения языка и всесторонней подготовки по разным академическим и прикладным направлениям.',
        readMoreRoute: family.selfNav,
    }
    /**@type pictureProps */
    const yearCardPic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: ''
    }
    /**@type SubTopicCardProps */
    const uniCardProps = {
        title: 'ПОДГОТОВКА К ПОСТУПЛЕНИЮ В ВУЗ',
        text: 'Целевые программы для подготовки к поступлению на любой уровень программы (бакалавриат, магистратура и пр.). Возможна специализация по направлениям.',
        readMoreRoute: family.selfNav,
    }
    /**@type pictureProps */
    const uniCardPic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: ''
    }

    /* why choose a flexible course icons */

    /**@type IconsAndTextBlock01Props */
    const icons = {
        items: [
            {
                iconUnicode: "💪",
                title: "Вклад в собственное профессиональное и личное развитие",
                text: "Эффективное образование. Приобретенные навыки будут востребованы как в профессии, так и в личной жизни, и в становлении социального положения."
            },
            {
                iconUnicode: "🌐",
                title: "Международные знакомства и связи",
                text: "Студенты и со всего мира. Погружение в международную академическую и профессиональную среду. Деловые контакты, и широкий круг знакомых по интересам. Многие выпускники поддерживают связь годами."
            },
            {
                iconUnicode: "🎓‍",
                title: "Надежный способ подготовиться к экзаменам",
                text: "Очное или заочное повышение квалификации, или учена степен. В любом случае нужно быть готовым не только успешно поступить, но и быть готовым эффективно и с минимальной затратой усилий учиться, особенно на английском. Подготовка по английскому языку - одна из важнейших составляющих успеха."
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
                    <p className='font-weight-bold' style={{fontSize:'1.5em'}}>ВЫХОД НА НОВУЮ СОЦИАЛЬНУЮ И КАРЬЕРНУЮ СТУПЕНЬ</p>
                    <p>Повышение уровня языка до уровня, необходимого для поступления в ВУЗ, на академическую программу, для профессиональной или научной деятельности. Это серьезные учебные планы, требующие большой дисциплины и труда от учеников.</p>
                    </Col>
                </Row>
            </Container>
            <div className="my-1"></div>
            <Container>
                <CardDeck>
                    <SubTopicCard cardProps={semestrCardProps} pic={semestrCardPic} />
                    <SubTopicCard cardProps={yearCardProps} pic={yearCardPic} />
                    <SubTopicCard cardProps={uniCardProps} pic={uniCardPic} />
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

export default connect(mapStateToProps)(CoursesLongTermPage);