import { INIT_GAME, FINISH_GAME } from '../actions';
import { initTilesAction } from './tilesActions';
import { clearScoreAction } from './scoreActions';
import { updateEmptiesAction, initEmptiesAction } from './emptiesAction';

const initGameAction = () => ({ type: INIT_GAME });

export const initGameThunkAction = () => (dispatch, getState) => {
  dispatch(initGameAction());
  dispatch(clearScoreAction());
  dispatch(initEmptiesAction());
  dispatch(initTilesAction());
  dispatch(updateEmptiesAction(getState().tiles));
};

export const finishGameAction = () => ({ type: FINISH_GAME });
