import { UPDATE_EMPTIES, INIT_EMPTIES } from '../actions';
import initialState from '../initialState';

const emptyFieldsReducer = (state = initialState.emptyFields, action) => {
  switch (action.type) {
    case UPDATE_EMPTIES: {
      const tiles = action.payload;
      const updatedEmpties = state.map((item) => {
        const tile = tiles.find(({ rowPos, colPos }) => rowPos === item.rowPos && colPos === item.colPos);
        if (tile) return { ...item, isEmpty: false };
        return {
          ...item,
          isEmpty: true,
        };
      });
      return updatedEmpties;
    }
    case INIT_EMPTIES:
      return initialState.emptyFields;
    default:
      return state;
  }
};

export default emptyFieldsReducer;
