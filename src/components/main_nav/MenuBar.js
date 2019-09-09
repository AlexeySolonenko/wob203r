import React from 'react';
import { Button, Col, Navbar, NavDropdown, Nav, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuBarLg from './MenuBarLg.js';
import MenuTreeSm from './MenuTreeSm.js';
const MenuBar = (props) => {

    console.log('menu bar props', props);


    // const buildNavItems = (pathParams, idx, allPaths) => {
    //     let content = null;
    //     let title = null;
    //     if (Array.isArray(pathParams.paths)) {
    //         content = pathParams.paths.map(() => (buildNavItems(...arguments)));
    //         title = pathParams.text;
    //     } else {
    //         content = pathParams.text;
    //     }

    //     let borders = ["border-primary","px-2"];
    //     if(idx > 0) borders.push("border-left");
    //     if(idx < (allPaths.length -1)) borders.push("border-right"); 


    //     let Comp = () => (<div></div>);
    //     if (['home'].includes(pathParams.name)) return null;

    //     if (Array.isArray(pathParams.paths)) {
    //         Comp = () => (
    //             <Navbar.Toggle 
    //                 as={NavLink} 
    //                 aria-controls="large-main-menu" 

    //                 key={pathParams.to}
    //                 >{pathParams.text}</Navbar.Toggle>
    //         );
    //     } else {
    //         Comp = NavLink;
    //     }




    //     return (
    //         <Comp
    //             to={pathParams.to}
    //             key={pathParams.to}

    //             className={(borders.join(' '))}
    //         >{pathParams.text}</Comp>
    //     );


    // }
    // const navItems = props.paths.mainTree.map((p,idx,paths) => (buildNavItems(p,idx,paths)));

    return (
        <React.Fragment>
            {/* <Navbar expand="xs" className='col-12'>
                <div className="d-none d-lg-flex">
                    <MenuBarLg largeMainMenuId='large-main-menu'></MenuBarLg>
                    <Navbar.Collapse id='large-main-menu'>
                        large main menu
                </Navbar.Collapse>
                </div>
              
            </Navbar> */}
       
                <div className="d-flex d-lg-none col-auto pr-0">
                    {/* <Navbar.Collapse id='small-main-menu'>
                        <MenuTreeSm {...props} />
                    </Navbar.Collapse> */}
                    <Navbar.Toggle aria-controls='small-main-menu'><span className='oi oi-menu'></span></Navbar.Toggle>
           </div>
        </React.Fragment>
    );
};

const mapStateToProps = ({ paths }) => ({ paths });

export default connect(mapStateToProps)(MenuBar);