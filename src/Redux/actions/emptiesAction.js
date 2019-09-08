import { INIT_EMPTIES, UPDATE_EMPTIES } from '../actions';

export const initEmptiesAction = () => ({ type: INIT_EMPTIES });
export const updateEmptiesAction = (tiles) => ({ type: UPDATE_EMPTIES, payload: tiles });
