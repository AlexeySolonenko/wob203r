import React from 'react';
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
            {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>;

console.log(1);

