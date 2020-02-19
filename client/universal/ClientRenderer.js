import React from 'react';
import { Route, Switch } from 'react-router';
import ServiceUnavailable from '../pages/503ServiceUn/ServiceUnavaialble.js';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import Routes from '../routes/Routes.js';
import reducers from '../reducers/index.js';


const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(reducers, window.INITIAL_STORE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));


export default () =>
    <Provider store={store} >
        <BrowserRouter >
        <Switch>
                <Route path='/we_will_be_back_soon'><ServiceUnavailable.component /></Route>
                <Route >{renderRoutes(Routes)}</Route>
        </Switch>
        </BrowserRouter>
    </Provider>;


