import { UPDATE_EMPTIES } from '../actions';
import initialState from '../initialState';

const emptyFieldsReducer = (state = initialState.emptyFields, action) => {
  switch (action.type) {
    case UPDATE_EMPTIES:
      return [...state];
    default:
      return state;
  }
};

export default emptyFieldsReducer;
