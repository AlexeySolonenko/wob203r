import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Nav,Row } from 'react-bootstrap';

const MainNavLg = (props) => {

    /* find closest top paths array */
    let pathParts = props.location.pathname;
    if (pathParts.charAt(0) === '/') pathParts = pathParts.slice(1);
    pathParts = pathParts.split('/');

    const findPathsArr = (paths, seekable, depth) => {
        if (!depth) depth = 0;
        if (depth >= seekable.length - 1) {
            console.log('building nestted path');
            //return paths;

            return paths.map((p) => {
                let ret = Object.assign({}, p);
                console.log('ret', ret);

                ret.nestedPath = ('/' + seekable.slice(0, depth).join('/') + p.path).replace('//', '/');
                console.log(ret);

                return ret;
            });
        }
        let nestedPaths = false;

        nestedPaths = paths.find((p) => {
            return (
                p.name === seekable[depth]
                &&
                p.hasOwnProperty('paths')
            );
        });

        if (nestedPaths === undefined || !nestedPaths) {
            return paths;
        } else {

            return findPathsArr(nestedPaths.paths, seekable, ++depth);
        }
    };

    let pathsToBuild = findPathsArr(props.paths, pathParts, 0);



    return (
        <Row className=' align-items-center d-none d-lg-block h-50'>
            <Col xs='12'>
                <Nav style={{ fontSize: '0.75em' }}>
                    {
                        pathsToBuild.map((p, idx) => {
                            let activeState = (props.location.pathname.indexOf(p.path) > -1) ? 'text-dark' : '';
                            const txt = activeState ? <u>{p.text + "\u00a0\u00a0"}</u> : (p.text + "\u00a0\u00a0");

                            return (
                                <Nav.Item key={p.name}>
                                    <NavLink
                                        to={p.nestedPath}
                                        className={activeState + " my-auto"}
                                    >{txt}</NavLink>
                                </Nav.Item>
                            );
                        })
                    }
                </Nav>
            </Col>
        </Row>
    );
};


const mapStateToProps = ({ paths }) => ({ paths });

export default connect(mapStateToProps)(MainNavLg);