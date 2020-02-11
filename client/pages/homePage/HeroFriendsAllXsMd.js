import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HeroFriendOverlay, CoursesProps, WhyProps, PromosProps, overlayEffects } from './HeroFriendBase.js';

export default () => {

    return (
        <React.Fragment>

            <Card as={NavLink} to='/courses'
                className='img-overlay-left-container col-6 col-md-4 '>
                <Card.Img src={CoursesProps.src} className="img-fluid hvh-15" >
                </Card.Img>
                {overlayEffects}
                <HeroFriendOverlay {...{ title: CoursesProps.title }} />
            </Card>

            <Card as={NavLink} to='/courses'
                className='img-overlay-left-container col-6 col-md-4 '>
                <Card.Img src={WhyProps.src} className="img-fluid hvh-15" >
                </Card.Img>
                {overlayEffects}
                <HeroFriendOverlay {...{ title: WhyProps.title }} />
            </Card>

            <Card as={NavLink} to='/promos'
                className='img-overlay-left-container col-6 col-md-4'>
                <Card.Img src={PromosProps.src} className="img-fluid hvh-15" >
                </Card.Img>
                {overlayEffects}
                <HeroFriendOverlay {...{ title: PromosProps.title }} />
            </Card>

        </React.Fragment>
    );

};