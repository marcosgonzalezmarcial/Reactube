import { TYPES_SELECTED_VIDEO } from "../actions/selectedVideoActions";

const selectedVideoInitialState = { id: {}, snippet: {} };

const selectedVideoReducer = (state, action) => {
  switch (action.type) {
    case TYPES_SELECTED_VIDEO.SELECT_VIDEO:
      return {
        ...state,
        id: action.payload.id,
        snippet: action.payload.snippet,
      };
    default:
      return state;
  }
};

export { selectedVideoReducer, selectedVideoInitialState };
