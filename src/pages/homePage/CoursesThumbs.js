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
                alt='Young lady in sunshine against the Balluta Bay view and local coastal Cathedral in the background'
                className='card-img img-after-to-bottom-black-gradient-20'
            />
        </picture>
    );

    return (
        <Row>
            <Col xs='6' as={NavLink} to='/courses/short-term'>
                <OverlayImgCardV01 srcset={flexi}>
                    <Col xs='12' sm='6' className="text-white" style={{fontSize:"1.2em"}}><b>АДАПТИВНЫЕ ПРОГРАММЫ</b></Col>
                </OverlayImgCardV01>
            </Col>
            {/* <Col xs='6' as={OverlayImgCardV01} img={{ src: '' }}>
                <Col xs='12' sm='6'>Пакетные предложения</Col>
            </Col> */}
        </Row>
    );
};

const mapStateToProps = ({ viewParams }) => ({ viewParams });

export default connect(mapStateToProps)(CoursesThumbs);