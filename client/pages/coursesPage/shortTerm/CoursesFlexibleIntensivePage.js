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
            title: "ИНТЕНСИВНЫЕ КУРСЫ",
            text: 'Обязательный прогресс в кратчайшие сроки. Программы для тех, кто готов учиться и трудиться.'
        },
        underHeroCardGreeting: 'КОГДА ДЕЛУ ВРЕМЯ',
        description: ' Интенсивная программа , это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ',
        factSheet: {
            courseLength: "1-4 недель",
            entryLevel: "Любой",
            minAge: "16 лет",
            lessonHours: "45 минут",
            classSize: "Средн. 12, макс. 15",
            timeTable: "Понедельник-Пятница. Утренние и вечерние",
            courseStructure: [
                "20 уроков Общего Курса Английского (15 часов)",
                "10 дополнительных уроков Общего Английского",
                "Факультативы",
                "Платные опции"
            ],
        },
        programStructure: {
            items: [
                {
                    heroText: '30',
                    headerText: "УРОКОВ В НЕДЕЛЮ (22.5 ЧАСОВ)",
                    contentText: "Интенсивный курс отличается продленым учебным временем и расширенным домашним заданием. И Вам не придется скучать с одноклассниками.",
                    type: 'included',
                    price: 'от 162€',
                },
                {
                    headerText: "В ЧЕМ ИНТЕНСИВ",
                    contentText: "Дополнительная нагрузка может направлена как на проработку по всем направлениям, так и на необходимые специализированные области.",
                    type: 'included',
                },
                {
                    headerText: 'ФАКУЛЬТАТИВЫ',
                    contentText: "Многие программы предлагают такие факультативы как дискуссионные группы, чтение, библиотеки, мультимедийные классы для дополнительных занятий в послеучебное время. Часть бесплатна, часть предлагается по специальным ценам.",
                    type: "optional"
                }
                ,
                {
                    headerText: 'ПЛАТНЫЕ ОПЦИИ',
                    contentText: "Индивидуальные занятия, дополнительные уроки в парах и минигруппах. Интенсивный курс предназначен для достижения устойчивого результата",
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