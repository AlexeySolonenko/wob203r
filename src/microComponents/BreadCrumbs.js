import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * 
 * @typedef import('../typeDefs/navTypeDefs.js').routeItem
 */

/**
 * 
 * @param {Object} props
 * @param {Object} props.tree 
 */
const BreadCrumbs = ({ tree, location }) => {

    const findChildInRoutes = (p) => {
        if(!p.hasOwnPropertyKey('selfNav')) return null;
        let items= Object.assign({},p);
        delete items.selfNav;
        let seekable= null;
        seekable = Object.values(items).reduce((null,val,idx,all) => {
            
            return();
        });
    };

    /**
     * 
     * @param {routeItem} p 
     * @param {number} idx 
     * @param {Array<routeItem>} all 
     */
    const buildPaths = (p, idx, all) => {
        console.log('breadc single items props', p, idx, all);
        const itemToBuild = p.hasOwnPropertyKey('selfNav') ? p.selfNav : p;
        const deeperThanCurrentView =
            (p.path.indexOf(location.pathname) > -1)
            &&
            (p.path !== location.pathname);

        const subP = '';

        return (deeperThanCurrentView ? null : (
            <Col
                xs='auto'
                as={NavLink}
                to={itemToBuild.path}
            >{itemToBuild.intl}
            </Col>
        )
        );
    };

    return (
        <Row>
            <Col xs='auto'>back to do</Col>
        </Row>

    );


};