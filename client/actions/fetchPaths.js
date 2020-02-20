import { FETCH_PATHS } from './actionsDeclarations';

export const fetchPaths = () => async (dispatch, getState, api) => {
    let res;
    try{
        res = await api.get('/'+FETCH_PATHS);
        dispatch({
            type: FETCH_PATHS,
            payload: {
                data: res.data.payload.data
            }
        });
    } catch(e){
        console.log('res',e);
        console.log('https',e.config);
    }
};