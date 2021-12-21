import { combineReducers } from 'redux';
import mainStateReducer from './mainState';
import auxStateReducer from './auxState';

const reducers = combineReducers({
  main: mainStateReducer,
  aux: auxStateReducer,
});

export default reducers;
