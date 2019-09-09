import { ADD_TILE, ADD_RANDOM_TILE, INIT_FIRST_TILES, UPDATE_POSITION } from '../actions';
import initialState from '../initialState';
import { getRandomInt, updateLocalEmpties, getRandomArrayItem } from '../../utilities';

const tilesReducer = (state = initialState.tiles, action) => {
  switch (action.type) {
    case ADD_RANDOM_TILE: {
      const emptyFields = action.payload.filter(({ isEmpty }) => isEmpty === true);
      const randomEmpty = getRandomArrayItem(emptyFields);
      if (randomEmpty) {
        return [
          ...state,
          {
            rowPos: randomEmpty.rowPos,
            colPos: randomEmpty.colPos,
            tileVal: getRandomArrayItem([2, 4]),
          },
        ];
      }
      return state;
    }
    case ADD_TILE:
      return state;
    case INIT_FIRST_TILES: {
      const initialTiles = [];

      while (initialTiles.length < 2) {
        const rowPosition = getRandomInt(1, 4);
        const colPosition = getRandomInt(1, 4);
        const tileValue = 2;

        // Check if previous tile was created on the same place
        const duplicate = initialTiles.find(
          ({ rowPos, colPos }) => rowPos === rowPosition && colPos === colPosition,
        );

        if (!duplicate) {
          initialTiles.push({
            rowPos: rowPosition,
            colPos: colPosition,
            tileVal: tileValue,
          });
        }
      }
      return initialTiles;
    }

    // UPDATE_POSITION: moves all the tiles depends on the direction.
    case UPDATE_POSITION: {
      // Array of tiles sorts according to the move direction.
      // It helps to move the right (first) tile first.
      let sortedTiles = [];

      if (action.payload.direction === 'left' || action.payload.direction === 'up') {
        sortedTiles = state.sort((a, b) => {
          if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
          return a.colPos - b.colPos;
        });
      }

      if (action.payload.direction === 'right') {
        sortedTiles = state.sort((a, b) => {
          if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
          return b.colPos - a.colPos;
        });
      }

      if (action.payload.direction === 'down') {
        sortedTiles = state.sort((a, b) => {
          if (a.rowPos !== b.rowPos) return b.rowPos - a.rowPos;
          return a.colPos - b.colPos;
        });
      }

      // Save the local empties
      let { emptyFields } = action.payload;

      const updatedTiles = sortedTiles.map((tile) => {
        // switch is using cols or rows depend on the direction for every tile
        const currentRow = emptyFields.filter(
          ({ rowPos }) => rowPos === tile.rowPos,
        );
        const currentCol = emptyFields.filter(
          ({ colPos }) => colPos === tile.colPos,
        );
        switch (action.payload.direction) {
          case 'left': {
            // Get the last possible FREE position for the tile in row to the left from its position
            let prevCell = tile.colPos;
            // -1 for the prev cell and -1 for the array iterator
            let i = prevCell - 2 < 0 ? 0 : prevCell - 2;
            // Check every row field. If not the current tile
            // && if is empty - save index, if not empty - return the last saved index
            for (i; i >= 0; i -= 1) {
              if (currentRow[i].colPos !== tile.colPos && currentRow[i].isEmpty) {
                prevCell = currentRow[i].colPos;
              } else {
                break;
              }
            }
            // If there is a position and it's not the same that tile have
            if (prevCell && prevCell !== tile.colPos) {
              // Update empties depends on the new tile position
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: tile.rowPos, colPos: prevCell },
              );
              // Add new position for the tile
              return {
                ...tile,
                colPos: prevCell,
              };
            }
            // If there is no new position - return just unchanged tile
            return tile;
          }
          case 'right': {
            // Get the last possible FREE position for the tile in row to the right from its position
            let nextCell = tile.colPos;
            // Index to start search
            let i = nextCell;
            // Check every row field. If not the current tile
            // && if is empty - save index, if not empty - return the last saved index
            for (i; i < 4; i += 1) {
              if (currentRow[i].colPos !== tile.colPos && currentRow[i].isEmpty) {
                nextCell = currentRow[i].colPos;
              } else {
                break;
              }
            }
            // Update empties depends on the new tile position
            if (nextCell && nextCell !== tile.colPos) {
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: tile.rowPos, colPos: nextCell },
              );
              // Add new position for the tile
              return {
                ...tile,
                colPos: nextCell,
              };
            }
            // If there is no new position - return just unchanged tile
            return tile;
          }
          case 'up': {
            // Get the last possible FREE position for the tile in row above its position
            let prevCell = tile.rowPos;
            // -1 for the prev cell and -1 for the array iterator
            let i = prevCell - 2 < 0 ? 0 : prevCell - 2;
            // Check every row field. If not the current tile
            // && if is empty - save index, if not empty - return the last saved index
            for (i; i >= 0; i -= 1) {
              if (currentCol[i].rowPos !== tile.rowPos && currentCol[i].isEmpty) {
                prevCell = currentCol[i].rowPos;
              } else {
                break;
              }
            }
            // Update empties depends on the new tile position
            if (prevCell && prevCell !== tile.rowPos) {
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: prevCell, colPos: tile.colPos },
              );
              // Add new position for the tile
              return {
                ...tile,
                rowPos: prevCell,
              };
            }
            // If there is no new position - return just unchanged tile
            return tile;
          }
          case 'down': {
            // Get the last possible FREE position for the tile in row below its position
            let nextCell = tile.rowPos;
            // -1 for the prev cell and -1 for the array iterator
            let i = nextCell;
            // Check every row field. If not the current tile
            // && if is empty - save index, if not empty - return the last saved index
            for (i; i < 4; i += 1) {
              if (currentCol[i].rowPos !== tile.rowPos && currentCol[i].isEmpty) {
                nextCell = currentCol[i].rowPos;
              } else {
                break;
              }
            }
            // Update empties depends on the new tile position
            if (nextCell && nextCell !== tile.rowPos) {
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: nextCell, colPos: tile.colPos },
              );
              // Add new position for the tile
              return {
                ...tile,
                rowPos: nextCell,
              };
            }
            // If there is no new position - return just unchanged tile
            return tile;
          }
          default:
            return tile;
        }
      });
      return updatedTiles;
    }
    default:
      return state;
  }
};

export default tilesReducer;
