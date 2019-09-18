import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HeroFriendOverlay, CoursesProps, WhyProps, PromosProps, overlayEffects } from './HeroFriendBase.js';

export default () => {

    return (
        <Row noGutters className=" d-none d-lg-flex align-items-stretch ">
            <Card as={NavLink} to='/courses'
                className='img-overlay-left-container col-12'>
                <Card.Img src={CoursesProps.src} className="img-fluid" >
                </Card.Img>
                {overlayEffects}
                <HeroFriendOverlay {...{ title: CoursesProps.title, fontSize:'1.2em' }} />
            </Card>

            <Card as={NavLink} to='/courses'
                className='img-overlay-left-container col-12'>
                <Card.Img src={WhyProps.src} className="img-fluid" >
                </Card.Img>
                {overlayEffects}
                <HeroFriendOverlay {...{ title: WhyProps.title,fontSize:'1.2em' }} />
            </Card>

            <Card as={NavLink} to='/promos'
                className='img-overlay-left-container col-12'>
                <Card.Img src={PromosProps.src} className="img-fluid" >
                </Card.Img>
                {overlayEffects}
                <HeroFriendOverlay {...{ title: PromosProps.title,fontSize:'1.2em' }} />
            </Card>
        </Row>
    );

};
//   style={{maxHeight:"214px"}}