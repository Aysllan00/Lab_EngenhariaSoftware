import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:5001',
  timeout: 9000,
});

export default client;