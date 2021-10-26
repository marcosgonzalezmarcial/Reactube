import axios from "axios";

const youtubeApiKey = "AIzaSyAMNeu3vet5aQED6yYQl-pStgPrZeXOvB8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: youtubeApiKey,
  },
});

export { youtubeApiKey };
