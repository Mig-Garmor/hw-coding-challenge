import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL_NEWS_DATA, // Base URL for the API
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apikey: import.meta.env.VITE_API_KEY_NEWS_DATA, // Replace with your API key
  },
});

export default apiClient;
