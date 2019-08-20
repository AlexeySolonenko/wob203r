import { FETCH_CURRENT_USER } from './actionsDeclarations.js';

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    /* TODO to provide an URL for fetching a the current user  */
    try {
        const res = await api.get('/');
    } catch (e) {
        console.log(e);
        res = {};
    }
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
};