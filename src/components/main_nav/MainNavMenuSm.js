import React from 'react';
import { NavDropdown, Nav, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/** 
 * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes 
 */

/** 
 * @typedef import('../../typedefs/navTypeDefs.js').routeItem 
 */

/**
 * @fuction
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const MainNavMenuSm = ({ allowedRoutes }) => {

    const sorter = (i1, i2) => {
        let v1, v2;
        if (i1.hasOwnProperty('selfNav')) v1 = i1.selfNav.order;
        else v1 = i1.order;
        if (i2.hasOwnProperty('selfNav')) v2 = i2.selfNav.order;
        else v2 = i2.order;
        return parseInt(v1) - parseInt(v2);
    };

    const buildRouteItems = (routeItem, idx, allR, isDropDownItem = false) => {
        /**
         * @type routeItem
         */
        let lev0;
        let subRoutes = false;
        let content;
        const div = (idx < (allR.length - 1)) ? <Dropdown.Divider /> : null;

        if (routeItem.hasOwnProperty('selfNav')) {
            lev0 = routeItem.selfNav;
            subRoutes = Object.assign({}, routeItem);
            delete subRoutes.selfNav;
        } else lev0 = routeItem;

        const commonProps = {
            to: lev0.path,
            as: NavLink,
            key: lev0.path + lev0.name
        };

        if (Object.keys(subRoutes).length === 0) {
            if (isDropDownItem) {
                content = (
                    <Dropdown.Item {...commonProps} >{lev0.intl}</Dropdown.Item>
                );
            } else {
                content = (
                    <Nav.Link {...commonProps} >{lev0.intl}</Nav.Link>
                );
            }
        } else {
            let arr = Object.values(subRoutes).sort(sorter);
            commonProps.as = Dropdown.Item;
            delete commonProps.to;
            delete commonProps.as;
            let className = { className: ['font-weight-bold'] };
            if (isDropDownItem) className.className.push('pl-2');
            className.className = className.className.join(' ');
            content = (
                <NavDropdown {...commonProps} title={lev0.intl} {...className}>
                    {arr.map((...args) => (buildRouteItems(...args, true)))}
                </NavDropdown>
            );
        }

        return (
            <React.Fragment key={lev0.path+lev0.name}>
                {content}
                {div}
            </React.Fragment>
        )
    };

    let mainTree = Object.values(allowedRoutes.mainTree);
    mainTree.sort(sorter);
    const routeItems = mainTree.map((...args) => (buildRouteItems(...args)));

    return (
        <React.Fragment>
            {routeItems}
        </React.Fragment>
    );
};

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(MainNavMenuSm);