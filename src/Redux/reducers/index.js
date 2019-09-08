import { combineReducers } from 'redux';
import tilesReducer from './tilesReducer';
import emptyFieldsReducer from './emptyFieldsReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
  tiles: tilesReducer,
  emptyFields: emptyFieldsReducer,
  score: scoreReducer,
});
