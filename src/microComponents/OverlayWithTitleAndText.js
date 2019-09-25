import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import Picture01 from './Picture01.js';

/**
 * 
 * @typedef import('../typedefs/microComponents/Picture01.js').pictureProps
 */

/**
* 
* @typedef import('../typedefs/microComponents/OverlayWithTitleAndText.js).OverlayWithTitleAndTextProps
*/

/**
 * @function
 * @param {Object} props
 * @param {OverlayWithTitleAndTextProps} cardProps
 * @param {pictureProps} pic
 */
const OverlayWithTitleAndText = ({ cardProps, pic }) => {

    return (
        <Container className='container-no-p-sm'>
            <Row className='no-gutters-sm'>
                <Col>
                    <Card>
                        <Picture01 pic={pic} />
                        <Card.ImgOverlay>
                            <Row className='no-gutters-sm h-100'>
                            <div className='overlay-with-title-and-text-gradient w-100 h-100'></div>
                                <Col className='align-self-center text-white font-weight-bold text-center'>
                                    <h3 className='text-white font-weight-bold'>{cardProps.title}</h3>
                                    <div>{cardProps.text}</div>
                                </Col>
                            </Row>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}

export default OverlayWithTitleAndText;