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
const CoursesBusinessPage = ({ allowedRoutes }) => {
    const business = allowedRoutes.mainTree.courses.business;
    /**@type  */
    const pic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--xs.png',
        srcSm: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: 'Group of students in a class. A teacher is showing to students two cartoon cut hand-drawn smiley faces.',
    }

    const heroCardProps = {
        title: 'КУРСЫ БИЗНЕС АНГЛИЙСКОГО',
        text: 'Займите свое место на международном рынке труда, или продвиньте свой бизнес на новую высоту.'
    };

    /**@type SubTopicCardProps */
    const generalCardProps = {
        title: 'ОБЩИЕ КУРСЫ',
        text: 'Эффективные программы подготовки, ориентированы на подготовку кадров. Вы увидите не только улучшение уровня языка, но и хорошую встряску прочим "мозговым" навыкам (мышление, анализ, описание, изложение, краткость).',
        readMoreRoute: business.selfNav,
    }
    /**@type pictureProps */
    const generalCardPic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: ''
    }
    /**@type SubTopicCardProps */
    const intensiveCardProps = {
        title: 'ИНТЕНСИВНЫЕ КУРСЫ',
        text: 'Углубленные курсы предоставляют дополнительные возможности сфокусироваться на своей профессиональной нише.',
        readMoreRoute: business.selfNav,
    }
    /**@type pictureProps */
    const intensiveCardPic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: ''
    }
    /**@type SubTopicCardProps */
    const targetCardProps = {
        title: 'ЦЕЛЕВЫЕ ПРОГРАММЫ',
        text: 'Если Вам необходимо подготовиться по строго узко-направленной тематике (горное дело, туризм, стоматология и пр.). Или если Вам необходимо подготовиться к конкретному проекту или мероприятию (международная сертификация, презентация продукта, защита бюджета, и пр.).',
        readMoreRoute: business.selfNav,
    }
    /**@type pictureProps */
    const targetCardPic = {
        srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png',
        alt: ''
    }

    /* why choose a flexible course icons */

    /**@type IconsAndTextBlock01Props */
    const icons = {
        items: [
            {
                iconUnicode: "🚀",
                title: "Прикладные практика и знания",
                text: "Учебный план, задания, материалы постоянно обновляются и соответствуют реальным применимым ситуациям и проектам."
            },
            {
                iconUnicode: "🌐",
                title: "Международные связи",
                text: "Знакомьтесь с профессионалами со всего мира в Вашей школе. Уникальная возможность наладить контакты в учебной, и послеучебной атмосфере."
            },
            {
                iconUnicode: "💰",
                title: "Оправданный и эффективный вклад в себя или бизнес",
                text: "Курсы пользуются огромным спросом в корпоративном секторе. Компании и гос. службы со всего мира отправляют специалистов в рамках плановых программ повышения квалификации, а также в качестве поощрения за трудовые достижения."
            },

        ]
    };

    /**@type {GroupOfCoursesProps} */
    const modelData = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-family-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-family-001--sm.png',
                alt: 'Young students in a class with a women who is making photos of them.',
            },
            title: '',
            text: '',
        },
        underHeroCardGreeting: '',
        underHeroCardText: '.',
        subTopicCards: [
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-001--xs.png'
                },
                readMoreRoute: business.selfNav,
                title: 'ЛЕТНИЙ ЛАГЕРЬ',
                text: '.',
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-001--xs.png'
                },
                readMoreRoute: business.selfNav,
                title: 'КУРСЫ ДЛЯ САМЫХ МАЛЕНЬКИХ',
                text: '.',
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-001--xs.png'
                },
                readMoreRoute: business.selfNav,
                title: 'КОМПЛЕКСНЫЕ ПРОГРАМЫ ДЛЯ ДЕТЕЙ И РОДИТЕЛЕЙ',
                text: '',
            },
        ],
        icons: {
            items: [
                {
                    iconUnicode: "👶",
                    title: "",
                    text: "."
                },
                {
                    iconUnicode: "🎓",
                    title: "",
                    text: "."
                },
                {
                    iconUnicode: "👨‍👩‍👧‍👦",
                    title: "",
                    text: "."
                },
            ],
        }
    };

    return (
        <React.Fragment>
            <OverlayWithTitleAndText pic={pic} cardProps={heroCardProps} />
            <div className="my-1"></div>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <p className='font-weight-bold' style={{ fontSize: '1.5em' }}>ДЛЯ ТЕХ, КТО ВСЕГДА ДОСТИГАЕТ БОЛЬШЕГО</p>
                        <p>Язык международного бизнеса и технологий. Уверенный следующий шаг Вашего дела или карьеры.</p>
                    </Col>
                </Row>
            </Container>
            <div className="my-1"></div>
            <div className='w-100 h-auto position-relative py-3' >
                <div className='container-blue-bg'></div>
                <Container>
                    <CardDeck>
                        <SubTopicCard cardProps={generalCardProps} pic={generalCardPic} />
                        <SubTopicCard cardProps={intensiveCardProps} pic={intensiveCardPic} />
                        <SubTopicCard cardProps={targetCardProps} pic={targetCardPic} />
                    </CardDeck>
                </Container>
            </div>
            <div className='my-1'></div>
            <Container >
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

export default connect(mapStateToProps)(CoursesBusinessPage);