import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ListGroup01Whited from './ListGroup01Whited.js';
import Picture01 from './Picture01.js';

/**
 * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes
 */

/**
 * 
 * @typedef import('../../typedefs/microComponents/Picture01.js').pictureProps
 */

/**
* @typedef import('../../typedef/microComponents/ListGroup01WhitedProps.js').ListGroup01WhitedProps
*/

/*
xs = 4:9 or 3:9
md 3:16
lg 6:16
xl 3:16
*/

/**
 * @function
 * @param {Object} props
 * @param {pictureProps} props.pic
 * @param {ListGroup01WhitedProps} listProps
 */
const CardWithListGroup = ({ pic, listProps }) => {

    const listPropsMd = Object.assign({}, listProps);
    const listPropsSm = Object.assign({ itemsBordered: true }, listProps);

    return (
        <React.Fragment>
            <Container >
                <Card >
                    <Picture01 pic={pic} />
                    <Card.ImgOverlay>
                        <Row className='justify-content-end'>
                            <Col xs='auto' className='d-none d-md-flex'>
                                <ListGroup01Whited listProps={listPropsMd} />
                            </Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card>
                <Row >
                    <Col xs='12' className='d-flex d-md-none'>
                        <ListGroup01Whited listProps={listPropsSm}></ListGroup01Whited>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

const mapStateToProps = ({ allowedRoutes, viewParams }) => ({ allowedRoutes, viewParams });

export default connect(mapStateToProps)(CardWithListGroup);