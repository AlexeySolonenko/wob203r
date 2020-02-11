import React from 'react';
import { Col, Row } from 'react-bootstrap';

/**
 * @typedef import('../typedefs/microComponents/IconsAndTextBlock01.js').IconsAndTextBlock01Props
 */

/**
 * @function
 * @param {Object} props
 * @param {IconsAndTextBlock01Props} props.blockProps
 */
const IconsAndTextBlock01 = ({ blockProps }) => {

    let blockClass = {};
    if (blockProps.blockClass) {
        blockClass = {
            className: blockProps.blockClass
        }
    } else {
        blockClass = {
            className: ''
        }
    }

    /**
     * 
     * @param {IconsAndTextBlock01ItemProps} item 
     * @param {number} idx 
     * @param {Array<IconsAndTextBlock01ItemProps} all 
     */
    const buildIcons = (item, idx, all) => {

        let ic = {};
        if (item.iconClass) {
            ic = (<span className={item.iconClass}></span>);
        } else if (item.img) {
            ic = <img {...item.img} />
        } else {
            ic = item.iconUnicode;
        }

        return (
            <Col xs='12' md='4' key={item.title}>
                <Row className='text-xs-left text-md-center'>
                    <Col xs='3' md='12' style={{fontSize:'2em'}} className='text-center'><p>{ic}</p></Col>
                    <Col xs='9' md='12'>
                        <Row>
                            <Col md='12'><b>{item.title}</b></Col>
                            <Col md='12'><p>{item.text}</p></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }

    return (
        <Row {...blockClass}>
            {blockProps.items.map(buildIcons)}
        </Row>
    );
};

export default IconsAndTextBlock01;