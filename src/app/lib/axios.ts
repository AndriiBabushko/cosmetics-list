import axios from 'axios';

const API_URL = 'https://fortnite-api.com/v2';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
