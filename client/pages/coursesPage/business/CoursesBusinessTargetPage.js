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
const CoursesBusinessTargetPage = ({ allowedRoutes }) => {

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
            title: "ЦЕЛЕВЫЕ КУРСЫ БИЗНЕС АНГЛИЙСКОГО",
            text: 'Курсы по профессиональным направлениям, курсы для подготовки к проекту или мероприятию.'
        },
        underHeroCardGreeting: 'ЕСЛИ ЗНАЕШЬ, ЧЕГО ТЫ ХОЧЕШЬ, ТЫ ЭТО ПОЛУЧИШЬ',
        description: ' Английский для бизнеса то, это то это то это то это   это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это  это то это то это то это ',
        factSheet: {
            courseLength: "1-4 недель",
            entryLevel: "Любой",
            minAge: "18 ?  лет",
            lessonHours: "45 минут",
            classSize: "1, минигруппы, стандарт.",
            timeTable: "Понедельник-Пятница",
            courseStructure: [
                "Целевые занятия по согласованной программе",
                "Как правило 20 или 30 уроков в неделю",
                "Индивидуальные занятия",
                "Минигруппы",
                "Дополнительные опции"
            ],
        },
        programStructure: {
            items: [
                {
                    headerText: "КОРНЕВЫЕ КУРСЫ",
                    contentText: "Основной курс, вокруг которого построено обучение. Чаще всего курсы для мини-групп от работодателя. Например, подшипниковое производство, ортодонтология, и пр.",
                    type: 'included',
                },
                {
                    headerText: 'ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ',
                    contentText: "Занятия отличает не только интенсивность работы педагога со студентом, но и валовый объем учебных материалов и домашних заданий. ",
                    type: "optional"
                },
                {
                    headerText: 'КУРСЫ ПО НАПРАВЛЕНИЯМ',
                    contentText: "Мальта предоставляет широкий спектр курсов по профессиональным специализациям. По запросу школа выполняет индивидуальную подготовку материалов и педагога под заказчика. Клиентами Мальты являются практически все ведущие европейские компании и корпорации.",
                    type: "optional"
                },
                {
                    headerText: 'ПОДГОТОВКА К ПРОЕКТУ ИЛИ МЕРОПРИЯТИЮ',
                    contentText: "Вывод продукта на новые рынки, или принятие партнерства в международном проекте - ответственные шаги, к которым нужно быть готовым. На Мальте Вас или Ваших сотрудников подготовят точно в соответствии с конкретным запросом (выставка, подряд, презентация, аудит, и пр.).",
                    type: "optional"
                }
            ]
        },
    };


    return (
        <KindOfCourses pageData={k} />
    );
}

export default CoursesBusinessTargetPage;

//const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

//export default connect(mapStateToProps)(CoursesFlexibleGeneralPage);