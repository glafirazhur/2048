import { INIT_GAME, FINISH_GAME } from '../actions';
import {
  initTilesAction, updateTilesPositionAction, addRandomTileAction,
  mergeTilesAction,
} from './tilesActions';
import { clearScoreAction } from './scoreActions';
import { updateEmptiesAction, initEmptiesAction } from './emptiesAction';

const initGameAction = () => ({ type: INIT_GAME });
const finishGameAction = () => ({ type: FINISH_GAME });

export const initGameThunkAction = () => (dispatch, getState) => {
  dispatch(initGameAction());
  dispatch(clearScoreAction());
  dispatch(initEmptiesAction());
  dispatch(initTilesAction());
  dispatch(updateEmptiesAction(getState().tiles));
};

export const updateTilesPositionAThunk = (direction) => (dispatch, getState) => {
  dispatch(updateTilesPositionAction(direction, getState().emptyFields));
  dispatch(updateEmptiesAction(getState().tiles));

  dispatch(addRandomTileAction(getState().emptyFields));
  dispatch(updateEmptiesAction(getState().tiles));

  // dispatch(mergeTilesAction(direction));
  // dispatch(addRandomTileAction(getState().emptyFields));

  // check game status
  const freeEmpties = getState().emptyFields.filter(({ isEmpty }) => isEmpty);
  if (!freeEmpties.length) {
    dispatch(finishGameAction());
  }
};
