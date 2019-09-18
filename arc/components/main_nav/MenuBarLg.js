import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';

const MenuBarLg = ({ paths,largeMainMenuId }) => {

    return (
        <React.Fragment>
            {paths.mainTree.map((p, idx, arr) => {
                if (p.name === 'home') return null;

                let clss = ["border-primary", "px-2"];
                if (idx > 1) clss.push("border-left");
                if (idx < (arr.length - 1)) clss.push("border-right");
                clss = clss.join(' ');

                if (Array.isArray(p.paths)) {
                    return (
                        <Navbar.Toggle
                            as={NavLink}
                            aria-controls={largeMainMenuId}
                            key={p.to}
                            className={clss}
                        >{p.text}</Navbar.Toggle>
                    );
                } else {
                    return (
                        <NavLink
                            className={clss}
                            to={p.to}
                            key={p.to}
                        >{p.text}</NavLink>
                    );
                }
            })}
        </React.Fragment>
    );
}

const mapStateToProps = ({ paths }) => ({ paths });

export default connect(mapStateToProps)(MenuBarLg);