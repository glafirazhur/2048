import { UPDATE_CURRENT_SCORE, UPDATE_BEST_SCORE } from '../actions';

export const updateCurrentScore = (scoreValue) => ({ type: UPDATE_CURRENT_SCORE, payload: scoreValue });
export const updateBestScore = (scoreValue) => ({ type: UPDATE_BEST_SCORE, payload: scoreValue });
