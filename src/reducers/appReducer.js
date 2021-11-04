import { TYPES } from "../actions/appActions";

const initialState = {
  searchResults: [],
  selectedVideo: { id: {}, snippet: {} },
  relatedVideos: [],
  searchHistory: JSON.parse(localStorage.getItem("searchHistory")) || [],
  favouriteVideos: JSON.parse(localStorage.getItem("favouriteVideos")) || [],
  lastWatchedVideos:
    JSON.parse(localStorage.getItem("lastWatchedVideos")) || [],
  lastSearchedVideos:
    JSON.parse(localStorage.getItem("lastSearchedVideos")) || [],
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
    case TYPES.SAVE_SEARCHTERMS:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    case TYPES.MANAGE_FAVOURITES:
      if (state.favouriteVideos.length === 0) {
        return {
          ...state,
          favouriteVideos: [...state.favouriteVideos, action.payload],
        };
      }
      if (state.favouriteVideos.length > 0) {
        const containVideo = state.favouriteVideos.find(
          (video) => video.id.videoId === action.payload.id.videoId
        );
        if (containVideo) {
          const removedItems = state.favouriteVideos.filter(
            (video) => video.id.videoId !== action.payload.id.videoId
          );
          if (removedItems.length > 0) {
            return {
              ...state,
              favouriteVideos: removedItems,
            };
          } else {
            return {
              ...state,
              favouriteVideos: [],
            };
          }
        } else {
          return {
            ...state,
            favouriteVideos: [...state.favouriteVideos, action.payload],
          };
        }
      } else {
        return state;
      }
    case TYPES.SAVE_LASTWATCHED:
      if (state.lastWatchedVideos.length > 0) {
        const containVideo = state.lastWatchedVideos.find(
          (video) => video.id.videoId === action.payload.id.videoId
        );
        if (containVideo) {
          return {
            ...state,
            lastWatchedVideos: [...state.lastWatchedVideos],
          };
        } else {
          return {
            ...state,
            lastWatchedVideos: [...state.lastWatchedVideos, action.payload],
          };
        }
      } else {
        return {
          ...state,
          lastWatchedVideos: [...state.lastWatchedVideos, action.payload],
        };
      }
    case TYPES.SAVE_LASTSEARCHES:
      return {
        ...state,
        lastSearchedVideos: [...state.lastSearchedVideos, ...action.payload],
      };
    default:
      return state;
  }
};

export { initialState, appReducer };
