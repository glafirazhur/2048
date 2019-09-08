import { INIT_GAME, FINISH_GAME } from '../actions';
import { initTilesAction } from './tilesActions';
import { clearScoreAction } from './scoreActions';
import { updateEmptiesAction } from './emptiesAction';


const initGameAction = () => ({ type: INIT_GAME });

export const initGameThunkAction = () => (dispatch) => {
  dispatch(initGameAction);
  dispatch(clearScoreAction());
  dispatch(initTilesAction());
  dispatch(updateEmptiesAction());
};

export const finishGame = (gameStatus) => ({
  type: FINISH_GAME,
  payload: gameStatus,
});
