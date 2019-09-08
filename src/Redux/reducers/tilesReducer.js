import { ADD_TILE, INIT_FIRST_TILES } from '../actions';
import initialState from '../initialState';
import { getRandomInt } from '../../utilities';

const tilesReducer = (state = initialState.tiles, action) => {
  switch (action.type) {
    case ADD_TILE:
      return [
        ...state,
        action.payload,
      ];
    case INIT_FIRST_TILES: {
      const initialTiles = [];

      while (initialTiles.length < 2) {
        const xPosition = getRandomInt(1, 4);
        const yPosition = getRandomInt(1, 4);
        const tileValue = 2;

        // check initialTiles array for duplicates
        const duplicate = initialTiles.find(
          ({ xPos, yPos }) => xPos === xPosition && yPos === yPosition,
        );

        if (!duplicate) {
          initialTiles.push({
            xPos: xPosition,
            yPos: yPosition,
            tileVal: tileValue,
          });
        }
      }
      return initialTiles;
    }
    default:
      return state;
  }
};


export default tilesReducer;
