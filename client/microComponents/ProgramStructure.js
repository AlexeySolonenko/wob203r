import React from 'react';
import { Button, Card, CardDeck, Col, Row } from 'react-bootstrap';
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
     * @param {number} idx
     * @param {Array<ProgramStructgureItemProps} all
     */
    const buildItem = (i, idx, all) => {

        /* Header */
        let header = null;
        const textStyle = { style: { fontSize: '0.8em' } };
        if (i.heroText) {
            header = (
                <Card.Header>
                    <Row>
                        <Col xs='4' className="text-primary my-auto text-center" style={{ fontSize: '1.75em' }}><b>{i.heroText}</b></Col>
                        <Col xs='8' {...textStyle}><b>{i.headerText}</b></Col>
                    </Row>
                </Card.Header>
            );
        } else {
            header = (
                <Card.Header><Row>
                    <Col xs='12' {...textStyle} ><b>{i.headerText}</b></Col>
                </Row></Card.Header>
            );
        }

        /* Read more link, if avaialble */
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

        /* Price, if available  */
        let price = null;
        if (i.price) {
            price = (
                <Col xs='auto text-primary text-right'>{i.price}</Col>
            );
        }

        /* Type: optional, included, or other  */
        let typeBar = null;
        if (i.type) {
            let txt = '';
            let clr = 'bg-white text-dark';
            switch (i.type) {
                case 'included':
                    txt = 'ВКЛЮЧЕНО';
                    clr = 'bg-secondary text-white';
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

        /* Left for later */
        // const joint = (idx < (all.length - 1)) ? (
        //     <Card className='col-xs-12 col-sm-1 py-xs-3 text-primary text-center py-sm-0 my-auto bg-transparent' style={{ fontSize: '2.5em' }}
        //     ><b>{programStruct.joinSymbol || "+"}</b>
        //     </Card>
        // ) : null;

        return (
            <React.Fragment>
                {/* <Col xs='12' sm='4'> */}
                {/* <Card className='col-xs-12 col-sm-3'> */}
                <Card >
                    {header}
                    <Card.Body>
                        <Row>
                            <Col xs='12'>{i.contentText}</Col>
                        </Row>
                    </Card.Body>
                    {((price || readMore || typeBar) ?
                        <Card.Footer>
                            {price}{readMore}{typeBar}
                        </Card.Footer>
                        : null)}
                </Card>
                {/* </Col> */}
                {/* {joint} */}
            </React.Fragment>
        );
    };

    /* Build all cards */
    let allCards = [];
    let three = [];

    const DeckWrapper = (props) => (
        <React.Fragment>
            <CardDeck>{props.children}</CardDeck>
            <div className='my-3'></div>
        </React.Fragment>
    );

    programStruct.items.forEach((item, idx, all) => {
        three.push(buildItem(item, idx, all));
        if (idx !== 0 && (idx+1) % 3 == 0) {
            allCards.push(<DeckWrapper>{three}</DeckWrapper>);
            three = [];
        } else if (idx === (all.length - 1)) {
            allCards.push(<DeckWrapper>{three}</DeckWrapper>);
        }
    });

    return (
        <React.Fragment>
            {allCards}
        </React.Fragment>
    );
};


export default ProgramStructure;