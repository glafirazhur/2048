const initialState = {
  tiles: [],
  emptyFields: [
    { xPos: 1, yPos: 1 },
    { xPos: 1, yPos: 2 },
    { xPos: 1, yPos: 3 },
    { xPos: 1, yPos: 4 },
    { xPos: 2, yPos: 1 },
    { xPos: 2, yPos: 2 },
    { xPos: 2, yPos: 3 },
    { xPos: 2, yPos: 4 },
    { xPos: 3, yPos: 1 },
    { xPos: 3, yPos: 2 },
    { xPos: 3, yPos: 3 },
    { xPos: 3, yPos: 4 },
    { xPos: 4, yPos: 1 },
    { xPos: 4, yPos: 2 },
    { xPos: 4, yPos: 3 },
    { xPos: 4, yPos: 4 },
  ],
  score: {
    currentScore: 0,
    bestScore: 0,
  },
};

export default initialState;
