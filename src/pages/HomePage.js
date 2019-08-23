import React from 'react';
import NavItemBase from '../components/NavItemBase.js';
import { Row } from 'react-bootstrap';

const HomePage = (props) => {
    return (
        <React.Fragment>
            <h3 className='row'>STUDYSNAMI</h3>
            <div >

                <p>Welcome to your online booking and tracking plaform!</p>
                <NavItemBase />
            </div>
        </React.Fragment>
    );
}

export default {
    component: HomePage,
}