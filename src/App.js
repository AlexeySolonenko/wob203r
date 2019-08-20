import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header.js';
import { fetchCurrentUser } from './actions/fetchCurrentUser.js';
import { connect } from 'react-redux';

const App = (props) => {
    console.log(props);
    const route= props.route;
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

const mapStateToProps = state => state;



export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};