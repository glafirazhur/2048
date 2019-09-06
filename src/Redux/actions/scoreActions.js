import { UPDATE_CURRENT_SCORE, UPDATE_BEST_SCORE } from '../actions';

export const updateCurrentScoreAction = (currentValue) => ({
  type: UPDATE_CURRENT_SCORE,
  payload: currentValue,
});

export const updateBestScoreAction = (bestValue) => ({
  type: UPDATE_BEST_SCORE,
  payload: bestValue,
});
