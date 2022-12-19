import { combineReducers } from 'redux';
import drawerReducer from './drawerReducer';
import attendeesReducer from './attendeesReducer';
import languageReducer from './languageReducer';

export default combineReducers({
    drawerState: drawerReducer,
    attendees:attendeesReducer,
    language: languageReducer
});