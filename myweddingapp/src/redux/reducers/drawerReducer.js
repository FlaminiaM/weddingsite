import { DRAWER_STATE } from '../actions/types';

const initialState = {
  isDrawerOpen: null,
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_STATE:
      return {
        ...state,
        isDrawerOpen: state.isDrawerOpen === null ? true : !state.isDrawerOpen
      };
    default:
      return state;
  }
}

export default drawerReducer;