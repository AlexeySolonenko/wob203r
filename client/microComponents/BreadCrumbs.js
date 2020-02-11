import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

/**
 * 
 * @typedef import('../typeDefs/navTypeDefs.js').routeItem
 */

/**
 * 
 * @param {Object} props
 * @param {Object} props.tree 
 * @param {Object} props.location 
 */
const BreadCrumbs = ({ tree, location }) => {

    console.log('bread crumbs props', tree, location);
    
    /**
     * 
     * @param {routeItem} r 
     */
    const findChildInRoutes = (r) => {
        if (!r.hasOwnProperty('selfNav')) return null;

        /** 
         * @param {routeItem} val 
         */
        const finder = (val) => {
            let route= null;
            if(val.hasOwnProperty('selfNav')) route = val.selfNav;
            else route = val;
            console.log('finder route',route);
            return (location.pathname.indexOf(route.path) > -1);
        };

        let items = Object.assign({}, r);
        delete items.selfNav;
        delete items.all;
        let seekable = Object.values(items).find(finder, null);
        return (seekable === undefined) ? null : seekable;
    };

    /**
     * 
     * @param {routeItem} p 
     * @param {boolean} subPath
     * @returns {ReactDOM}
     */
    const buildPaths = (p, subPath) => {
        console.log('breadc single items props', p);
        const itemToBuild = p.hasOwnProperty('selfNav') ? p.selfNav : p;

        const deeperThanCurrentView =
            (itemToBuild.path.indexOf(location.pathname) > -1)
            &&
            (itemToBuild.path !== location.pathname);

        let subP = findChildInRoutes(p);
        if (subP) subP = buildPaths(subP, true);
        const divider = subPath ? (<Col xs='auto'>/</Col>) : null; 
        return (deeperThanCurrentView ? null : (
            <React.Fragment>
                {divider}
                <Col
                    xs='auto'
                    as={NavLink}
                    to={itemToBuild.path}
                >{itemToBuild.intl}
                </Col>
                {subP}
            </React.Fragment>
        )
        );
    };

    return (
        <Row className='form-row font-weight-bold '>
            {/* <Col xs='auto'>back to do</Col> */}
            {buildPaths(tree)}
        </Row>

    );
};

export default BreadCrumbs;