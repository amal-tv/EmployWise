import React, { useEffect, useState } from 'react';
import { useUsers } from '../context/UsersContext';
import UserCard from '../components/UserCard';

const Users = () => {
  const { users, fetchUsers, loading, error } = useUsers();
  const [page, setPage] = useState(1);

  
  const loadUsers = () => {
    if (!loading) {
      fetchUsers(page); // Fetch users based on the current page
    }
  };

  useEffect(() => {
    loadUsers(); // Call loadUsers inside the useEffect
  }, [page]);

  const handleNextPage = () => setPage((p) => p + 1);
  const handlePreviousPage = () => setPage((p) => (p > 1 ? p - 1 : p));

  return (
    <div className="users-container">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="user-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div className="pagination-buttons flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
