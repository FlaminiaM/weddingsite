import { DRAWER_STATE, SET_DRAWER_CONTENT  } from './types';


export const handleDrawerState = () => dispatch => {
    dispatch({
        type: DRAWER_STATE
    })
};

export const setDrawerContent = (content) => dispatch => {
    dispatch({
        type: SET_DRAWER_CONTENT,
        payload: content
    })
}