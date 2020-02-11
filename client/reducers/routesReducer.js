import { FETCH_ROUTES } from '../actions/actionsDeclarations.js';
export default function (state = null, action) {
    switch (action.type) {
        case FETCH_ROUTES:
            return action.payload.data || false;
        default:
            return state;
    }
};