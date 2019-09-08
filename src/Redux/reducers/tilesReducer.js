import { ADD_TILE, INIT_GAME } from '../actions';
import initialState from '../initialState';

const tilesReducer = (state = initialState.tiles, action) => {
  switch (action.type) {
    case ADD_TILE:
      return [
        ...state,
        action.payload,
      ];
    case INIT_GAME:
      return [
        ...state,
        {
          xPos: 1,
          yPos: 2,
          tileVal: 2,
        },
        {
          xPos: 3,
          yPos: 1,
          tileVal: 2,
        },
      ];
    default:
      return state;
  }
};

export default tilesReducer;
