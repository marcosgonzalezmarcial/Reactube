import React from "react";
import LastSearches from "../components/LastSearches/LastSearches";
import VideoList from "../components/VideoList";
import { useAppContext } from "../context/StateContext";
import "./History.css";

const History = () => {
  const { state } = useAppContext();

  const max3Videos = state.lastWatchedVideos.reverse().slice(0, 3);
  return (
    <div className="historyPage">
      <section className="historyPage__lastWatched">
        <h2 className="historyPage__lastWatched__title">Visto recientemente</h2>
        <VideoList videos={max3Videos} />
      </section>
      <section className="historyPage__lastSearches">
        <div className="historyPage__lastSearches__items">
          <LastSearches />
        </div>
      </section>
    </div>
  );
};

export default History;
