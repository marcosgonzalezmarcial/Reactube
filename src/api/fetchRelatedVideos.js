import youtubeFetch from "./youtubeFetch";

const fetchRelatedVideos = async (searchTerm) => {
  const {
    data: { items: videos },
  } = await youtubeFetch.get("search", {
    params: {
      q: searchTerm,
      maxResults: 12,
    },
  });
  return videos;
};

export { fetchRelatedVideos };
