import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { fetchPopularVideos } from "../api/fetchPopularVideos";
import { appReducer, initialState } from "../reducers/appReducer";
import { TYPES } from "../actions/appActions";
import { fetchRelatedVideos } from "../api/fetchRelatedVideos";

const StateContext = createContext();

function StateProvider(props) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory));
    localStorage.setItem(
      "favouriteVideos",
      JSON.stringify(state.favouriteVideos)
    );
    localStorage.setItem(
      "lastWatchedVideos",
      JSON.stringify(state.lastWatchedVideos)
    );
    localStorage.setItem(
      "lastSearchedVideos",
      JSON.stringify(state.lastSearchedVideos)
    );
  }, [
    state.searchHistory,
    state.favouriteVideos,
    state.lastWatchedVideos,
    state.lastSearchedVideos,
  ]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await fetchPopularVideos();
      dispatch({ type: TYPES.RETRIEVE_POPULARVIDEOS, payload: videos });
    };
    fetchVideos();
  }, []);

  const handleSubmit = async (searchTerm) => {
    const searchDate = Date.now();
    const fetchVideos = async () => {
      const videos = await fetchRelatedVideos(searchTerm);
      dispatch({
        type: TYPES.SAVE_SEARCHTERMS,
        payload: {
          searchTerm: searchTerm,
          url: videos[0].snippet.thumbnails.default.url,
          searchDate: searchDate,
        },
      });
      dispatch({ type: TYPES.SERCH_VIDEOS, payload: videos });
      dispatch({
        type: TYPES.SELECT_VIDEO,
        payload: videos[0],
      });
      dispatch({
        type: TYPES.SAVE_LASTSEARCHES,
        payload: [videos[0], videos[1]],
      });
    };
    fetchVideos();
  };

  const value = useMemo(() => {
    return { state, dispatch, handleSubmit };
  }, [state]);

  return (
    <StateContext.Provider {...props} value={value}></StateContext.Provider>
  );
}

export function useAppContext() {
  const appContext = useContext(StateContext);

  return appContext;
}

export { StateProvider };
export default StateContext;
