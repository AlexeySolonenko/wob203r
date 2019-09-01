import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Hero = (props) => {
    /* 193 x 400*/
    const mbMd = props.viewParams.mediaBreakPoints.md;
    const mbSm = props.viewParams.mediaBreakPoints.sm;

    const HeroMainPic = (
        <picture>
            <source srcSet="/img/home/2019q3-home-hero-001--lg.png" media={"(min-width:" + mbMd + "px)"} />
            <source srcSet="/img/home/2019q3-home-hero-001--sm.png" media={"(min-width:" + mbSm + "px)"} />
            <img
                src='/img/home/2019q3-home-hero-001--xs.png'
                alt='Young lady in sunshine against the Balluta Bay view and local coastal Cathedral in the background'
                className='card-img img-after-to-bottom-black-gradient-20'
            />
        </picture>);

    return (

        <Card >
            {HeroMainPic}
            <div className='linear-bottom-black-20'></div>
            <Card.ImgOverlay >
                <Row className='h-100 align-items-end '>
                    <Col xs='12'>
                        <Row>
                            <Col xs='auto' className='rounded'>
                                <div className=' text-white font-weight-bold' style={{ fontSize: "1.5em" }} > НИКОГДА НЕ ПОЗДНО </div>
                            </Col>
                            <Col xs='12' className=""></Col>
                            <Col xs='auto'
                                style={{ fontSize: "1.5em" }} className='font-weight-bold text-white rounded mb-3' >
                                Учи английский на солнечной Мальте
                            </Col>
                            <Col xs='12'></Col>
                            <Col xs='12' md='auto'>
                                <Button as={NavLink} className='col-auto rounded-0 ' to='/contact'><b><u>СВЯЗАТЬСЯ</u></b></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.ImgOverlay>
        </Card>
    );
}

const mapStateToProps = ({ viewParams }) => ({ viewParams });

export default connect(mapStateToProps)(Hero);
