import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
const CoursesFamilyFullPage = ({ allowedRoutes }) => {

    const coursesRoutes = allowedRoutes.mainTree.courses;

    /**
     * @todo to add hot offers to read more of a program structure 
     */

    /**@type {KindOfCoursesProps} */
    const k = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-flexi-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-flexi-001--sm.png',
                alt: 'Russian rising star cameraman in a tuxedo in a dance hug with a young slim lady in red. Both on a red velvet carpet in Cannes on a cinema international event.'
            },
            title: "АНГЛИЙСКИЙ ВСЕЙ СЕМЬЕЙ",
            text: 'Взрослый (или взрослые) проходят обучение в то же время, что и дети в разных классах.'
        },
        underHeroCardGreeting: 'УДОБНО, ЭКОНОМНО, ПРАКТИЧНО - ПОЛЬЗА ДЛЯ ВСЕЙ СЕМЬИ',
        description: 'Курсы для всей семьи , это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ',
        factSheet: {
            courseLength: "1-4 недель",
            entryLevel: "Любой",
            minAge: "3 года и 18 лет",
            lessonHours: "45 минут",
            classSize: "Средн. 12, макс. 15",
            timeTable: "Понедельник-Пятница.",
            courseStructure: [
                "20 уроков Общего Курса Английского (15 часов) для взрослых",
                "20 уроков Общего Курса Английского (15 часов) для детей",
                "Опция - детский сад на английском",
            ],
        },
        programStructure: {
            items: [
                {
                    headerText: "ВЗРОСЛЫЕ",
                    contentText: (<div>"Взрослые могут выбрать любой курс 18+. <Link to={coursesRoutes.selfNav.path}>Смотрите Курсы для взрослых.</Link> Чаще всего это краткосрочный курс, или же несколько занятий в мини-группах."</div>),
                    type: 'included',
                    price: 'от 162€',
                },
                {
                    headerText: "ДЕТИ",
                    contentText: (<div>"Для детей предусмотрены либо курсы для школьников, либо детский сад на английском. <Link to={coursesRoutes.family.selfNav.path}>Смотрите курсы для детей здесь!.</Link>"</div>),
                    type: 'included',
                },            
            ]
        },
    };


    return (
        <KindOfCourses pageData={k} />
    );
}

//export default CoursesFamilyFullPage;

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(CoursesFamilyFullPage);