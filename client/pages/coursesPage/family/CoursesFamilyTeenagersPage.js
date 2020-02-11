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
const CoursesFamilyTeenagersPage = ({ allowedRoutes }) => {

    /**
     * @todo to add hot offers to read more of a program structure 
     */

    /**@type {KindOfCoursesProps} */
    const k = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-family-teenagers-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-family-teenagers-001--sm.png',
                alt: 'Group of students in a hall of a school.'
            },
            title: "КУРСЫ ДЛЯ ПОДРОСТКОВ",
            text: 'Учебные программы английского языка с проживанием и надзором за детьми.'
        },
        underHeroCardGreeting: 'ОТЛИЧНАЯ ПОДГОТОВКА К СТАРШИМ КЛАССАМ И ПОСЛЕШКОЛЬНОЙ ЖИЗНИ',
        description: "Курсы для подростков  , это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ",
        factSheet: {
            courseLength: "2 недель",
            entryLevel: "Любой",
            minAge: "14-18 лет",
            lessonHours: "45 минут",
            classSize: "Средн. 12, макс. 15",
            timeTable: "Все дни, занятия и внеклассные мероприятия",
            courseStructure: [
                "20 уроков Общего Курса Английского (15 часов)",
                "Дополнительные занятия"
            ],
        },
        programStructure: {
            items: [
                {
                    heroText: '20',
                    headerText: "УРОКОВ В НЕДЕЛЮ (22.5 ЧАСОВ)",
                    contentText: "Занятия со сверстниками. Основной упор на общение и письмо - навыки, которые даются ученикам тяжелее всего в их родных странах (статистика).",
                    type: 'included',
                    price: 'от 162€',
                },
                {
                    headerText: "МЕРОПРИЯТИЯ",
                    contentText: "Английский не ограничивается стенами школы. Расписание подростков расписано по часам. Основное время в плотном графике уделено общению, социализации, и небольшой разгрузке после интенсивных занятий.",
                    type: 'included',
                },
                {
                    headerText: 'ДОПОЛНИТЕЛЬНЫЕ ЗАНЯТИЯ',
                    contentText: "Амбициозные ребята занимаются в дополнительных малых группах, .",
                    type: "optional"
                }
                ,
            ]
        },
    };


    return (
        <KindOfCourses pageData={k} />
    );
}

export default CoursesFamilyTeenagersPage;

//const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

//export default connect(mapStateToProps)(CoursesFlexibleGeneralPage);