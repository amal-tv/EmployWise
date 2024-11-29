import React, { useEffect, useState } from "react";
import { useUsers } from "../context/UsersContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import BeatLoader from "react-spinners/BeatLoader";

const Users = () => {
 const { users, fetchUsers, loading, error } = useUsers();
 const { logout } = useAuth();
 const navigate = useNavigate();
 const [page, setPage] = useState(1);
 const [searchQuery, setSearchQuery] = useState("");
 const [filteredUsers, setFilteredUsers] = useState([]);

 useEffect(() => {
   fetchUsers(page);
 }, [page]);

 useEffect(() => {
   if (searchQuery.trim() === "") {
     setFilteredUsers(users);
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
 
 const handleLogout = () => {
   logout();
   navigate('/');
 };

 if (loading) {
  return <div className='flex justify-center items-center  mt-[500px]'><BeatLoader /></div>;
}

 return (
   <div className="users-container mx-auto max-w-7xl p-4">
     <div className="flex justify-between items-center mb-6">
       <h1 className="text-4xl font-bold">Users</h1>
       <button
         onClick={handleLogout}
         className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
       >
         Logout
       </button>
     </div>

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

     <div className="user-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {filteredUsers.map((user) => (
         <UserCard key={user.id} user={user} />
       ))}
     </div>

     <div className="pagination-buttons flex justify-between mt-8">
       {page > 1 && (
         <button
           onClick={handlePreviousPage}
           className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
         >
           Previous
         </button>
       )}

       {page < 2 && (
         <button
           onClick={handleNextPage}
           className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
         >
           Next
         </button>
       )}
     </div>
   </div>
 );
};

export default Users;