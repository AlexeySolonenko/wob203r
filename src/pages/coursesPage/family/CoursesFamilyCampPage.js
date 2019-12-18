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
const CoursesFamilyCampPage = ({ allowedRoutes }) => {

    /**
     * @todo to add hot offers to read more of a program structure 
     */

    /**@type {KindOfCoursesProps} */
    const k = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-family-summer-camp-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-family-summer-camp-001--sm.png',
                alt: 'Russian rising star cameraman in a tuxedo in a dance hug with a young slim lady in red. Both on a red velvet carpet in Cannes on a cinema international event.'
            },
            title: "ЛЕТНИЙ ЛАГЕРЬ",
            text: 'Прекрасное дополнение к летним школьным каникулам. Английский, море, солнце, иностранные ровестники со всего света.'
        },
        underHeroCardGreeting: 'КАЧЕСТВЕННЫЙ ПОДЪЕМ УРОВНЯ АНГЛИЙСКОГО И СОЦИАЛИЗАЦИЯ В МЕЖДУНАРОДНОЙ СРЕДЕ',
        description: ' Летний лагерь для подростков  , это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ',
        factSheet: {
            courseLength: "2 недель",
            entryLevel: "Любой",
            minAge: "16 лет",
            lessonHours: "45 минут",
            classSize: "Средн. 12, макс. 15",
            timeTable: "24х7 2 недели",
            courseStructure: [
                "20 уроков Общего Курса Английского (15 часов)",
                "Полный график внеклассных занятий",
                "Пляж, море и солнце",
                "Платные опции"
            ],
        },
        programStructure: {
            items: [
                {
                    heroText: '20',
                    headerText: "УРОКОВ В НЕДЕЛЮ (15 ЧАСОВ)",
                    contentText: "Отдохнувшие после школьных экзаменов ученики получают замечательную возможность целевой подготовки по английскому языку в стране-носителе.",
                    type: 'included',
                    price: 'от 162€',
                },
                {
                    headerText: "МЕРОПРИЯТИЯ",
                    contentText: "Лето - горячий сезон на Мальте. Помимо знаний, ребята восполняют и дефицит солнца, и моря. Все проходит в смешанной международной среде.",
                    type: 'included',
                },
                {
                    headerText: 'ПЛАТНЫЕ ОПЦИИ',
                    contentText: "Особо усердные ученики могут предпочесть дополнительные занятия походам на пляж, кафе и дискотеки.",
                    type: "optional"
                },
            ]
        },
    };


    return (
        <KindOfCourses pageData={k} />
    );
}

export default CoursesFamilyCampPage;

//const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

//export default connect(mapStateToProps)(CoursesFlexibleGeneralPage);