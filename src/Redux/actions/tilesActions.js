import { ADD_TILE, INIT_GAME } from '../actions';

export const addTileAction = (xPos, yPos, tileVal) => ({
  type: ADD_TILE,
  payload: { xPos, yPos, tileVal },
});

export const initGameAction = () => ({
  type: INIT_GAME,
});
