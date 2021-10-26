import { VIDEO_TYPES } from "../actions/videosActions";
const videosInitialState = { videos: [] };

const videosReducer = (state, action) => {
  switch (action.type) {
    case VIDEO_TYPES.SERCH_VIDEOS:
      return { ...state, videos: action.payload };
    default:
      return state;
  }
};

export { videosInitialState, videosReducer };
