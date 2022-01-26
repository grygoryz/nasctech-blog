import axios from 'axios';

const baseURL = 'http://localhost:4000';

const axiosConfig = {
  baseURL,
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
