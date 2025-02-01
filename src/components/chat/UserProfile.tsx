import React from 'react';

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-100"></div>
        <div>
          <h3 className="font-semibold">User Name</h3>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 