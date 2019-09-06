import { UPDATE_CURRENT_SCORE, UPDATE_BEST_SCORE } from '../actions';

const numbersReducer = (state = 0, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_SCORE:
      return action.payload;
    case UPDATE_BEST_SCORE:
      return action.payload;
    default:
      return state;
  }
};

export default numbersReducer;
