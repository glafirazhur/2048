const initialState = {
  tiles: [],
  emptyFields: [
    { xPos: 1, yPos: 1, isEmpty: true },
    { xPos: 1, yPos: 2, isEmpty: true },
    { xPos: 1, yPos: 3, isEmpty: true },
    { xPos: 1, yPos: 4, isEmpty: true },
    { xPos: 2, yPos: 1, isEmpty: true },
    { xPos: 2, yPos: 2, isEmpty: true },
    { xPos: 2, yPos: 3, isEmpty: true },
    { xPos: 2, yPos: 4, isEmpty: true },
    { xPos: 3, yPos: 1, isEmpty: true },
    { xPos: 3, yPos: 2, isEmpty: true },
    { xPos: 3, yPos: 3, isEmpty: true },
    { xPos: 3, yPos: 4, isEmpty: true },
    { xPos: 4, yPos: 1, isEmpty: true },
    { xPos: 4, yPos: 2, isEmpty: true },
    { xPos: 4, yPos: 3, isEmpty: true },
    { xPos: 4, yPos: 4, isEmpty: true },
  ],
  score: {
    currentScore: 0,
    bestScore: 0,
  },
  gameStatus: false,
};

export default initialState;
