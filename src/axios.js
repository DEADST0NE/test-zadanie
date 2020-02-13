import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.35.5:8822/api/v1/'
});

export default instance;