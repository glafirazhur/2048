import { ADD_RANDOM_TILE, INIT_FIRST_TILES, UPDATE_POSITION } from '../actions';

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
