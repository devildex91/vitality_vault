import axios from 'axios';

import { ACCESS_TOKEN } from './token';

// Shared API client for authenticated requests to the Django backend.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    // Attach the JWT bearer token when the user is logged in.
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api