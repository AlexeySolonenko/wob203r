import { FETCH_VIEW_PARAMS } from '../actions/actionsDeclarations.js';
export default function (state = null, action) {
    switch (action.type) {
        case FETCH_VIEW_PARAMS:
            return action.payload.data || false;
        default:
            return state;
    }
};