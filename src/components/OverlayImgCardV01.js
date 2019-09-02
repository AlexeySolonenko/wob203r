import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

const OverlayImgCardV01 = (props) => {

    return (
        <Card className='img-overlay-left-container'>
            {props.srcset ? props.srcset :
                <Card.Img src={props.img.src} alt={props.img.alt}>
                </Card.Img>
            }
            <div className="linear-bottom-top-15"></div>
            <div className="img-overlay-left"></div>
            <Card.ImgOverlay>
                <Row className='h-100 align-items-start '>
                    <Col xs='12'>
                        <Row>
                            {props.children}
                        </Row>
                    </Col>
                </Row>
            </Card.ImgOverlay>
        </Card>
    );
};
export default OverlayImgCardV01;