import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

const OverlayImgCardV01 = (props) => {

    return (
        <Card className='img-overlay-left-container'>
            {props.srcset ? props.srcset :
                <Card.Img src={props.img.src} alt={props.img.alt}>
                </Card.Img>
            }
            <div className="card-gradient-to-top"></div>
            <div className="img-overlay-left"></div>
            <Card.ImgOverlay>
                <Card.Text as={"div"} >{props.children}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};
export default OverlayImgCardV01;