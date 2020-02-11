import React from 'react';
import { connect } from 'react-redux';
import GroupOfCourses from '../template/GroupOfCourses.js';

/**
* @typedef import("../../../typedefs/navTypeDefs.js").wob203rRoutes
*/

/**
 * @typedef import('../template/GroupOfCourses.js').GroupOfCoursesProps
 */

/**
 * 
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const CoursesBusinessPage = ({ allowedRoutes }) => {

    const business = allowedRoutes.mainTree.courses.business;
    
    /**@type {GroupOfCoursesProps} */
    const modelData = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-longterm-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-longterm-001--sm.pngg',
                alt: 'Group of students in a class. A teacher is showing to students two cartoon cut hand-drawn smiley faces.',
            },
            title: 'КУРСЫ БИЗНЕС АНГЛИЙСКОГО',
            text: 'Займите свое место на международном рынке труда, или продвиньте свой бизнес на новую высоту.',
        },
        underHeroCardGreeting: 'ДЛЯ ТЕХ, КТО ВСЕГДА ДОСТИГАЕТ БОЛЬШЕГО',
        underHeroCardText: 'Язык международного бизнеса и технологий. Уверенный следующий шаг Вашего дела или карьеры.',
        subTopicCards: [
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png'
                },
                readMoreRoute: business.general,
                title: 'ОБЩИЕ КУРСЫ',
                text: 'Эффективные программы подготовки, ориентированы на подготовку кадров. Вы увидите не только улучшение уровня языка, но и хорошую встряску прочим "мозговым" навыкам (мышление, анализ, описание, изложение, краткость).',
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-summer-camp-001--xs.png'
                },
                readMoreRoute: business.intensive,
                title: 'ИНТЕНСИВНЫЕ КУРСЫ',
                text: 'Углубленные курсы предоставляют дополнительные возможности сфокусироваться на своей профессиональной нише.',
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-longterm-001--sm.png'
                },
                readMoreRoute: business.target,
                title: 'ЦЕЛЕВЫЕ ПРОГРАММЫ',
                text: 'Если Вам необходимо подготовиться по строго узко-направленной тематике (горное дело, туризм, стоматология и пр.). Или если Вам необходимо подготовиться к конкретному проекту или мероприятию (международная сертификация, презентация продукта, защита бюджета, и пр.).',
            },
        ],
        icons: {
            items: [
                {
                    iconUnicode: "🚀",
                    title: "Прикладные практика и знания",
                    text: "Учебный план, задания, материалы постоянно обновляются и соответствуют реальным применимым ситуациям и проектам."
                },
                {
                    iconUnicode: "🎓",
                    title: "Международные связи",
                    text: "Знакомьтесь с профессионалами со всего мира в Вашей школе. Уникальная возможность наладить контакты в учебной, и послеучебной атмосфере."
                },
                {
                    iconUnicode: "💰",
                    title: "Оправданный и эффективный вклад в себя или бизнес",
                    text: "Курсы пользуются огромным спросом в корпоративном секторе. Компании и гос. службы со всего мира отправляют специалистов в рамках плановых программ повышения квалификации, а также в качестве поощрения за трудовые достижения."
                },
            ],
        }
    };

  
    return (<GroupOfCourses modelData={modelData} />);
};

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(CoursesBusinessPage);