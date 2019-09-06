import { UPDATE_POSITION, ADD_NUMBER, REMOVE_NUMBER } from '../actions';
import initialState from '../initialState';

const numbersReducer = (state = initialState.numbers, action) => {
  switch (action.type) {
    case UPDATE_POSITION:
      return [...state];
    case ADD_NUMBER:
      return [...state];
    case REMOVE_NUMBER:
      return [...state];
    default:
      return state;
  }
};

export default numbersReducer;
