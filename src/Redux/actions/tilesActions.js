import { ADD_TILE, INIT_FIRST_TILES, UPDATE_POSITION } from '../actions';
import { updateEmptiesAction } from './emptiesAction';

export const addTileAction = () => ({ type: ADD_TILE });

export const initTilesAction = () => ({
  type: INIT_FIRST_TILES,
});

const updateTilesPositionAction = (direction, emptyFields) => ({
  type: UPDATE_POSITION,
  payload: {
    direction,
    emptyFields,
  },
});

export const updateTilesPositionAThunk = (direction) => (dispatch, getState) => {
  const { emptyFields } = getState();
  dispatch(updateTilesPositionAction(direction, emptyFields));
  const { tiles } = getState();
  dispatch(updateEmptiesAction(tiles));

  //const { emptyFields } = getState();
  //dispatch(addTileAction(emptyFields));
};
