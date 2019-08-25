import React from 'react';
import NavItemBase from '../components/NavItemBase.js';
import { Row } from 'react-bootstrap';
import { fetchPaths } from '../actions/fetchPaths.js';
import { connect } from 'react-redux';

const HomePage = (props) => {
    console.log('home page props', props);
    return (
        <React.Fragment>
            <h3 className='row'>STUDYSNAMI</h3>
            <div >
                <p>Welcome to your online booking and tracking plaform!</p>
                {[...props.paths.map((path) => <NavItemBase key={path.path} path={path} />)]}
            </div>
        </React.Fragment>
    );
}

const loadData = (store) => {
    return store.dispatch(fetchPaths());
}
const mapStateToProps = ({paths}) => {
    return ({ paths });
};
export default {
    component: connect(mapStateToProps)(HomePage),
    //loadData: loadData,
}