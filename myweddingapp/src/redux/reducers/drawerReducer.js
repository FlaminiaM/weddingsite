import { DRAWER_STATE, SET_DRAWER_CONTENT } from '../actions/types';

const initialState = {
  isDrawerOpen: null,
  drawerContent: "",
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_STATE:
      return {
        ...state,
        isDrawerOpen: state.isDrawerOpen === null ? true : !state.isDrawerOpen
      };
    case SET_DRAWER_CONTENT:
      return {
        ...state,
        drawerContent: action.payload
      }
    default:
      return state;
  }
}

export default drawerReducer;