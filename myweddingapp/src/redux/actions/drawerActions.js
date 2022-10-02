import { DRAWER_STATE } from './types';


export const handleDrawerState = () => dispatch => {
    console.log("in handle drawer state!")
    dispatch({
        type: DRAWER_STATE
    })
};