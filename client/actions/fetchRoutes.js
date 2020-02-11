import { FETCH_ROUTES } from './actionsDeclarations';

export const fetchRoutes = () => async (dispatch, getState, api) => {
    const res = await api.get('/'+FETCH_ROUTES);
    dispatch({
        type: FETCH_ROUTES,
        payload: {
            data: res.data.payload.data
        }
    });
};