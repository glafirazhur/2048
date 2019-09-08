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
  const { tiles } = getState();
  dispatch(updateEmptiesAction(tiles));
};

export const finishGame = () => ({ type: FINISH_GAME });
