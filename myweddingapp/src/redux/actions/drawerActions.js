import { DRAWER_STATE } from './types';


export const handleDrawerState = () => dispatch => {
    dispatch({
        type: DRAWER_STATE
    })
};