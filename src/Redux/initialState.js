const initialState = {
  tiles: [],
  emptyFields: [
    { xPos: 1, yPos: 1, empty: true },
    { xPos: 1, yPos: 2, empty: true },
    { xPos: 1, yPos: 3, empty: true },
    { xPos: 1, yPos: 4, empty: true },
    { xPos: 2, yPos: 1, empty: true },
    { xPos: 2, yPos: 2, empty: true },
    { xPos: 2, yPos: 3, empty: true },
    { xPos: 2, yPos: 4, empty: true },
    { xPos: 3, yPos: 1, empty: true },
    { xPos: 3, yPos: 2, empty: true },
    { xPos: 3, yPos: 3, empty: true },
    { xPos: 3, yPos: 4, empty: true },
    { xPos: 4, yPos: 1, empty: true },
    { xPos: 4, yPos: 2, empty: true },
    { xPos: 4, yPos: 3, empty: true },
    { xPos: 4, yPos: 4, empty: true },
  ],
  score: {
    currentScore: 0,
    bestScore: 0,
  },
  gameStatus: true,
};

export default initialState;
