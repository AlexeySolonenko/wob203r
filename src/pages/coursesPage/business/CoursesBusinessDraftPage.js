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
                srcXs: '/img/courses/2019q3-courses-flexi-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-flexi-001--sm.png',
                alt: 'Russian rising star cameraman in a tuxedo in a dance hug with a young slim lady in red. Both on a red velvet carpet in Cannes on a cinema international event.'
            },
            title: "КРАТКОСРОЧНЫЕБИЗНЕС КУРСЫ",
            text: 'Бизнес английский общего профиля, и специализированные программы.'
        },
        underHeroCardGreeting: 'ИНВЕСТИЦИЯ В РАЗВИТИЕ И ЭФФЕКТИВНОСТЬ ТРУДА',
        description: ' Английский для бизнеса то, это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ',
        factSheet: {
            courseLength: "1-4 недель",
            entryLevel: "Любой",
            minAge: "16 лет",
            lessonHours: "45 минут",
            classSize: "Средн. 12, макс. 16",
            timeTable: "Понедельник-Пятница. Утренние и вечерние",
            courseStructure: [
                "20 уроков Общего Курса Английского (15 часов)",
                "Платные опции"
            ],
        },
        programStructure: {
            items: [
                {
                    heroText: '20',
                    headerText: "УРОКОВ ОБЩЕГО АНГЛИЙСКОГО (15 ЧАСОВ)",
                    contentText: "Курсы Общего Английского позволяют улучшить все основные навыки владения языком: письмо, речь, чтение, аудирование, грамматика, словарный запас.",
                    type: 'included',
                    price: 'от 162€',
                },
                {
                    headerText: 'ДИСКУСИОННЫЕ ГРУППЫ',
                    contentText: "Дискуссионные группы позволяют улучшить коммуникативные навыки, навыки выступления перед аудиторией, риторики на английском. Для начинающих - верное средство сломить языковой барьер.",
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