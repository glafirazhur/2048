import { UPDATE_POSITION } from '../actions';

export const updatePosition = (xPos, yPos) => ({
  type: UPDATE_POSITION,
  payload: { xPos, yPos },
});

export const addNumber = (xPos, yPos, value) => ({
  type: UPDATE_POSITION,
  payload: { xPos, yPos, value },
});
