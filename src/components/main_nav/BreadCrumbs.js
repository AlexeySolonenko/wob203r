import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const BreadCrumbs = (props) => {

    let pathParts = props.location.pathname;
    pathParts = pathParts.replace('/show_collapsible','');
    if (pathParts.charAt(0) === '/') pathParts = pathParts.slice(1);
    pathParts = pathParts.split('/');


    const findText = (paths, seekable, depth) => {
        if (!depth) depth = 0;
        let match = paths.find((p) => (p.path.replace('/', '') === seekable[depth]));
        if (!match) return false;
        if (match.paths && Array.isArray(match.paths)) {
            return findText(match.paths, seekable, ++depth) || match.text;
        } else {
            return match.text;
        }
    }

    const backBtnClickHndlr = () => {
        props.closeSmMenu();
        props.history.goBack();
    }

    return (
        <Col xs="auto">
            <a href='' onClick={backBtnClickHndlr}>{"<<"} | </a>
            {
                pathParts.map((p, idx, all) => {
                    let to = '/' + all.slice(0, idx + 1).join('/');

                    let text = findText(props.paths, all.slice(0, idx + 1))
                    let slash = idx === 0 ? '' : ' / ';

                    const lastClass = idx === (pathParts.length -1) ? 'text-dark' : '';
                    return (
                        <NavLink className={lastClass} onClick={props.closeSmMenu} key={to} to={to}>{(slash + text)}</NavLink>
                    );
                })
            }
        </Col>
    );
};

const mapStateToProps = ({ paths }) => { return { paths }; };

export default connect(mapStateToProps)(BreadCrumbs);