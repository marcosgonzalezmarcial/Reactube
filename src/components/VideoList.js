import React from "react";
import { useLocation } from "react-router";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, handleVideoSelect }) => {
  const location = useLocation();
  function style() {
    if (location.pathname === "/home/search") {
      return { display: "flex", flexWrap: "wrap", justifyContent: "center" };
    } else return { display: "flex", flexWrap: "nowrap" };
  }
  const checkedVideos = videos.filter((video) => video.snippet);
  const renderedVideos = checkedVideos.map((video) => (
    <VideoItem
      handleVideoSelect={handleVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div className="videoList">
      <div style={style()} className="videoList__items">
        {renderedVideos}
      </div>
    </div>
  );
};

export default VideoList;
