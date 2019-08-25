import { FETCH_PATHS } from './actionsDeclarations';

export const fetchPaths = () => async (dispatch, getState, api) => {
    const res = await api.get('/'+FETCH_PATHS);
    dispatch({
        type: FETCH_PATHS,
        payload: {
            data: res.data.payload.data
        }
    });
};