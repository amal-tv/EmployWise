import React, { useEffect, useState } from "react";
import { useUsers } from "../context/UsersContext";
import UserCard from "../components/UserCard";

const Users = () => {
  const { users, fetchUsers, loading, error } = useUsers();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch users when the page changes
  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  // Filter users based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(users); // If no search query, show all users
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(lowerCaseQuery) ||
          user.last_name.toLowerCase().includes(lowerCaseQuery) ||
          user.email.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const handleNextPage = () => setPage((p) => p + 1);
  const handlePreviousPage = () => setPage((p) => (p > 1 ? p - 1 : p));

  return (
    <div className="users-container mx-auto max-w-7xl p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Users</h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-lg p-3 w-full text-lg"
        />
      </div>

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* User List */}
      <div className="user-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination-buttons flex justify-between mt-8">
        {/* Show Previous button only if not on the first page */}
        {page > 1 && (
          <button
            onClick={handlePreviousPage}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
          >
            Previous
          </button>
        )}

        {/* Show Next button only if not on the last page */}
        {page < 2 && (
          <button
            onClick={handleNextPage}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
