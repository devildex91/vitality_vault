import axios from 'axios';

import { ACCESS_TOKEN, REFRESH_TOKEN } from './token';

// Shared API client for authenticated requests to the Django backend.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const publicRoutes = ['/api/token/', '/api/token/refresh/', '/api/user/register/'];
    const requestUrl = config.url || '';

    // Public auth endpoints must not receive a stale bearer token.
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken && !publicRoutes.includes(requestUrl)) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
    }

    return Promise.reject(error);
  }
);

export default api