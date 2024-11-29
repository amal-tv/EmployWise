import api from './apiBase';

export const fetchUsersApi = (page) => {
  console.log("hi from api")
  return api.get(`/api/users?page=${page}`);
}
export const updateUser = (id, userData) => api.put(`/api/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/api/users/${id}`);
