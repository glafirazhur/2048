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
    case UPDATE_POSITION: {
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

      let { emptyFields } = action.payload;

      const updatedTiles = sortedTiles.map((tile) => {
        const currentRow = emptyFields.filter(
          ({ rowPos }) => rowPos === tile.rowPos,
        );
        const currentCol = emptyFields.filter(
          ({ colPos }) => colPos === tile.colPos,
        );
        switch (action.payload.direction) {
          case 'left': {
            let prevCell = tile.colPos;
            // -1 for the prev cell and -1 for the array iterator
            let i = prevCell - 2 < 0 ? 0 : prevCell - 2;
            for (i; i >= 0; i -= 1) {
              if (currentRow[i].colPos !== tile.colPos && currentRow[i].isEmpty) {
                prevCell = currentRow[i].colPos;
              } else {
                break;
              }
            }
            if (prevCell && prevCell !== tile.colPos) {
              emptyFields = updateLocalEmpties(
                emptyFields, tile,{ rowPos: tile.rowPos, colPos: prevCell },
              );
              return {
                ...tile,
                colPos: prevCell,
              };
            }
            return tile;
          }
          case 'right': {
            let nextCell = tile.colPos;
            let i = nextCell; // next cell
            for (i; i < 4; i += 1) {
              if (currentRow[i].colPos !== tile.colPos && currentRow[i].isEmpty) {
                nextCell = currentRow[i].colPos;
              } else {
                break;
              }
            }
            if (nextCell && nextCell !== tile.colPos) {
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: tile.rowPos, colPos: nextCell },
              );
              return {
                ...tile,
                colPos: nextCell,
              };
            }
            return tile;
          }
          case 'up': {
            let prevCell = tile.rowPos;
            // -1 for the prev cell and -1 for the array iterator
            let i = prevCell - 2 < 0 ? 0 : prevCell - 2;
            for (i; i >= 0; i -= 1) {
              if (currentCol[i].rowPos !== tile.rowPos && currentCol[i].isEmpty) {
                prevCell = currentCol[i].rowPos;
              } else {
                break;
              }
            }
            if (prevCell && prevCell !== tile.rowPos) {
              // const prevTileIndex = prevCell - 2 < 0 ? 0 : prevCell - 2;
              // const prevTile = state.find(({ rowPos, colPos }) => (
              //   currentCol[prevTileIndex].rowPos === rowPos
              //   && currentCol[prevTileIndex].colPos === colPos
              // ));
              //
              // if (prevTile && prevTile.tileVal === tile.tileVal) console.log('EQUALS');

              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: prevCell, colPos: tile.colPos },
              );
              return {
                ...tile,
                rowPos: prevCell,
              };
            }
            return tile;
          }
          case 'down': {
            const nextCell = currentCol.reduce((max, cell) => {
              if (cell.isEmpty) return cell.rowPos < max ? max : cell.rowPos;
              return max;
            }, tile.rowPos);
            if (nextCell && nextCell !== tile.rowPos) {
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: nextCell, colPos: tile.colPos },
              );
              return {
                ...tile,
                rowPos: nextCell,
              };
            }
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
