import React, { useContext } from "react";
import { VideoList } from "../components";
import LastSearches from "../components/LastSearches/LastSearches";
import "./Home.css";
import StateContext from "../context/StateContext";

const Home = () => {
  const { state, dispatch } = useContext(StateContext);

  return (
    <main className="searchPage">
      <section className="main__videos">
        <h2 className="videoList__title">Videos populares</h2>
        <VideoList videos={state.relatedVideos} handleVideoSelect={dispatch} />
      </section>
      <section className="main__components">
        <div className="main__components__searches">
          <LastSearches />
        </div>

        <div className="main__components__favs">test</div>
      </section>
    </main>
  );
};

export default Home;
