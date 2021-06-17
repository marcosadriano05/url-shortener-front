import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? process.env.REACT_APP_HOST_DEVELOPMENT : process.env.REACT_APP_HOST
});

export default api;