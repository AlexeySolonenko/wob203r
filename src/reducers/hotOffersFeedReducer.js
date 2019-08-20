import { FETCH_HOT_OFFERS_FEED } from '../actions/actionsDeclarations.js';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_HOT_OFFERS_FEED:
            return action.payload.data || false;
        default:
            return state;
    }
}