import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';



const CoursesProps = {
    src: '/img/home/2019q3-home-accent-courses-007--xs.png',
    title: 'КУРСЫ',
};
const PromosProps = {
    src: '/img/home/2019q3-home-accent-why-001--xs.png',
    title: 'АКЦИИ И СКИДКИ',
};

const WhyProps = {
    src: '/img/home/2019q3-home-accent-promos-001--xs.png',
    title: 'КОМУ НУЖНО ЕХАТЬ?',
};

const overlayEffects = (
    <React.Fragment>
        <div className="hero-gradient-to-bottom"></div>
        <div className="img-overlay-left"></div>
    </React.Fragment>
)

const HeroFriendOverlay = ({ title, fontSize }) => {
    let textStyle = {};
    if(fontSize) textStyle.fontSize = fontSize;

    return (
        <Card.ImgOverlay className='no-gutters-sm row'>
            <Card.Text xs='12'
                className=' col mt-auto text-white'
                style={{...textStyle}}>
                <b>{title}</b>
            </Card.Text>
        </Card.ImgOverlay>
    );
};

export { HeroFriendOverlay, CoursesProps, WhyProps, PromosProps, overlayEffects };