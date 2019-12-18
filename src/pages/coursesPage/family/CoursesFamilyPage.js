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
const CoursesFamilyPage = ({ allowedRoutes }) => {
    const family = allowedRoutes.mainTree.courses.family;

    /**@type {GroupOfCoursesProps} */
    const modelData = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-family-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-family-001--sm.png',
                alt: 'Young students in a class with a women who is making photos of them.',
            },
            title: 'КУРСЫ ДЛЯ ДЕТЕЙ И ПОДРОСТКОВ',
            text: 'Курсы для для самых маленьких, для детей постарше и подростков. Занятия в школе и летние лагеря',
        },
        underHeroCardGreeting: 'ДЕТСКИЕ И СЕМЕЙНЫЕ ПРОГРАММЫ',
        underHeroCardText: 'Дети постарше могут учиться самостоятельно с проживанием в детских лагерях. С детьми поменьше родители могут как приехать на средиземноморский отдых, так и посещать умеренные по нагрузке курсы английского в удобное время.',
        subTopicCards: [
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-teenagers-001--xs.png'
                },
                readMoreRoute: family.teenagers,
                title: 'КУРСЫ ДЛЯ ПОДРОСТКОВ С ПРОЖИВАНИЕМ',
                text: 'Погружение в языковую среду. Уникальная возможность для подростков освивать язык в учебное, и внешкольное время.',
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-summer-camp-001--xs.png'
                },
                readMoreRoute: family.summerCamp,
                title: 'ЛЕТНИЙ ЛАГЕРЬ',
                text: 'Погружение в языковую среду. Уникальная возможность для подростков освивать язык в учебное, и внешкольное время.',
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-001--xs.png'
                },
                readMoreRoute: family.kids,
                title: 'ДЛЯ САМЫХ МАЛЕНЬКИХ',
                text: 'Программы для детей от 3 лет. Детские сады для малышей для родителей, обучающихся на долгосрочных программах.',
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-family-001--xs.png'
                },
                readMoreRoute: family.fullFamily,
                title: 'КОМПЛЕКСНЫЕ ПРОГРАМЫ ДЛЯ ДЕТЕЙ И РОДИТЕЛЕЙ',
                text: 'Дети и родители обучаются в соседних классах в одинаковое время. Гибкость графика.',
            },
        ],
        icons: {
            items: [
                {
                    iconUnicode: "👶",
                    title: "Развитие ребенка с ранних лет",
                    text: "Занятия для детей от 5 лет. Маленькие групппы, игровая форма обучения. Индивидуальный подход к ребенку."
                },
                {
                    iconUnicode: "🎓",
                    title: "Подготовка подростков к экзаменам",
                    text: "Отличный способ подтянуть слабые места и провести общую подготовку к будущим экзаменам и поступлению в после-школьные образовательные учреждения."
                },
                {
                    iconUnicode: "👨‍👩‍👧‍👦",
                    title: "Гибкость и открытость для нужд детей и родителей",
                    text: "Удобные расписания, географическая близость локаций, полностью открытые школы и преподаватели."
                },
            ],
        }
    }

    return (
        <GroupOfCourses modelData={modelData} />
    );
};

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(CoursesFamilyPage);