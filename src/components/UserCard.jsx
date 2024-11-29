import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card border p-4 rounded shadow-md">
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
