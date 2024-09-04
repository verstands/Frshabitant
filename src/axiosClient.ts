import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/', 
});

instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  // Ajout des informations du localStorage dans les headers
  const pays = localStorage.getItem('pays');
  const ip = localStorage.getItem('ip');
  const isp = localStorage.getItem('isp');
  const browser = localStorage.getItem('browser');
  const os = localStorage.getItem('os');
  const user = localStorage.getItem('user');

  if (pays) config.headers['X-Pays'] = pays; 
  if (ip) config.headers['X-IP'] = ip;
  if (isp) config.headers['X-ISP'] = isp;
  if (browser) config.headers['X-Browser'] = browser;
  if (os) config.headers['X-OS'] = os;
  if (user) config.headers['X-USER'] = user;

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
      toast.error(error.response.message);
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default instance;
