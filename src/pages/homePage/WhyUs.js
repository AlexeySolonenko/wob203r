import React from 'react';
import { Col, Row } from 'react-bootstrap';

const WhyUs = (props) => {

    const SingleBlock = (props) => {

        return (
            <Col xs='6' md='3' className='d-flex'>
                <Row className='h-100'>
                    <Col xs='12'>
                        <Row className='h-100'>
                            <Col xs='12' className='h-50 align-self-end'>
                                <Row className='align-items-end h-100'>
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

    return (

        <Row className='justify-content-center text-center pb-5 border-bottom border-primary'>
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