import { UPDATE_SCORE, CLEAR_CURRENT_SCORE } from '../actions';

export const updateScoreAction = (currentScore) => ({
  type: UPDATE_SCORE,
  payload: currentScore,
});

export const clearScoreAction = () => ({ type: CLEAR_CURRENT_SCORE });
