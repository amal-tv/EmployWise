import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const UserEditSchema = z.object({
  first_name: z.string().min(2, { message: "First name must be at least 2 characters" }),
  last_name: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" })
});

export const EditUserForm = ({ 
  defaultValues, 
  onSubmit, 
  isLoading 
}) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(UserEditSchema),
    defaultValues
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          {...register('first_name')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="First Name"
        />
        {errors.first_name && (
          <p className="text-red-500 text-xs">{errors.first_name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          {...register('last_name')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Last Name"
        />
        {errors.last_name && (
          <p className="text-red-500 text-xs">{errors.last_name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          {...register('email')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {isLoading ? 'Updating...' : 'Update User'}
        </button>
      </div>
    </form>
  );
};