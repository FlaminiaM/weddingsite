import { combineReducers } from 'redux';
import drawerReducer from './drawerReducer';

export default combineReducers({
    drawerState: drawerReducer
});