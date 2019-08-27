import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const BreadCrumbs = (props) => {

    console.log('brdcrmbs', props);

    let pathParts = props.location.pathname;
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

    //console.log(findPath(props.paths, pathParts, 0));
    console.log(pathParts);
    return (
        <Col>
            {
                pathParts.map((p, idx, all) => {
                    //let to = p + all.slice(0, idx).join('/');
                    let to = '/' + all.slice(0, idx+1).join('/');
                    //let to = '/' + p;

                    let text = findText(props.paths, all.slice(0, idx + 1))
                    let slash = idx === 0 ? '' : ' / ';
                    return (
                        <NavLink key={to} to={to}>{(slash + text)}</NavLink>
                    );
                })
            }
        </Col>
    );
};

const mapStateToProps = ({ paths }) => { return { paths }; };

export default connect(mapStateToProps)(BreadCrumbs);