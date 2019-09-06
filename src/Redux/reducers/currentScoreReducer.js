import { UPDATE_CURRENT_SCORE } from '../actions';
import initialState from '../initialState';

const currentScoreReducer = (state = initialState.currentScore, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_SCORE:
      return action.payload;
    default:
      return state;
  }
};

export default currentScoreReducer;
