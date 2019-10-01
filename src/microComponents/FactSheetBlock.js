import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

/**
 * 
 * @typedef import('../typedefs/microComponents/FactSheetBlock.js').FactSheetBlockProps
 */

/**
 * 
 * @function
 * @param {Object} props
 * @param {FactSheetBlockProps} props.factSheetProps
 */
const FactSheetBlock = ({ factSheetProps }) => {


    const line = (<Col xs='12' className='py-0 my-0 border border-left-0 border-right-0 border-top-0 border-secondary' ></Col>);

    const topLineText = factSheetProps.headerText || 'ГЛАВНОЕ О КУРСЕ'

    const headerClass = ['text-uppercase', 'text-primary'];


    const simpleLine = (header, text) => {
        const className = { className: headerClass.join(' ') };
        return (
            <React.Fragment>
                {line}
                <Col xs='4' {...className}><b>{header}</b></Col>
                <Col xs='1'></Col>
                <Col xs='7'>{text}</Col>
            </React.Fragment>
        );
    }

    const courseLength = factSheetProps.courseLength ?
        simpleLine('ДЛИТЕЛЬНОСТЬ', factSheetProps.courseLength) : null;

    const entryLevel = factSheetProps.entryLevel ?
        simpleLine('ВХОДНОЙ УРОВЕНЬ', factSheetProps.entryLevel) : null;

    const minAge = factSheetProps.minAge ?
        simpleLine('МИН. ВОЗРАСТ', factSheetProps.minAge) : null;

    const lessonHours = factSheetProps.lessonHours ?
        simpleLine('УРОК', factSheetProps.lessonHours) : null;

    const classSize = factSheetProps.classSize ?
        simpleLine('ЧИСЛ. КЛАССА', factSheetProps.classSize) : null;

    const timeTable = factSheetProps.timeTable ?
        simpleLine('РАСПИСАНИЕ', factSheetProps.timeTable) : null;

    const courseStructure = factSheetProps.courseStructure ?
        (
            <React.Fragment>
                {line}
                <Col xs='12' className={headerClass.join(' ')}><b>СОСТАВ КУРСА</b></Col>

                {
                    factSheetProps.courseStructure.map((i) => {
                        return (
                            <Col xs='12'
                            ><span
                                className="oi text-primary px-2 oi-check "></span><span>{i}</span></Col>
                        );
                    })
                }
                <Col xs='12'>
                    <a href={factSheetProps.courseStructure.linkToGraphics}></a>
                </Col>
            </React.Fragment>
        ) : null;

    const readMore = factSheetProps.readMore ?
        (
            <Col xs='12'>
                <Row>
                    {line}
                    <Col xs='auto'>
                        <Button
                            as={NavLink}
                            to={factSheetProps.readMore.path}
                            className=''
                        >ПОДРОБНЕЕ</Button>
                    </Col>
                </Row>
            </Col>
        ) : null;

    return (
        <Row className='shadow bg-teal02'>
            <Col xs='12'
                style={{ fontSize: '1.25em' }}
            ><b>{topLineText}</b></Col>
            {courseLength}
            {entryLevel}
            {minAge}
            {lessonHours}
            {classSize}
            {timeTable}
            {courseStructure}
            {readMore}
        </Row>
    );
};

export default FactSheetBlock;