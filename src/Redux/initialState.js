const initialState = {
  tiles: [],
  emptyFields: [
    { rowPos: 1, colPos: 1, isEmpty: true },
    { rowPos: 1, colPos: 2, isEmpty: true },
    { rowPos: 1, colPos: 3, isEmpty: true },
    { rowPos: 1, colPos: 4, isEmpty: true },
    { rowPos: 2, colPos: 1, isEmpty: true },
    { rowPos: 2, colPos: 2, isEmpty: true },
    { rowPos: 2, colPos: 3, isEmpty: true },
    { rowPos: 2, colPos: 4, isEmpty: true },
    { rowPos: 3, colPos: 1, isEmpty: true },
    { rowPos: 3, colPos: 2, isEmpty: true },
    { rowPos: 3, colPos: 3, isEmpty: true },
    { rowPos: 3, colPos: 4, isEmpty: true },
    { rowPos: 4, colPos: 1, isEmpty: true },
    { rowPos: 4, colPos: 2, isEmpty: true },
    { rowPos: 4, colPos: 3, isEmpty: true },
    { rowPos: 4, colPos: 4, isEmpty: true },
  ],
  score: {
    currentScore: 0,
    bestScore: 0,
  },
  gameStatus: false,
};

export default initialState;
