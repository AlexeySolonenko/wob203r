import React from 'react';
import { connect } from 'react-redux';
import GroupOfCourses from '../template/GroupOfCourses.js';

/**
* @typedef import('../template/GroupOfCourses.js').GroupOfCoursesProps
*/

/**
 * 
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const CoursesFlexiblePage = ({ allowedRoutes }) => {

    const shortTerm = allowedRoutes.mainTree.courses.shortTerm;

    /**@type {GroupOfCoursesProps} */
    const modelData = {
        heroCard: {
            pictureProps: {
                srcXs: '/img/courses/2019q3-courses-flexi-001--xs.png',
                srcSm: '/img/courses/2019q3-courses-flexi-001--sm.png',
                alt: 'Group of students in a class. A teacher is showing to students two cartoon cut hand-drawn smiley faces.',
            },
            text: 'АДАПТИВНЫЕ КУРСЫ АНГЛИЙСКОГО',
            title: 'Учебные планы подстроенные под Ваш бюджет, график и нужды',
        },
        underHeroCardGreeting: 'КРАТКОСРОЧНЫЕ ПРОГРАММЫ - САМОЕ ПОКУПАЕМОЕ ПРЕДЛОЖЕНИЕ',
        underHeroCardText: 'Наиболее востребованные курсы. Краткосрочные программы от 1 до 8-12 недель. Под любые нужды и цели позедки. Вечерние и утренние классы, умеренная и интенсивная учебная нагрузка.',
        subTopicCards: [
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-flexi-001--sm.png',
                    alt: ''
                },
                title: 'ИНТЕНСИВНЫЙ КУРС',
                text: 'Максимальная отдача за минимальное время. Вы можете либо усилить общий прогресс по всем направлениям, либо сфокусироваться на дополнительной узкой тематике или навыке, необходимым Вам',
                readMoreRoute: shortTerm.intensive,
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-flexi-001--sm.png',
                    alt: ''
                },
                title: 'ОБЩИЙ КУРС',
                text: 'Идеальный баланс отдыха и учебного времени. Помните, что море совсем рядом, в большинстве случаев - в пешей доступности!',
                readMoreRoute: shortTerm.flexi,
            },
            {
                pictureProps: {
                    srcXs: '/img/courses/2019q3-courses-flexi-001--sm.png',
                    alt: ''
                },
                title: 'ВЕЧЕРНИЕ ЗАНЯТИЯ И ФАКУЛЬТАТИВЫ',
                text: 'Курсы, предназначенные для сотрудников компаний, начинающих специалистов, а также предпринимателей.',
                readMoreRoute: shortTerm.business,
            },

        ],
        icons: {
            items:
                [
                    {
                        iconUnicode: "⚖",
                        title: "Сбалансированное под Ваши нужды",
                        text: "Краткосрочный курс легко забронировать. Частые акции и скидки. Подстраиваемые под любые особенности графика, целей изучения, и начального уровня языка."
                    },
                    {
                        iconUnicode: "⏱",
                        title: "Контроль над временем и нагрузкой",
                        text: "Если Вы хотите совместить отдых на море с полезными уроками - выбирайте умеренный учебный план. Хотите выжать максимум - к Вашим услугам интенсивные программы и дополнительные занятия"
                    },
                    {
                        iconUnicode: "🏆",
                        title: "Результат начиная от 1й недели",
                        text: "Английский с погружением в языковой среде всегда эффективен. Вы почувствуете результат даже если посетите только 1у неделю."
                    },
                ],
        },
    };

    return (
        <GroupOfCourses modelData={modelData} />
    );
};

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(CoursesFlexiblePage);