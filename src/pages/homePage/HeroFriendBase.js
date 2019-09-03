import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

const HeroFriendBase = (props) => {

    return (
        <Card className='img-overlay-left-container'>
            <Card.Img src={props.img.src}>
            </Card.Img>
            <div className="linear-bottom-black-20"></div>
            <div className="img-overlay-left"></div>
            <Card.ImgOverlay>
                <Row className='h-100 align-items-end '>
                    <Col xs='12'>
                        <Row>
                            <Col xs='12' className='text-white' style={{ fontSize: '1.2.em' }}>
                                <b>{props.title}</b>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.ImgOverlay>
        </Card>
    );
};
export default HeroFriendBase;