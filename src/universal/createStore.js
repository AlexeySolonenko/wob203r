import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../reducers/index.js';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: APP_CONFIG.apiUrl
    });
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return store;
}