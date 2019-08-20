import { FETCH_CURRENT_USER } from '../actions/actionsDeclarations.js';
//import actions from '../actions/actionsDeclarations.js';
//const FETCH_CURRENT_USER = actions.FETCH_CURRENT_USER;  
export default function (state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};