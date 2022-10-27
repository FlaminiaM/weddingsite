import { ADD_ATTENDEE } from '../actions/types';

const initialState = {
  attendees: [],
};

const attendeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ATTENDEE:
      return {
        ...state,
        attendees: [...state.attendees, action.payload]
      };
    default:
      return state;
  }
}

export default attendeesReducer;