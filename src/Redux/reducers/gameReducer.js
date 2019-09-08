import { INIT_GAME, FINISH_GAME } from '../actions';
import initialState from '../initialState';

const emptyFieldsReducer = (state = initialState.gameStatus, action) => {
  switch (action.type) {
    case INIT_GAME:
      return true;
    case FINISH_GAME:
      return false;
    default:
      return state;
  }
};

export default emptyFieldsReducer;
