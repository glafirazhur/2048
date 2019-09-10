import {
  ADD_RANDOM_TILE, INIT_FIRST_TILES, UPDATE_POSITION,
  MERGE_TILES,
} from '../actions';

export const mergeTilesAction = (direction) => ({ type: MERGE_TILES, payload: direction });

export const initTilesAction = () => ({ type: INIT_FIRST_TILES });

export const addRandomTileAction = (emptyFields) => ({
  type: ADD_RANDOM_TILE,
  payload: emptyFields,
});

export const updateTilesPositionAction = (direction, emptyFields) => ({
  type: UPDATE_POSITION,
  payload: {
    direction,
    emptyFields,
  },
});
