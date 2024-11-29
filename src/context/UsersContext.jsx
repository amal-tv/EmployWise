import React, { createContext, useState, useContext } from 'react';
import { deleteUser, fetchUsersApi, FetchSingleUserApi, updateUserApi } from '../api/apiUsers';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [localCache, setLocalCache] = useState({});
  const [error, setError] = useState(null);

  const fetchUsers = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchUsersApi(page);

      
      const mergedUsers = response.data.data.map((user) => ({
        ...user,
        ...(localCache[user.id] || {}),
      }));

      setUsers(mergedUsers);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response?.data?.error || 'Failed to fetch users';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const updateUser = async (userId, updatedData) => {
    setLoading(true);
    try {
      await updateUserApi(userId, updatedData);

      
      setLocalCache((prevCache) => ({
        ...prevCache,
        [userId]: updatedData,
      }));

      
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === parseInt(userId) ? { ...user, ...updatedData } : user
        )
      );

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response?.data?.error || 'Failed to update user';
      throw new Error(errorMessage);
    }
  };

  const fethSingleUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const user = await FetchSingleUserApi(userId);
      console.log(user.data);
      setLoading(false);
      return user.data;
    } catch (err) {
      setLoading(false);
      const errorMessage = 'Failed to fetch single user';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const deleteSingleUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      
      await deleteUser(userId);

      
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

      setLoading(false);
      console.log(`User with ID ${userId} deleted successfully`);
    } catch (err) {
      setLoading(false);
      const errorMessage = 'Failed to delete the user';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        fetchUsers,
        loading,
        error,
        fethSingleUser,
        updateUser,
        deleteSingleUser,
        setUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
