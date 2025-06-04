import axios from 'axios';
import { getToken, clearUserSession } from '../utils/auth';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:80/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized responses
    if (error.response && error.response.status === 401) {
      clearUserSession();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;