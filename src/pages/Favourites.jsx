import React from "react";
import VideoList from "../components/VideoList";
import { useAppContext } from "../context/StateContext";

const Favourites = () => {
  const { state } = useAppContext();
  return (
    <div>
      <div className="historyPage">
        <section className="historyPage__lastWatched">
          <h2 className="historyPage__lastWatched__title">Videos favoritos</h2>
          {state.favouriteVideos.length > 0 ? (
            <VideoList videos={state.favouriteVideos} />
          ) : (
            <p className="historyPage__lastWatched__text">
              No tienes ningún video guardado en favoritos
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Favourites;
