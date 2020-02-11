import { FETCH_PATHS } from '../actions/actionsDeclarations.js';
export default function (state = null, action) {
    switch (action.type) {
        case FETCH_PATHS:
            return action.payload.data || false;
        default:
            return state;
    }
};