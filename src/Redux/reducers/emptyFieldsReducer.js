import { UPDATE_EMPTIES, INIT_EMPTIES } from '../actions';
import initialState from '../initialState';

const emptyFieldsReducer = (state = initialState.emptyFields, action) => {
  switch (action.type) {
    // UPDATE_EMPTIES: returns array of updated empty fields related to the sent tile.
    // Find fields with old and new tile position.
    // Set oldPosition.isEmpty to true, newPosition.isEmpty to false.
    case UPDATE_EMPTIES: {
      const tiles = action.payload;
      const updatedEmpties = state.map((item) => {
        const tile = tiles.find(
          ({ rowPos, colPos }) => rowPos === item.rowPos && colPos === item.colPos,
        );
        if (tile) return { ...item, isEmpty: false };
        return {
          ...item,
          isEmpty: true,
        };
      });
      return updatedEmpties;
    }
    // INIT_EMPTIES: sets emptyFields to the default value.
    case INIT_EMPTIES:
      return initialState.emptyFields;
    default:
      return state;
  }
};

export default emptyFieldsReducer;
