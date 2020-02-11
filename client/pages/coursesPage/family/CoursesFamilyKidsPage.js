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
const CoursesFamilyKidsPage = ({ allowedRoutes }) => {

    /**
     * @todo to add hot offers to read more of a program structure 
     */

    /**@type {KindOfCoursesProps} */
    const k = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-family-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-family-001--sm.png',
                alt: 'Kids in a class posing in front of a photo cam. A women is on the background also shooting the kids.'
            },
            title: "КУРСЫ ДЛЯ ДЕТЕЙ И МАЛЫШЕЙ",
            text: 'Английский для школьников, и для малышей дошкольников.'
        },
        underHeroCardGreeting: 'УМСТВЕННОЕ И СОЦИАЛЬНОЕ РАЗВИТИЕ РЕБЕНКА С РАННИХ ЛЕТ',
        description: ' Курсы для малышей , это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ',
        factSheet: {
            courseLength: "1-52 недель",
            entryLevel: "Любой",
            minAge: "3 года?",
            lessonHours: "45 минут ?",
            classSize: "Средн. 12, макс. 15",
            timeTable: "Понедельник-Пятница.",
            courseStructure: [
                "20 уроков Общего Курса Английского (15 часов)",
            ],
        },
        programStructure: {
            items: [
                {
                    heroText: '20',
                    headerText: "УРОКОВ В НЕДЕЛЮ (15 ЧАСОВ)",
                    contentText: "Занятия в игровой форме для малышей. И в формате школьного обучения для ребят постарше.",
                    type: 'included',
                    price: 'от 162€',
                },
                {
                    headerText: "ДЕТСКИЙ САД НА АНГЛИЙСКОМ",
                    contentText: "Детский сад на английском, это отдельная программа для самых маленьких студентов.",
                    type: 'optional',
                },
            ]
        },
    };


    return (
        <KindOfCourses pageData={k} />
    );
}

export default CoursesFamilyKidsPage;

//const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

//export default connect(mapStateToProps)(CoursesFlexibleGeneralPage);