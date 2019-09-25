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



    return (
        <Card as={NavLink} to={cardProps.readMoreRoute.path}>
            <Picture01 pic={pic} />
            <Card.Body>
                <Card.Title>{cardProps.title}</Card.Title>
                <Card.Text>{cardProps.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-right bg-white">
                <Button as={NavLink} to={cardProps.readMoreRoute.path} className='bg-transparent rounded-0 button-transparent border-0 font-weight-bold text-primary' ><u>ПОДРОБНЕЕ</u></Button>
            </Card.Footer>
        </Card>
    );
};

export default SubTopicCard;