import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {'Content-Type': 'application/json'}
});

// Add a request interceptor
API.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
API.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default API