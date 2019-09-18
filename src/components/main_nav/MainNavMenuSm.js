import React from 'react';
import { Button, Col, Navbar, NavDropdown, Nav, Row, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/** 
 * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes 
 */

/**
 * @param {wob203rRoutes} allowedRoutes
 */
const MainNavMenuSm = ({ paths, allowedRoutes }) => {

    const buildNavItems = (pathParams, idx, allPaths, isDropDownItem = false, parentPath = '') => {

        let content = null;
        let title = null;
        let to = parentPath + pathParams.path;
        let as = NavLink;

        let Comp = () => (<div></div>);
        console.log(pathParams);
        console.log(parentPath);
        if (Array.isArray(pathParams.paths)) {
            let rootPath = '';
            if (pathParams.isNestedRootPath) rootPath = pathParams.path;
            else rootPath = parentPath + pathParams.path;
            /* TODO to add a param kind of'sub-parent' to remove one level up*/
            content = pathParams.paths.map((...args) => (buildNavItems(...args, true, rootPath)));
            title = pathParams.text;
            Comp = NavDropdown;
            to = false;
            as = false;
        } else if (isDropDownItem) {
            Comp = NavDropdown.Item;
            content = pathParams.text;
        } else {
            content = pathParams.text;
            Comp = (props) => {
                return (
                    <Nav.Link {...props} as={NavLink}>{props.children}</Nav.Link>
                )
            }
            Comp = Nav.Link;
        }

        const div = (idx < (allPaths.length - 1)) ? <Dropdown.Divider /> : null;

        const props = {
            key: (parentPath + pathParams.path),
            title: title
        };

        if (to) props.to = to;
        if (as) props.as = as;

        return (
            <React.Fragment>
                <Comp
                    {...props}
                >{content}</Comp>
                {div}
            </React.Fragment>
        );

    }
    const navItems = paths.mainTree.map((...args) => (buildNavItems(...args)));

    const sorter = (i1, i2) =>{
        if (i1.order < i2.order) return -1;
        if(i1.order > i2.order) return 1;
        else return 0;
    };

    /* TO CONTINUE FROM HERE */
    const buildRouteItems = (routeItem, idx, allR, isDropDownItem = false) => {
        /**
         * @type routeItem
         */
        let lev0,subRoutes= false;
        console.log('ritem',routeItem);
        if(routeItem.hasOwnProperty('selfNav')) {
            lev0 = routeItem.selfNav;
            subRoutes = Object.assign({}, routeItem);
            delete subRoutes.selfNav;
        } else lev0 = routeItem;

        console.log('subrs',subRoutes);
        if (Object.keys(subRoutes).length === 0) {
            if (isDropDownItem) {
                return (
                    <Dropdown.Item to={lev0.path} as={NavLink} key={lev0.path + lev0.name} >{lev0.intl}</Dropdown.Item>
                );
            } else {
                return (
                    <Nav.Link to={lev0.path} as={NavLink} key={lev0.path + lev0.name}>{lev0.intl}</Nav.Link>
                )
            }
        }

        let arr = Object.values(subRoutes).sort(sorter);
        //console.log('sorted arr', arr);
        return (
            <NavDropdown to={lev0.path} as={NavLink} title={lev0.intl} key={lev0.path + lev0.name}>
                {arr.map((...args) => (buildRouteItems(...args, true)))}
            </NavDropdown>
        )

    };

    let mainTree = Object.values(allowedRoutes.mainTree).sort(sorter);
    
    const routeItems = mainTree.map((...args) => (buildRouteItems(...args)));

    return (
        <React.Fragment>
            {navItems}
            {routeItems}
        </React.Fragment>
    );
};

const mapStateToProps = ({ paths, allowedRoutes }) => ({ paths, allowedRoutes });

export default connect(mapStateToProps)(MainNavMenuSm);