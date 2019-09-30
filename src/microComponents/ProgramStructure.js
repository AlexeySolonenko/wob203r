import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/**
 * @typedef import('../typedefs/microComponents/ProgramStructure.js').ProgramStructureProps
 */


/**
 * @function
 * @param {Object} props
 * @param {ProgramStructureProps} props.programStruct
 */
const ProgramStructure = ({ programStruct }) => {


    /**
     * @function
     * @param {ProgramStructureItemProps} i 
     */
    const buildItem = (i) => {

        let header = null;
        const textStyle = { style: { fontSize: '0.8em' } };
        if (i.heroText) {
            header = (
                <React.Fragment>
                    <Col xs='4' className="text-primary my-auto text-center" style={{ fontSize: '1.75em' }}><b>{i.heroText}</b></Col>
                    <Col xs='8' {...textStyle}><b>{i.headerText}</b></Col>
                </React.Fragment>
            );
        } else {
            header = (<Col xs='12' {...textStyle} ><b>{i.headerText}</b></Col>);
        }

        let readMore = null;
        if (i.readMore) {
            readMore = (
                <Col xs='auto ml-auto'>
                    <Button
                        as={NavLink}
                        to={i.readMore.path}
                        // className='ml-auto'
                    >{i.readMore.intl}</Button>
                </Col>
            );
        }

        let price = null;
        if (i.price) {
            price = (
                <Col xs='auto'>{i.price}</Col>
            );
        }

        let typeBar = null;
        if (i.type) {
            let txt = '';
            let clr = 'bg-white text-dark';
            switch (i.type) {
                case 'included':
                    txt = 'ВКЛЮЧЕНО';
                    clr = 'bg-light text-white';
                    break;
                case 'optional':
                    txt = 'ОПЦИЯ';
                    clr = 'bg-success text-white';
                    break;
                default:
                    break;
            }
            typeBar = (<Col xs='12' className={(clr + ' text-center')}>{txt}</Col>);
        }

        return (
            <React.Fragment>
                <Col xs='12' sm='3'>
                    <Card >
                        <Card.Body>
                            <Row>
                                {header}
                                <Col xs='12'>{i.contentText}</Col>
                            </Row>
                        </Card.Body>
                        {((price || readMore || typeBar) ?
                            <Card.Footer>
                                <Row>
                                    {price}{readMore}{typeBar}
                                </Row>
                            </Card.Footer>
                            : null)}
                    </Card>
                </Col>
                <Col xs='12' sm='1' className='py-xs-3 text-primary text-center py-sm-0 my-auto' style={{ fontSize: '2.5em' }}>
                    <b>{programStruct.joinSymbol || "+"}</b>
                </Col>
            </React.Fragment>
        );
    };

    return (
        <Row>
            {programStruct.items.map(buildItem)}
        </Row>
    );
};


export default ProgramStructure;