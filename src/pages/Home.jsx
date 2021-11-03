import React from "react";
import { VideoList } from "../components";
import LastSearches from "../components/LastSearches/LastSearches";
import "./Home.css";
import { useAppContext } from "../context/StateContext";
import FavVideos from "../components/FavCards/FavVideos";

const Home = () => {
  const { state } = useAppContext();

  return (
    <main className="searchPage">
      <section className="main__videos">
        <h2 className="videoList__title">Videos populares</h2>
        <VideoList videos={state.relatedVideos} />
      </section>
      <section className="main__components">
        <div className="main__components__searches">
          <LastSearches />
        </div>
        <div className="main__components__favs">
          <FavVideos />
        </div>
      </section>
    </main>
  );
};

export default Home;
