import { Divider } from "@mui/material";
import React from "react";
import VideoList from "../components/VideoList";
import { useAppContext } from "../context/StateContext";
import "./History.css";

const History = () => {
  const { state } = useAppContext();
  const max10videos = state.lastSearchedVideos.slice(-10);
  const max3Videos = state.lastWatchedVideos.slice(-3);
  return (
    <div className="historyPage">
      <section className="historyPage__lastWatched">
        <h2 className="historyPage__lastWatched__title">Visto recientemente</h2>
        {max3Videos.length > 0 ? (
          <VideoList videos={max3Videos.reverse()} />
        ) : (
          <p className="historyPage__lastWatched__text">
            No has visto ningún video.
          </p>
        )}
      </section>
      <Divider
        style={{
          backgroundColor: "grey",
          margin: "0 11rem 2.5rem 2rem",
        }}
      />
      <section className="historyPage__lastSearches">
        <h2 className="historyPage__lastSearched__title">
          {`Últimas búsquedas · ${max10videos.length}`}
        </h2>
        {max10videos.length > 0 ? (
          <VideoList videos={max10videos.reverse()} />
        ) : (
          <p className="historyPage__lastSearched__text">
            No has hecho ninguna búsqueda
          </p>
        )}
      </section>
    </div>
  );
};

export default History;
