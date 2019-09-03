/* START-UP POINT FOR THE CLIENT SITE APPLICATION  */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from './src/reducers/index.js';

const axiosInstance = axios.create({
    baseURL: '/api'
});
const store = createStore(reducers, window.INITIAL_STORE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

import ClientRenderer from './src/universal/ClientRenderer.js';
ReactDOM.hydrate(<ClientRenderer />, document.querySelector('#root'));
console.log(1);

