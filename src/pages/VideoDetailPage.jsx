import React, { useContext, useEffect, useState } from "react";
import youtubeFetch from "../api/youtubeFetch";
import { VideoDetail, VideoList } from "../components";
import StateContext from "../context/StateContext";
import "./VideoDetailPage.css";

const VideoDetailPage = () => {
  const { state, dispatch } = useContext(StateContext);
  const [relatedVideos, setRelatedVideos] = useState(state.searchResults);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const {
        data: { items: relatedVideos },
      } = await youtubeFetch.get("search", {
        params: {
          relatedToVideoId: state.selectedVideo.id.videoId,
          maxResults: 5,
          type: "video",
        },
      });
      setRelatedVideos(relatedVideos);
    };
    fetchRelatedVideos();
  }, [state.selectedVideo]);
  return (
    <main className="videoDetailPage">
      <section className="videoDetailPage__app">
        <VideoDetail video={state.selectedVideo} />
        <h2 className="videoDetailPage__app__title">Videos relacionados</h2>
        <VideoList videos={relatedVideos} handleVideoSelect={dispatch} />
      </section>
    </main>
  );
};

export default VideoDetailPage;
