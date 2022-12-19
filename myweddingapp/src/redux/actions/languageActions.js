import { CHANGE_LANGUAGE  } from './types';


export const changeLanguage = (content) => dispatch => {
    dispatch({
        type: CHANGE_LANGUAGE    
    })
}