import React from 'react';
import { Card, CardColumns, Col, Dropdown, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/** 
 * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes 
 */

const sorter = (i1, i2) => {
    let v1, v2;
    if (i1.hasOwnProperty('selfNav')) v1 = i1.selfNav.order;
    else v1 = i1.order;
    if (i2.hasOwnProperty('selfNav')) v2 = i2.selfNav.order;
    else v2 = i2.order;
    return parseInt(v1) - parseInt(v2);
};

/**
 * @fuction
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes
 */
const MainNavMenuLg = (props) => {
    /**
     * 
     * @function 
     * @param {Object} props 
     * @param {routeItem} props.item
     *  
     */
    const buildCards = (props) => {
        
        /** @type routeItem */
        let topItem;
        let subRoutes = false;

        if (props.item.hasOwnProperty('selfNav')) {
            topItem = props.item.selfNav;
            subRoutes = Object.assign({}, props.item);
            delete subRoutes.selfNav;
        } else topItem = props.item;

        /** @type {string} */
        const parentPath = props.parentPath;
        /** @type {number} */
        let depth = props.depth;

        if (!depth) depth = 0;
        let navHeaderClass = ['text-uppercase', 'font-weight-bold'].join(' ');
        let navHeader = <Dropdown.Item as={NavLink} to={topItem.path} className={navHeaderClass}>{topItem.intl}</Dropdown.Item>

        let subNavs = null;
        let cardProps = { 
            className: ['rounded-0', 'border-left-0', 'border-right-0', 'border-bottom-0', 'border-primary'],
            key: topItem.path + topItem.name
        };
        if (Object.keys(subRoutes).length > 0) {
            let sortedSubR = Object.values(subRoutes).sort(sorter);
            subNavs = sortedSubR.map((r) => {
                /** @type routeItem */
                let topR;
                let subRs = false;
                if (r.hasOwnProperty('selfNav')) {
                    topR = r.selfNav;
                    subRs = Object.assign({}, r);
                    delete subRs.selfNaf;
                } else topR = r;
                if (Object.values(subRs).lenth > 0) return buildCards({ item: r, depth: ++depth, parentPath: topItem.path });

                return (
                    <Dropdown.Item to={topR.path} as={NavLink} key={topR.path + topR.name} >{topR.intl}</Dropdown.Item>
                );
            });
        } else {

        }

        cardProps.className = cardProps.className.join(' ');
        return (
            <Card {...cardProps} >
                {navHeader}{subNavs}
            </Card>

        );
    };

    const mainNavMenuLarge = Object.values(props.allowedRoutes.mainTree).sort(sorter).map((routeItem, idx, allR) => {
        const navButtonProps = {
            xs: 'auto',
            className: ['border-primary'],
            className: [],
        };

        /** @type routeItem  */
        let topBarItem;
        let subRoutes = false;

        if (routeItem.hasOwnProperty('selfNav')) {
            topBarItem = routeItem.selfNav;
            subRoutes = Object.assign({}, routeItem);
            delete subRoutes.selfNav;
        } else topBarItem = routeItem;

        if (idx > 0) navButtonProps.className.push('border-left')
        if (idx > (allR.length - 1)) navButtonProps.className.push('border-right');

        if (Object.keys(subRoutes).length === 0) {
            navButtonProps.className = navButtonProps.className.join(' ');
            return (
                <Col
                    key={'menu-lg' + topBarItem.name + topBarItem.path}
                    {...navButtonProps}
                    as={NavLink}
                    to={topBarItem.path}>{topBarItem.intl}</Col>
            );
        }

        const dropdownProps = {
            className: ['shadow'],
        };
        let colCount;
        if (['courses'].includes(topBarItem.name)) {
            navButtonProps.className.push('position-static');
            dropdownProps.className.push('w-100');
            colCount = 3;
        } else {
            //commonProps.className.push('wvw-50');
            colCount = 1;
            dropdownProps.className.push('w-auto');
            dropdownProps.alignRight = true;
        }
        dropdownProps.className = dropdownProps.className.join(' ');
        navButtonProps.className = navButtonProps.className.join(' ');
        let sortedSubRoutes = Object.values(subRoutes).sort(sorter);
        return (
            <Dropdown key={'menu-lg' + topBarItem.name} as={Col} {...navButtonProps} >
                <Dropdown.Toggle as='div' id={'menu-lg' + topBarItem.name} className='font-weight-bold text-primary'>{topBarItem.intl}
                </Dropdown.Toggle>
                <Dropdown.Menu {...dropdownProps} >
                    <CardColumns className="p-2" style={{ columnCount: colCount }}>
                        {sortedSubRoutes.map((subRoute) => (buildCards({ item: subRoute, depth: 0, parentPath: topBarItem.path })))}
                    </CardColumns>
                </Dropdown.Menu>
            </Dropdown>
        );
    });

    return (
        <Row className='justify-content-end w-100 pt-1 align-items-center '>
            {mainNavMenuLarge}
        </Row>
    );
};

const mapStateToProps = ({ allowedRoutes }) => ({ allowedRoutes });

export default connect(mapStateToProps)(MainNavMenuLg);