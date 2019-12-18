import React from 'react';
import { connect } from 'react-router-dom';
import KindOfCourses from '../template/KindOfCourses.js';

/**
 * @typedef import('../../../typedefs/navTypeProps.js').wob203rRoutes
 */

/**
 * @typedef ('../template/KindOfCourses.js').KindOfCoursesProps
 */

/**
 * @function
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const CoursesFlexibleGeneralPage = ({ allowedRoutes }) => {

    /**
     * @todo to add hot offers to read more of a program structure 
     */

    /**@type {KindOfCoursesProps} */
    const k = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-business-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-business-001--sm.png',
                alt: 'Russian rising star cameraman in a tuxedo in a dance hug with a young slim lady in red. Both on a red velvet carpet in Cannes on a cinema international event.'
            },
            title: "ИНТЕНСИВНЫЕ БИЗНЕС КУРСЫ",
            text: 'Интенсивные курсы и сколько угодно домашних заданий, материалов, и факультативов.'
        },
        underHeroCardGreeting: 'ПОЛНАЯ ОТДАЧА',
        description: ' Интенсивный бизнес-английский то, это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ',
        factSheet: {
            courseLength: "1-4 недель",
            entryLevel: "Любой",
            minAge: "16 лет",
            lessonHours: "45 минут",
            classSize: "Средн. 12, макс. 16",
            timeTable: "Понедельник-Пятница.",
            courseStructure: [
                "30 уроков Общего Курса Английского (22.5 часов)",
                "Платные опции"
            ],
        },
        programStructure: {
            items: [
                {
                    heroText: '30',
                    headerText: "УРОКОВ ИНТЕНСИВНОГО АНГЛИЙСКОГО (15 ЧАСОВ)",
                    contentText: "Интенсивный курс бизнес-английского фокусируется на тематиках, важных для работы: переговоры, переписка, запросы, аргументация, защита позиции.",
                    type: 'included',
                    price: 'от 162€',
                },
                {
                    headerText: 'ПЛАТНЫЕ ОПЦИИ',
                    contentText: "Опытные и сертифицированные преподаватели будут рады помочь отточить любой из требуемых Вами узкопрофильных навыков.",
                    type: "optional"
                }
            ]
        },
    };


    return (
        <KindOfCourses pageData={k} />
    );
}

export default CoursesFlexibleGeneralPage;

//const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

//export default connect(mapStateToProps)(CoursesFlexibleGeneralPage);