import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UsersContext';
import { EditUserForm } from '../components/EditUserForm';
import toast from 'react-hot-toast';
import BeatLoader from "react-spinners/BeatLoader";

export const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fethSingleUser, loading, updateUser } = useUsers();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const loadUser = async () => {
        const result = await fethSingleUser(id);
        if (result.data) {
          setUser({
            first_name: result.data.first_name,
            last_name: result.data.last_name,
            email: result.data.email
          });
        }
      
    };

    loadUser();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      const edited = await updateUser(id, data);
      console.log("User updated successfully:", edited);
  
      
      toast.success("User updated successfully!", { duration: 3000, position: "top-center" });

  
      
      navigate('/users');
    } catch (error) {
      console.error("Error updating user:", error.message);
  
     
      toast.error(error.message || "An unexpected error occurred.");
    }
  };
  

  if (loading || !user) {
    return <div className='flex justify-center items-center  mt-[500px]'><BeatLoader /></div>;
  }

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h2 className="text-2xl mb-6">Edit User</h2>
      <EditUserForm 
        defaultValues={user}
        onSubmit={handleSubmit}
        />
    </div>
  );
};