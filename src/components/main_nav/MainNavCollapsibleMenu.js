import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Card, Nav, ListGroup, Row, Col } from 'react-bootstrap';

const MainNavCollapsibleMenu = () => {

    return (
        <Row className='d-flex d-md-none'>
            <Accordion.Collapse eventKey="mainNavCollapsibleMenu" className='w-100'>
                <Card className='w-100'>
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item action ><NavLink to="/">Без Границ</NavLink></ListGroup.Item>
                            <ListGroup.Item action ><NavLink to="/testimonials">Отзывы</NavLink></ListGroup.Item>
                            <ListGroup.Item action ><NavLink to="/courses">Курсы</NavLink></ListGroup.Item>
                            <ListGroup.Item action  >
                                <Row className='d-flex justify-content-between align-items-center'>
                                    <Col xs={4}><Nav.Link href='https://www.instagram.com/vl_bez_granic' target='_blank'><i className='im im-instagram'></i></Nav.Link></Col>
                                    <Col xs={4}><Nav.Link href='https://api.whatsapp.com/send?phone=+35699503677' target='_blank'><i className='im im-whatsapp'></i></Nav.Link></Col>
                                    <Col xs={4}><NavLink to='/contact'><i className='im im-mail'></i></NavLink></Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Accordion.Collapse>
        </Row>
    );

};

export default MainNavCollapsibleMenu;