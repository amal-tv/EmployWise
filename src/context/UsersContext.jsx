import React, { createContext, useState, useContext } from 'react';
import { updateUser, deleteUser, fetchUsersApi } from '../api/apiUsers';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchUsersApi(page);
      setUsers(response.data.data); 
      console.log("hi from the context");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || 'Failed to fetch users');
    }
  };

  return (
    <UsersContext.Provider value={{ users, fetchUsers, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
