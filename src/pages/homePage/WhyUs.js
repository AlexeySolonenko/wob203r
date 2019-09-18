import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const WhyUs = (props) => {

    const SingleBlockTest = (props) => {

        return (
            <Col xs='6' md='3' className='d-flex self-align-stretch'>
                <Row className=' w-100 no-gutters-sm'>
                    <Col xs='12'>
                        <Row className=' w-100 no-gutters-sm justify-content-center text-center '>
                            <Col xs='12' className='h-50 align-self-end'>
                                <Row className='no-gutters-sm align-items-end '>
                                    <Col xs='12'>
                                        {props.children}
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs='12' className='h-50 align-self-start'>
                                {props.text}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }

    const SingleBlock = (props) => {

        return (
            <Card as={Col} xs='6' md='3' className='d-flex border-0 self-align-stretch'>
                <div className='row w-100 no-gutters-sm '>
                    <Col xs='12 my-auto'>{props.children}</Col>
                    <Col xs='12 mt-auto'>{props.text}</Col> 
                </div>
            </Card>
        );
    }

    return (

        <Row className='justify-content-center text-center border-bottom border-primary no-gutters-sm '>
            <SingleBlock text='Офис на Мальте'>
                <span style={{ fontSize: '2em' }}>🌍</span>
            </SingleBlock>
            <SingleBlock text='Скидки и промо'>
                <span style={{ fontSize: '2em' }}>💰</span>
            </SingleBlock>
            <SingleBlock text='Прямые представители лучших школ'>
                <span style={{ fontSize: '2em' }}>🎖🏆</span>
            </SingleBlock>
            <SingleBlock text='Мы любим всех студентов, и рады взаимности (отзывы).'>
                <span style={{ fontSize: '2em' }}>{"💘"}</span>
            </SingleBlock>
        </Row>

    );
}
//{"\u20a0 \u20bd"}
export default WhyUs;