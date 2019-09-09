import {
  ADD_RANDOM_TILE, ADD_TILE, INIT_FIRST_TILES,
  UPDATE_POSITION,
} from '../actions';
import { updateEmptiesAction } from './emptiesAction';
import { finishGameAction } from './gameActions';

export const addTileAction = () => ({ type: ADD_TILE });

export const initTilesAction = () => ({
  type: INIT_FIRST_TILES,
});

const addRandomTileAction = (empryFields) => ({
  type: ADD_RANDOM_TILE,
  payload: empryFields
});

const updateTilesPositionAction = (direction, emptyFields) => ({
  type: UPDATE_POSITION,
  payload: {
    direction,
    emptyFields,
  },
});

export const updateTilesPositionAThunk = (direction) => (dispatch, getState) => {
  dispatch(updateTilesPositionAction(direction, getState().emptyFields));
  dispatch(updateEmptiesAction(getState().tiles));
  dispatch(addRandomTileAction(getState().emptyFields));
  dispatch(updateEmptiesAction(getState().tiles));
  // check game status
  const freeEmpties = getState().emptyFields.filter(({ isEmpty }) => isEmpty);
  if (!freeEmpties.length) {
    dispatch(finishGameAction());
  }
};
