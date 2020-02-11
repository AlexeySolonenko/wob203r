import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/**
 * 
 * @typedef import('../../typedefs/nafTypeDefs.js').wob203rRoutes
 */

/**
 * 
 * @function 
 * @param {Object} props
 * @param {wob203rRoutes} props.allowedRoutes 
 */
const ContactAnAdvisor01 = ({ allowedRoutes }) => {

    const contactLink = allowedRoutes.contact.path;

    return (
        <Button as={NavLink} to={contactLink} className='font-weight-bold rounded-0' >
            <p>СВЯЗАТЬСЯ С КОНСУЛЬТАНТОМ</p>
            <p>по дополнительным вопросам</p>
        </Button>
    );
}

const mapStateToProps = ({allowedRoutes}) => ({allowedRoutes});

export default connect(mapStateToProps)(ContactAnAdvisor01);