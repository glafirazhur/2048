import {
  ADD_TILE, ADD_RANDOM_TILE, INIT_FIRST_TILES,
  UPDATE_POSITION, MERGE_TILES,
} from '../actions';
import initialState from '../initialState';
import {
  getRandomInt, updateLocalEmpties, getRandomArrayItem,
  sortTilesForMove,
} from '../../utilities';

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
      const sortedTiles = sortTilesForMove(action.payload.direction, state);
      let tilesForRemove = [];

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
            if (prevCell) {
              // set new tile default value
              let newTileValue = tile.tileVal;
              // set position to the next cell after the cell to move tile
              // to check the next cell is the same tile or not
              const tileForMergePos = prevCell - 1;
              // check if the next cell is not empty
              const tileForMerge = emptyFields.find(
                ({ rowPos, colPos, isEmpty }) => (
                  colPos === tileForMergePos && rowPos === tile.rowPos && !isEmpty
                ),
              );

              // if tile for merge was found and it's value the same as current tile
              if (tileForMerge && tileForMerge.tileVal === tile.tileVal) {
                // merged tile will me removed from state
                tilesForRemove.push({
                  rowPos: tileForMerge.rowPos,
                  colPos: tileForMerge.colPos,
                  tileVal: tileForMerge.tileVal,
                });
                // if tile was merged - set new tile position
                prevCell = tileForMergePos;
                // if tile was merged - set new tile value
                newTileValue = tile.tileVal * 2;
              }

              // update local empties based on the new tile
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: tile.rowPos, colPos: prevCell, tileVal: newTileValue },
              );

              // Add new position and value (if was merged or default) for the tile
              return {
                ...tile,
                colPos: prevCell,
                tileVal: newTileValue,
              };
            }
            // If there is no new position - return just unchanged tile
            return tile;
          }
          case 'right': {
            // Get the last possible FREE position
            // for the tile in row to the right from its position
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
            if (nextCell) {
              // set new tile default value
              let newTileValue = tile.tileVal;
              // set position to the next cell after the cell to move tile
              // to check the next cell is the same tile or not
              const tileForMergePos = nextCell + 1;
              // check if the next cell is not empty
              const tileForMerge = emptyFields.find(
                ({ rowPos, colPos, isEmpty }) => (
                  colPos === tileForMergePos && rowPos === tile.rowPos && !isEmpty
                ),
              );

              // if tile for merge was found and it's value the same as current tile
              if (tileForMerge && tileForMerge.tileVal === tile.tileVal) {
                // merged tile will me removed from state
                tilesForRemove.push({
                  rowPos: tileForMerge.rowPos,
                  colPos: tileForMerge.colPos,
                  tileVal: tileForMerge.tileVal,
                });
                // if tile was merged - set new tile position
                nextCell = tileForMergePos;
                // if tile was merged - set new tile value
                newTileValue = tile.tileVal * 2;
              }

              // update local empties based on the new tile
              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: tile.rowPos, colPos: nextCell, tileVal: newTileValue },
              );

              // Add new position and value (if was merged or default) for the tile
              return {
                ...tile,
                colPos: nextCell,
                tileVal: newTileValue,
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
            if (prevCell) {
              let newTileValue = tile.tileVal;
              const tileForMergePos = prevCell - 1;
              const tileForMerge = emptyFields.find(
                ({ rowPos, colPos, isEmpty }) => (
                  colPos === tile.colPos && rowPos === tileForMergePos && !isEmpty
                ),
              );

              if (tileForMerge && tileForMerge.tileVal === tile.tileVal) {
                tilesForRemove.push({
                  rowPos: tileForMerge.rowPos,
                  colPos: tileForMerge.colPos,
                  tileVal: tileForMerge.tileVal,
                });
                prevCell = tileForMergePos;
                newTileValue = tile.tileVal * 2;
              }

              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: prevCell, colPos: tile.colPos, tileVal: newTileValue },
              );

              // Add new position for the tile
              return {
                ...tile,
                rowPos: prevCell,
                tileVal: newTileValue,
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
            if (nextCell) {
              let newTileValue = tile.tileVal;
              const tileForMergePos = nextCell + 1;
              const tileForMerge = emptyFields.find(
                ({ rowPos, colPos, isEmpty }) => (
                  colPos === tile.colPos && rowPos === tileForMergePos && !isEmpty
                ),
              );

              if (tileForMerge && tileForMerge.tileVal === tile.tileVal) {
                tilesForRemove.push({
                  rowPos: tileForMerge.rowPos,
                  colPos: tileForMerge.colPos,
                  tileVal: tileForMerge.tileVal,
                });
                nextCell = tileForMergePos;
                newTileValue = tile.tileVal * 2;
              }

              emptyFields = updateLocalEmpties(
                emptyFields, tile, { rowPos: nextCell, colPos: tile.colPos, tileVal: newTileValue },
              );

              // Add new position for the tile
              return {
                ...tile,
                rowPos: nextCell,
                tileVal: newTileValue,
              };
            }
            // If there is no new position - return just unchanged tile
            return tile;
          }
          default:
            return tile;
        }
      });

      return updatedTiles.filter((tile) => {
        const removedVal = tilesForRemove.find(({ colPos, rowPos, tileVal }) => (
          tile.colPos === colPos && tile.rowPos === rowPos && tile.tileVal === tileVal
        ));
        if (removedVal) {
          return tile.rowPos !== removedVal.rowPos && tile.colPos !== removedVal.colPos;
        }
        return tile;
      });
    }
    default:
      return state;
  }
};

export default tilesReducer;
