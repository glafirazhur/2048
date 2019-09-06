import { UPDATE_BEST_SCORE } from '../actions';
import initialState from '../initialState';

const bestScoreReducer = (state = initialState.bestScore, action) => {
  switch (action.type) {
    case UPDATE_BEST_SCORE:
      return action.payload;
    default:
      return state;
  }
};

export default bestScoreReducer;
