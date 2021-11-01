import { TYPES } from "../actions/appActions";

const initialState = {
  searchResults: [],
  selectedVideo: { id: {}, snippet: {} },
  relatedVideos: [],
  // searchHistory: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SERCH_VIDEOS:
      return { ...state, searchResults: action.payload };
    case TYPES.SELECT_VIDEO:
      return {
        ...state,
        selectedVideo: {
          id: action.payload.id,
          snippet: action.payload.snippet,
        },
      };
    case TYPES.RETRIEVE_POPULARVIDEOS:
      return { ...state, relatedVideos: action.payload };
    // case TYPES.SAVE_SEARCHTERMS:
    // return {
    // ...state,
    // searchHistory: [...state.searchHistory, action.payload],
    // searchHistory: action.payload,
    // };
    default:
      return state;
  }
};

export { initialState, appReducer };
