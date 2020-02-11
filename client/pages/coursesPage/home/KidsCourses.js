import React from 'react';
import { connect } from 'react-redux';
import CardWithListGroup from '../../../microComponents/CardWithListGroup.js';
/**
 * @typedef import('../../../typedefs/navTypeDefs.js').wob203rRoutes
 */

/**
 * 
 * @typedef import('../../../typedefs/view').pictureProps
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
    pic.srcXs = '/img/courses/2019q3-courses-main-all-family-kids-001--xs.png';
    pic.srcMd = '/img/courses/2019q3-courses-main-all-family-kids-001--md.png';
    pic.srcLg = '/img/courses/2019q3-courses-main-all-family-kids-001--lg.png';
    pic.alt = 'A little boy and two little girls in a classroom standing and making a role play excersice. An adult woman, perhaps, someone\'s mother, is shooting the kids.';

    const courses = allowedRoutes.mainTree.courses;
    /**@type {ListGroup01WhitedProps} */
    const kidsCoursesList = {
        items:
            [
                {
                    to: courses.family.selfNav.path,
                    intl: 'Программы для всей семьи',
                    title: courses.family.selfNav.intl,
                },
            ]
    };

    return (
        <CardWithListGroup pic={pic} listProps={kidsCoursesList} />
    );
};

const mapStateToProps = ({ allowedRoutes, viewParams }) => ({ allowedRoutes, viewParams });

export default connect(mapStateToProps)(AdultCourses);