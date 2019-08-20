import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import hotOffersFeedReducer from './hotOffersFeedReducer.js';


export default combineReducers({
    auth: authReducer,
    hotOffersFeed: hotOffersFeedReducer,
});