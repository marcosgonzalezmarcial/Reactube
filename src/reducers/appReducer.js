import { TYPES } from "../actions/appActions";

const initialState = { videos: [], selectedVideo: { id: {}, snippet: {} } };

const appReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SERCH_VIDEOS:
      return { ...state, videos: action.payload };
    case TYPES.SELECT_VIDEO:
      return {
        ...state,
        selectedVideo: {
          id: action.payload.id,
          snippet: action.payload.snippet,
        },
      };
    default:
      return state;
  }
};

export { initialState, appReducer };
