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
                srcXs: '/img/courses/2019q3-courses-flexi-001--sm.png',
                alt: 'Group of students in a class. A teacher is showing to students two cartoon cut hand-drawn smiley faces.'
            },
            title: 'ОБЩИЕ АДАПТИВНЫЕ ПРОГРАММЫ',
            text: 'Учебный план, подстроенный под Ваши нужды и график.'
        },
        underHeroCardGreeting: 'АНГЛИЙСКИЙ КАК ДОПОЛНЕНИЕ К ВАШЕЙ ПОЕЗДКЕ',
        description: ' ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ываваываыфвафывафываф ',
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