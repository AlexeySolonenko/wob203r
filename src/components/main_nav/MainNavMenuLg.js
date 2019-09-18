import React from 'react';
import { Card, CardColumns, Col, Dropdown,  Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/** 
 * @typedef {import('../../typedefs/navTypeDefs.js').navItem} 
 */



const MainNavMenuLg = (props) => {

    const buildCards = (props) => {
        console.log('build card props', props);
        /** @type {navItem} */
        const item = props.item;
        /** @type {string} */
        const parentPath = props.parentPath;
        /** @type {number} */
        let depth = props.depth;
        if (!depth) depth = 0;
        let navHeaderClass = ['text-uppercase', 'font-weight-bold'].join(' ');
        let to = parentPath + item.path;
        if (item.isNestedRootPath) to = item.path;
        let navHeader = <Dropdown.Item as={NavLink} to={to} className={navHeaderClass}>{item.text}</Dropdown.Item>

        let subNavs = null;
        let cardProps = { className: ['rounded-0', 'border-left-0', 'border-right-0', 'border-bottom-0', 'border-primary'] };
        if (Array.isArray(item.paths)) {
            navHeader = <Dropdown.Item to={to} as={NavLink} className={navHeaderClass} >{item.text}</Dropdown.Item>;
            subNavs = item.paths.map((p) => {
                if (Array.isArray(p.paths)) return buildCards({ item: p, depth: ++depth, parentPath: to });
                let subNavTo = to + p.path;
                if (p.isNestedRootPath) subNavTo = p.path;

                return (
                    <Dropdown.Item to={subNavTo} as={NavLink} key={subNavTo} >{p.text}</Dropdown.Item>
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

    const mainNavMenu = props.paths.mainTree.map((p, idx, arr) => {
        const navButtonProps = {
            xs: 'auto',
            className: ['border-primary'],
            menuClass: [],
        };

        if (idx > 0) navButtonProps.className.push('border-left')
        if (idx > (arr.length - 1)) navButtonProps.className.push('border-right')

        if (!Array.isArray(p.paths)) {
            navButtonProps.className = navButtonProps.className.join(' ');
            return (
                <Col
                    key={'menu-lg' + p.name}
                    {...navButtonProps}
                    as={NavLink}
                    to={p.path}>{p.text}</Col>
            );
        }
        const dropdownProps = {
            className: ['shadow'],
        };
        let colCount;
        if (['courses'].includes(p.name)) {
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
        return (
            <Dropdown key={'menu-lg' + p.name} as={Col} {...navButtonProps} >
                <Dropdown.Toggle as={NavLink} id={'menu-lg' + p.name} >{p.text}
                </Dropdown.Toggle>
                <Dropdown.Menu {...dropdownProps} >
                    <CardColumns className="p-2" style={{ columnCount: colCount }}>
                        {p.paths.map((subPath) => (buildCards({ item: subPath, depth: 0, parentPath: p.path })))}
                    </CardColumns>
                </Dropdown.Menu>
            </Dropdown>
        );
    });

    return (
        <Row className='justify-content-end w-100 pt-1 align-items-center '>
            {mainNavMenu}
        </Row>
    );
};

const mapStateToProps = ({ paths }) => ({ paths });

export default connect(mapStateToProps)(MainNavMenuLg);