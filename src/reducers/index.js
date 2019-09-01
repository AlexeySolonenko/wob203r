import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import pathsReducer from './pathsReducer.js';
import viewParamsReducer from './viewParamsReducer.js';
import hotOffersFeedReducer from './hotOffersFeedReducer.js';


export default combineReducers({
    auth: authReducer,
    hotOffersFeed: hotOffersFeedReducer,
    paths: pathsReducer,
    viewParams: viewParamsReducer,
});