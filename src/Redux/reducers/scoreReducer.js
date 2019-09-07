import { UPDATE_SCORE, CLEAR_CURRENT_SCORE } from '../actions';
import initialState from '../initialState';

const scoreReducer = (state = initialState.score, action) => {
  switch (action.type) {
    case UPDATE_SCORE: {
      let bestScoreValue = state.bestScore;
      const currentScoreValue = state.currentScore + action.payload;
      if (!bestScoreValue) {
        bestScoreValue = action.payload;
      } else {
        bestScoreValue = Math.max(
          currentScoreValue,
          bestScoreValue,
        );
      }
      return {
        ...state,
        currentScore: currentScoreValue,
        bestScore: bestScoreValue,
      };
    }
    case CLEAR_CURRENT_SCORE:
      return {
        ...state,
        currentScore: initialState.score.currentScore,
      };
    default:
      return state;
  }
};

export default scoreReducer;
