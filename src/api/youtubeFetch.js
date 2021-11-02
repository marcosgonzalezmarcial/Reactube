import axios from "axios";

const youtubeApiKey = "AIzaSyAMNeu3vet5aQED6yYQl-pStgPrZeXOvB8";

const youtubeApiKey2 = "AIzaSyDRu0i7XK5VL8hSx6ZWyInR7HJfr18hCqQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: youtubeApiKey,
  },
});
