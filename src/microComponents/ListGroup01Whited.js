import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col, ListGroup } from 'react-bootstrap';

/**
 * @typedef import('../typedef/microComponents/ListGroup01WhitedProps.js').ListGroup01WhitedProps
 */

/**
 * @function
 * @param {Object} props
 * @param {ListGroup01WhitedProps} props.listProps
 */
const ListGroup01Whited = ({ listProps }) => {

    const listItemStyle = {
        style: {
            backgroundColor: "rgba(255,255,255,75%)",
        }
    }
    /**
     * @function
     * @param {ListGroup01WhitedItemProps} item
     */
    const renderListItem = (item, idx, allItems) => {
        let className = {
            className: [
                'py-1', 'px-0', 'rounded-0', 'my-1'
            ]
        };
        if (listProps.itemsBordered) {
            className.className = className.className.concat(['border-dark']);
        } else {
            className.className.push('border-0');
        }
        className.className = className.className.concat(' ');
        return (
            <ListGroup.Item  {...listItemStyle} {...className} key={item.to}>
                <Button as={NavLink} to={item.to} bsPrefix="btn btn-transparent" className='row py-1   text-left w-100'>
                    <Col xs='12' className="font-weight-bold font-info text-uppercase text-primary">
                        <u>{item.title}</u>
                    </Col>
                    <Col className='text-dark '>
                        {item.intl}
                    </Col>
                </Button>
            </ListGroup.Item>
        );

    }

    return (
        <ListGroup className='w-100'>
            {listProps.items.map(renderListItem)}
        </ListGroup>
    );

};

export default ListGroup01Whited;