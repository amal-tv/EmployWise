import api from './apiBase';

export const loginUser = (email, password) => api.post('/api/login', { email, password });
