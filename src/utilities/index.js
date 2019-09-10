export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandomArrayItem = (array) => array[Math.floor(Math.random() * array.length)];

export const updateLocalEmpties = (emptyFields, oldTile, newTile) => emptyFields.map((item) => {
  let emptyField = item;
  if (item.colPos === oldTile.colPos && item.rowPos === oldTile.rowPos) {
    emptyField = {
      ...emptyField,
      isEmpty: true,
    };
  }
  if (item.colPos === newTile.colPos && item.rowPos === newTile.rowPos) {
    emptyField = {
      ...emptyField,
      isEmpty: false,
      tileVal: newTile.tileVal,
    };
  }
  return emptyField;
});

export const sortTilesForMove = (direction, tiles) => {
  switch (direction) {
    case 'left': {
      return tiles.sort((a, b) => {
        if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
        return a.colPos - b.colPos;
      });
    }
    case 'right': {
      return tiles.sort((a, b) => {
        if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
        return b.colPos - a.colPos;
      });
    }
    case 'up': {
      return tiles.sort((a, b) => {
        if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
        return a.colPos - b.colPos;
      });
    }
    case 'down': {
      return tiles.sort((a, b) => {
        if (a.rowPos !== b.rowPos) return b.rowPos - a.rowPos;
        return a.colPos - b.colPos;
      });
    }
    default:
      return [];
  }
};

// export const sortTilesForMerge = (direction, tiles) => {
//   switch (direction) {
//     case 'left': {
//       return tiles.sort((a, b) => {
//         if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
//         return b.colPos - a.colPos;
//       });
//     }
//     case 'right': {
//       return tiles.sort((a, b) => {
//         if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
//         return a.colPos - b.colPos;
//       });
//     }
//     case 'up': {
//       return tiles.sort((a, b) => {
//         if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
//         return a.colPos - b.colPos;
//       });
//     }
//     case 'down': {
//       return tiles.sort((a, b) => {
//         if (a.rowPos !== b.rowPos) return a.rowPos - b.rowPos;
//         return a.colPos - b.colPos;
//       });
//     }
//     default:
//       return [];
//   }
// };
