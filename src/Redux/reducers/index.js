import { combineReducers } from 'redux';
import numbersReducer from './numbersReducer';
import emptyFieldsReducer from './emptyFieldsReducer';
import currentScoreReducer from './currentScoreReducer';
import bestScoreReducer from './bestScoreReducer';

export default combineReducers({
  numbers: numbersReducer,
  emptyFields: emptyFieldsReducer,
  currentScore: currentScoreReducer,
  bestScore: bestScoreReducer,
});
