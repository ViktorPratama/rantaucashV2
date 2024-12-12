import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-v2-beta.vercel.app',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Tambahkan interceptor untuk token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor untuk handle error global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token invalid, logout otomatis
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
