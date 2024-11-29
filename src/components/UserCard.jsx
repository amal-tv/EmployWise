import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UsersContext';
import toast from 'react-hot-toast';

const UserCard = ({ user}) => {
  const navigate = useNavigate();
  const {deleteSingleUser} = useUsers();

  const handleEdit = () => {
    navigate(`/users/${user.id}/edit`);
  };


    const handleDelete = async (userId) => {
      try {
        await deleteSingleUser(userId); 
        toast.success("the user is deleted");
      } catch (error) {
        toast.error(error)
      }
    };

  
  return (
    <div className="relative group border p-4 rounded shadow-md">
     
      <div className="absolute top-2 right-2 hidden group-hover:block">
        <button 
          onClick={() => handleEdit(user.id)} 
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
        >
          Edit
        </button>
        <button 
          onClick={() => handleDelete(user.id)} 
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
      
      
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="rounded-full w-16 h-16 mb-4 mx-auto"
      />
    
      <h2 className="text-lg font-semibold text-center">
        {user.first_name} {user.last_name}
      </h2>
      <p className="text-sm text-gray-500 text-center">{user.email}</p>
    </div>
  );
};

export default UserCard;
