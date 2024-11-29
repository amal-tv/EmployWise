import api from './apiBase';

export const fetchUsersApi = (page) => {

  return api.get(`/api/users?page=${page}`);
}
export const updateUserApi = (id, userData) => api.put(`/api/users/${id}`, userData);
export const FetchSingleUserApi = (userId) => api.get(`/api/users/${userId}`);
export const deleteUser = (id) => api.delete(`/api/users/${id}`);
