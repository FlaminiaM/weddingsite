import { CHANGE_LANGUAGE } from '../actions/types';

const initialState = {
    isItalian: true,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        isItalian: !state.isItalian
      };
    default:
      return state;
  }
}

export default languageReducer;