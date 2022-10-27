import { ADD_ATTENDEE } from './types';


export const handleAddAttendee = (attendee) => dispatch => {
    dispatch({
        type: ADD_ATTENDEE,
        payload: attendee
    })
};