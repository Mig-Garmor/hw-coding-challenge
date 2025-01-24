import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Base URL for the API
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: import.meta.env.VITE_API_KEY, // Replace with your API key
  },
});

export default apiClient;
