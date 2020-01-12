import { numbersReducer } from './numbers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    numbers: numbersReducer
});

export { allReducers };