import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import OverlayImgCardV01 from '../../components/OverlayImgCardV01.js';

/* 550x215 */




const CoursesThumbs = (props) => {

    const mbSm = props.viewParams.mediaBreakPoints.sm;

    const flexi = (
        <picture>
            {/* <source srcSet="/img/home/2019q3-home-hero-001--lg.png" media={"(min-width:" + mbMd + "px)"} /> */}
            <source srcSet="/img/home/2019q3-home-courses-flexi-001--sm.png" media={"(min-width:" + mbSm + "px)"} />
            <img
                src='/img/home/2019q3-home-courses-flexi-001--xs.png'
                alt='Lady with paper cut and pencil painted smiles in front of the students in a classroom.'
                className='card-img img-after-to-bottom-black-gradient-20'
            />
        </picture>
    );

    const packages = (
        <picture>
            {/* <source srcSet="/img/home/2019q3-home-hero-001--lg.png" media={"(min-width:" + mbMd + "px)"} /> */}
            <source srcSet="/img/home/2019q3-home-courses-package-001--sm.png" media={"(min-width:" + mbSm + "px)"} />
            <img
                src='/img/home/2019q3-home-courses-package-001--xs.png'
                alt='Bicycles for rent are stacked close one to another on an elivated promenade cliff in front of a black metal fence with a panoramic open sea view'
                className='card-img img-after-to-bottom-black-gradient-20'
            />
        </picture>
    );

    const restOfCourses = [
        {
            src: '/img/home/2019q3-home-courses-business-001--xs.png',
            text: 'БИЗНЕС',
            to: '/courses/business',
            alt: 'Russian rising star cameraman in a tuxedo in a dance hug with a young slim lady in red. Both on a red velvet carpet in Cannes on a cinema international event.'
        },
        {
            src: '/img/home/2019q3-home-courses-family-kids-001--xs.png',
            text: 'ДЛЯ ВСЕЙ СЕМЬИ И ДЕТЕЙ',
            to: '/courses/family',
            alt: 'Kids and a teacher having fun in a classroom.'
        },
        {
            src: '/img/home/2019q3-home-courses-summer-camp-001--xs.png',
            text: 'ЛЕТНИЙ ЛАГЕРЬ',
            to: '/courses',
            alt: 'Mixed group of people doing yoga on a rocky beach with a cafe in a closer background, with a high rise building in a far backgraound, and a sea view'
        },
        {
            src: '/img/home/2019q3-home-courses-long-term-001--xs.png',
            text: 'ДОЛГОСРОЧНЫЕ ПРОГРАММЫ',
            to: '/courses/long-term',
            alt: 'Goup of long-term students in a school lobby posing for a photo.'
        },
        {
            src: '/img/home/2019q3-home-courses-exams-001--xs.png',
            text: 'МЕЖДУНАРОДНЫЕ ЭКЗАМЕНЫ',
            to: '/courses/certs',
            alt: 'Students struggling with exam preparation in a classrom. Many a holding one or two palms on their heads.',
        },
        {
            src: '/img/home/2019q3-home-courses-teachers-001--xs.png',
            text: 'АККРЕДИТАЦИЯ УЧИТЕЛЕЙ',
            to: '/courses',
            alt: 'A guy and a girl with certificates in hands are standing facing camera.'
        },
    ];

    return (
        <Row noGutters >
            {/* top courses large */}
            <Col xs='12' sm='6' as={NavLink} to='/courses/short-term'>
                <OverlayImgCardV01 srcset={flexi}>
                    <Col xs='12' className="text-white" style={{ fontSize: "1em" }}><b>АДАПТИВНЫЕ ПРОГРАММЫ</b></Col>
                </OverlayImgCardV01>
            </Col>
            <Col xs='12' sm='6' as={NavLink} to='/courses/short-term'>
                <OverlayImgCardV01 srcset={packages}>
                    <Col xs='12' className="text-white" style={{ fontSize: "1.2em" }}><b>ПАКЕТНЫЕ ПРЕДЛОЖЕНИЯ</b></Col>
                </OverlayImgCardV01>
            </Col>

            {/* other courses, smaller size and smaller highlight */}
            {
                restOfCourses.map((imgProps) => {

                    return (
                        <Col xs='4' as={NavLink} to={imgProps.to} key={imgProps.to}>
                            <OverlayImgCardV01 img={imgProps} >
                                <Col xs='12' className="text-white" style={{ fontSize: "1.2em" }}><b>{imgProps.text}</b></Col>
                            </OverlayImgCardV01>
                        </Col>
                    );
                })
            }
        </Row>
    );
};

const mapStateToProps = ({ viewParams }) => ({ viewParams });

export default connect(mapStateToProps)(CoursesThumbs);