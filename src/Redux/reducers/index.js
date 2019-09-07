import { combineReducers } from 'redux';
import numbersReducer from './numbersReducer';
import emptyFieldsReducer from './emptyFieldsReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
  numbers: numbersReducer,
  emptyFields: emptyFieldsReducer,
  score: scoreReducer,
});
