import { combineReducers } from 'redux';
import drawerReducer from './drawerReducer';
import attendeesReducer from './attendeesReducer';

export default combineReducers({
    drawerState: drawerReducer,
    attendees:attendeesReducer
});