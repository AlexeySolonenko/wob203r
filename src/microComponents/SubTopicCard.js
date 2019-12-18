import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Picture01 from './Picture01.js';

/**
 * @typedef import("../typedefs/microComponents/SubTopicCard.js").SubTopicCardProps
 */

/**
 * @typedef import("../typedefs/microComponents/Picture01.js").pictureProps
 */


/**
 * @function
 * @param {Object} props 
 * @param {SubTopicCardProps} props.cardProps
 * @param {pictureProps} props.pic
 */
const SubTopicCard = ({ cardProps, pic }) => {

    /* 
    5200 km - Krasnoyarsk Polandб 16340 бензин
    Poland - Rome - 2000 km, 155 Euro безнизн, или 11160 руб
    9 дней в дороге
    8 ночевок, 100 Евро, 7200 
    
    бензин и ночевка 24700
    еда

    



    красноярск-москва 70300
    https://www.mjr.ru/calculators/auto-trans/


    москва-вена 1500
    москва-милан 3200


    москва рим
    161000
    https://www.vezetvsem.ru/transportnye_sredstva/rossija_italija_dostavit_avto__1079473

    */

    /**@todo to eliminate pic prop completely  */
    if (!pic) pic = cardProps.pictureProps;

    return (
        <React.Fragment>
            <Row as={NavLink} to={cardProps.readMoreRoute.path} className="d-flex d-sm-none " >
                <Col xs='12'>
                    <Card>
                        <Picture01 pic={pic} />
                        <Card.Body>
                            <Card.Title>{cardProps.title}</Card.Title>
                            <Card.Text style={{ color: 'black' }}>{cardProps.text}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-right bg-white">
                            <Button className='bg-transparent rounded-0 button-transparent border-0 font-weight-bold text-primary' ><u>ПОДРОБНЕЕ</u></Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Col xs='4' className='d-none d-sm-flex'>
                <Card as={NavLink} to={cardProps.readMoreRoute.path} className="d-none d-sm-flex  " >
                    <Picture01 pic={pic} />
                    <Card.Body>
                        <Card.Title>{cardProps.title}</Card.Title>
                        <Card.Text style={{ color: 'black' }}>{cardProps.text}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-right bg-white">
                        {/* <Button as={NavLink} to={cardProps.readMoreRoute.path} className='bg-transparent rounded-0 button-transparent border-0 font-weight-bold text-primary' ><u>ПОДРОБНЕЕ</u></Button> */}
                        <Button className='bg-transparent rounded-0 button-transparent border-0 font-weight-bold text-primary' ><u>ПОДРОБНЕЕ</u></Button>
                    </Card.Footer>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default SubTopicCard;