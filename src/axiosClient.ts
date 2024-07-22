import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/', 
});


instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401 || error.response.status === 500) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default instance;