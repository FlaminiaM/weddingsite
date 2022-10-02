import { DRAWER_STATE } from '../actions/types';

const initialState = {
  isDrawerOpen: false,
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_STATE:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    default:
      return state;
  }
}

export default drawerReducer;