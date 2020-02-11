import React from 'react';
import { connect } from 'react-redux';
import CardWithListGroup from '../../../microComponents/CardWithListGroup.js';
/**
 * @typedef import('../../../typedefs/navTypeDefs.js').wob203rRoutes
 */

/**
 * 
 * @typedef import('../../../typedefs/microComponents/Picture01.js').pictureProps
 */

/**
* @typedef import('../../../typedef/microComponents/ListGroup01WhitedProps.js').ListGroup01WhitedProps
*/

/*
xs = 4:9 or 3:9
md 3:16
lg 6:16
xl 3:16
*/

/**
 * @function
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 * @param {Object} props.viewParams
 */
const AdultCourses = ({ allowedRoutes, viewParams }) => {
    /** @type pictureProps */
    const pic = {};
    pic.srcXs = '/img/courses/2019q3-courses-main-all-adults--xs.png';
    pic.srcMd = '/img/courses/2019q3-courses-main-all-adults--md.png';
    pic.srcLg = '/img/courses/2019q3-courses-main-all-adults--lg.png';
    pic.alt = 'Three adults discussing courses in the corridor. One of them may be a school representattive.';

    const courses = allowedRoutes.mainTree.courses;
    /**@type {ListGroup01WhitedProps} */
    const adultCoursesList = {
        items:
            [
                {
                    to: courses.shortTerm.selfNav.path,
                    intl: 'Краткосрочные гибкие программы для любых нужд',
                    title: courses.shortTerm.selfNav.intl,
                },
                {
                    to: courses.business.selfNav.path,
                    intl: 'Прикладной английски по профессиям, бизнес.',
                    title: courses.business.selfNav.intl,
                },
                {
                    to: courses.longTerm.selfNav.path,
                    intl: 'Подготовка к ВУЗам, погружение от 6 мес., наука.',
                    title: courses.longTerm.selfNav.intl,
                },
                {
                    to: courses.certs.selfNav.path,
                    intl: 'Международные экзамены. Подготовка и сдача. IELTS, Cambridge. ',
                    title: courses.certs.selfNav.intl,
                },
                {
                    to: courses.teachers.selfNav.path,
                    intl: 'Обучение и международная сертификация преподавателей английского ',
                    title: courses.teachers.selfNav.intl,
                },
            ]
    };

    return (
        <CardWithListGroup pic={pic} listProps={adultCoursesList} />
    );
};

const mapStateToProps = ({ allowedRoutes, viewParams }) => ({ allowedRoutes, viewParams });

export default connect(mapStateToProps)(AdultCourses);