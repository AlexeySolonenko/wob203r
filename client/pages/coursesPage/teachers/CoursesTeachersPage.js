import React from 'react';
import { connect } from 'react-redux';
import GroupOfCourses from '../template/GroupOfCourses.js';

/**
* @typedef import("../../../typedefs/microComponents/SubTopicCard.js").SubTopicCardProps
*/

/**
* @typedef import("../../../typedefs/navTypeDefs.js").wob203rRoutes
*/

 /**
 * @typedef import("../../../typdefs/pages/coursesPage/tempalte/GroupOfCourses.js").GroupOfCoursesProps
 */



/**
 * 
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const CoursesTeachersPage = ({ allowedRoutes }) => {
   
    const teachers = allowedRoutes.mainTree.courses.teachers.selfNav;

/**@type {GroupOfCoursesProps} */
const modelData = {
    heroCard : {
        pictureProps: {
            srcXs: '/img/courses/2019q3-courses-teachers-001--xs.png',
            srcSm: '/img/courses/2019q3-courses-teachers-001--sm.png',
            alt: 'A female and maile posing in front of a camera holding their completion certificates',
        },
        title: 'УЧИТЕЛЬСКИЕ СЕРТИФИКАТЫ',
        text: 'Подготовка и аккредитация преподавателей английского языка по международным стандартам',
    },
    underHeroCardGreeting: 'Новые возможности, новая ступень карьеры.',
    underHeroCardText: 'Международная официальная сертификация. Доступ к преподаванию в большинстве профессиональных школ мира. Новый уровень профессионального развития.',
    subTopicCards:[
        {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-teachers-001--xs.png'
            },
            readMoreRoute: teachers,
            text:'',
            title: 'CELTA - Свидетельство о проверке знаний по преподаванию английского языка взрослым по стандартам Кэмбридж',
        }
    ],
    icons: {
        blockClass: '',
        items: [
            {
                iconUnicode: '🤝',
                text: 'Подготовка включает учебную и практическую части. Вы получите уникальный опыт преподавания международной аудитории. Возможно, никто из Ваших студентов не будет говорить на Вашем родном языке!',
                title: 'Прикладные программы и практика',
            },
            {
                iconUnicode: '🚀',
                text: 'Новые профессиональные знакомства, международная сертификация. Стоящий вклад в Ваш профессиональный и карьерный рост.',
                title: 'Новые возможности',
            },
            {
                iconUnicode: '🌐',
                text: 'Обучение, стажировки и проверка знаний проводятся организациями, имеющими соответствующие международные аккредитации.',
                title: 'Международные стандарты',
            }       
        ],
    }
 }

    return (
       <GroupOfCourses  modelData={modelData} />
    );
};

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(CoursesTeachersPage);