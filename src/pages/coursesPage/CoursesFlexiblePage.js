import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import OverlayWithTitleAndText from '../../microComponents/OverlayWithTitleAndText.js';
import SubTopicCard from '../../microComponents/SubTopicCard.js';

/**
 * 
 * @typedef import('../../typedefs/view').pictureProps
 */

 /**
 * @typedef import("../typedefs/microComponents/SubTopicCard.js").SubTopicCardProps
 */

 /**
 * @typedef import("../typedefs/navTypeDefs.js").wob203rRoutes
 */


 /**
  * 
  * @param {Object} props
  * @param {wob203rRoutes} props.allowedRoutes
  */
const CoursesFlexiblePage = ({allowedRoutes}) => {
    const shortTerm = allowedRoutes.mainTree.courses.shortTerm;
    /**@type  */
    const pic = {
        srcXs: '/img/courses/2019q3-courses-flexi-001--xs.png',
        srcSm: '/img/courses/2019q3-courses-flexi-001--sm.png',
        alt:'Group of students in a class. A teacher is showing to students two cartoon cut hand-drawn smiley faces.',
    }

    const heroCardProps = {
        title: 'АДАПТИВНЫЕ КУРСЫ АНГЛИЙСКОГО',
        text: 'Учебные планы подстроенные под Ваш бюджет, график и нужды'
    };

    /**@type SubTopicCardProps */
    const flexiCardProps= {
        title: 'КРАТКОСРОЧНЫЕ ОПЦИИ',
        text:'',
        readMoreRoute:shortTerm.flexi,
    }
    /**@type pictureProps */
    const flexiCardPic = {
        srcXs:'/img/courses/2019q3-courses-flexi-001--xs.png',
        alt:''
    }
    /**@type SubTopicCardProps */
    const intensiveCardProps= {
        title: 'ИНТЕНСИВНЫЕ ПРОГРАММЫ',
        text:'',
        readMoreRoute:shortTerm.intensive,
    }
     /**@type pictureProps */
     const intensiveCardPic = {
        srcXs:'/img/courses/2019q3-courses-flexi-001--xs.png',
        alt:''
    }
    /**@type SubTopicCardProps */
     const businessCardProps= {
        title: 'БИЗНЕС КУРСЫ',
        text:'',
        readMoreRoute:shortTerm.business,
    }
     /**@type pictureProps */
     const businessCardPic = {
        srcXs:'/img/courses/2019q3-courses-flexi-001--xs.png',
        alt:''
    }

    return(
        <React.Fragment>
            <OverlayWithTitleAndText pic={pic} cardProps={heroCardProps} />
            <div class="my-1"></div>
            <Container>
                <CardDeck>
                    <SubTopicCard cardProps={flexiCardProps} pic={flexiCardPic} />
                    <SubTopicCard cardProps={intensiveCardProps} pic={intensiveCardPic} />
                    <SubTopicCard cardProps={businessCardProps} pic={businessCardPic} />
                </CardDeck>
            </Container>
        </React.Fragment>
    );
};

const mapStateToProps = ({allowedRoutes}) => ({allowedRoutes});

export default connect(mapStateToProps)(CoursesFlexiblePage);