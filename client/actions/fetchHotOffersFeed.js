import { FETCH_HOT_OFFERS_FEED } from './actionsDeclarations.js';

export const fetchHotOffersFeed = () => async (dispatch, getState, api) => {
    const res = await api.get('/hot_offers_feed');
    dispatch({
        type: FETCH_HOT_OFFERS_FEED,
        payload: res
    })
};