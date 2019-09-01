import { FETCH_VIEW_PARAMS } from './actionsDeclarations.js';

export const fetchViewParams = () => async (dispatch, getState, api) => {
    const res = await api.get('/'+FETCH_VIEW_PARAMS);
    dispatch({
        type: FETCH_VIEW_PARAMS,
        payload: {
            data: res.data.payload.data
        }
    });
};