import axios from 'axios';

const API_BASE = 'https://reqres.in';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
