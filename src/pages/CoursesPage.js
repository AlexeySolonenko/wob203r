import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


const CoursesPage = (props) => {
    console.log('courses props', props);
    const m = props.match.url;
    return (
        <Row >
            <Col xs='12'><h3>COURSES PAGE</h3></Col>
            <Col xs='12'><p>The courses you may find in Malta</p></Col>
            <Col xs='12'>
                <NavLink to={m + '/business'}>Бизнес</NavLink>
                <NavLink to={m + '/short-term'}>Краткосрочные</NavLink>
                <NavLink to={m + '/long-term'}>Долгосрочные</NavLink>
                <NavLink to={m + '/family'}>Для всей семьи</NavLink>
            </Col>
            <Col xs='12'>
                <Route path={m + '/business'} render={routeProps => ('бизнес курсы')} />
                <Route path={m + '/short-term'} render={routeProps => ('краткосрочные курсы')} />
                <Route path={m + '/long-term'} render={routeProps => ('долгосрочные курсы ')} />
                <Route path={m + '/family'} render={routeProps => ('для всей семьи')} />
            </Col>
        </Row>
    );
}

export default {
    component: CoursesPage,
}