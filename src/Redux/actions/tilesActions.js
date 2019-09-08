import { ADD_TILE, INIT_FIRST_TILES, UPDATE_POSITION } from '../actions';

export const addTileAction = (xPos, yPos, tileVal) => ({
  type: ADD_TILE,
  payload: { xPos, yPos, tileVal },
});

export const initTilesAction = () => ({
  type: INIT_FIRST_TILES,
});

export const updateTilePositionAction = () => ({
  type: UPDATE_POSITION,
});

