import { combineReducers } from 'redux';
import loadingStatus from './loading';
import counters from './counters';

const rootReducer = combineReducers({ loadingStatus, counters });

export default rootReducer;
