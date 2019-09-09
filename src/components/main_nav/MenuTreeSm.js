import React from 'react';
import { Button, Col, Navbar, NavDropdown, Nav, Row, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuBarLg from './MenuBarLg.js';

const MenuTreeSm = ({ paths }) => {
    

    const buildNavItems = (pathParams, idx, allPaths, isDropDownItem = false, parentPath = '') => {
        
        let content = null;
        let title = null;
        let to = parentPath+pathParams.path;
        let as = NavLink;

        let Comp = () => (<div></div>);
        console.log(pathParams);
        console.log(parentPath);
        if (Array.isArray(pathParams.paths)) {
            let rootPath = '';
            if(pathParams.isNestedRootPath) rootPath=pathParams.path;
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
            key:(parentPath+pathParams.path),
            title:title
        };
        if(to) props.to= to;
        if(as) props.as = as;

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

    return (
        navItems
    );
};

const mapStateToProps = ({ paths }) => ({ paths });

export default connect(mapStateToProps)(MenuTreeSm);