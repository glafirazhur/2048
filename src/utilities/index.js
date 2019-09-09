export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandomArrayItem = (array) => array[Math.floor(Math.random() * array.length)];

export const updateLocalEmpties = (emptyFields, oldTile, newTile) => {
  return emptyFields.map((item) => {
    if (item.colPos === oldTile.colPos && item.rowPos === oldTile.rowPos) {
      return {
        ...item,
        isEmpty: true,
      };
    }
    if (item.colPos === newTile.colPos && item.rowPos === newTile.rowPos) {
      return {
        ...item,
        isEmpty: false,
      };
    }
    return item;
  });
};
