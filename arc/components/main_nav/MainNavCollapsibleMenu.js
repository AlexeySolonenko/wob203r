import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Card, Nav, ListGroup, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const MainNavCollapsibleMenu = (props) => {
    console.log('collapsible props', props);

    const links = props.paths.map((p, idx) => {

        return (
            <ListGroup.Item
                onClick={props.closeSmMenu}
                key={p.path}
                action
                as={NavLink}
                to={p.path}>{p.text}
            </ListGroup.Item>
        );
    });

    return (
        <Row className='d-flex d-md-none w-100'>
            <Card className='w-100'>
                <Card.Body>
                    <ListGroup>
                        {links}
                        <ListGroup.Item action  >
                            <Row className='d-flex justify-content-between align-items-center'>
                                <Col onClick={props.closeSmMenu} xs={4}><Nav.Link href='https://www.instagram.com/vl_bez_granic' target='_blank'><i className='im im-instagram'></i></Nav.Link></Col>
                                <Col onClick={props.closeSmMenu} xs={4}><Nav.Link href='https://api.whatsapp.com/send?phone=+35699503677' target='_blank'><i className='im im-whatsapp'></i></Nav.Link></Col>
                                <Col onClick={props.closeSmMenu} xs={4}><NavLink to='/contact'><i className='im im-mail'></i></NavLink></Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            {/* </Accordion.Collapse> */}
        </Row>
    );

};

const mapStateToProps = ({ paths }) => ({ paths });
export default connect(mapStateToProps)(MainNavCollapsibleMenu);