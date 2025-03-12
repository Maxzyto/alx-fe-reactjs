import React from 'react';
// import { Img } from 'react-image';

function UserProfile() {

  const imageUrl = "https://images.app.goo.gl/HoAhzD2tpzLFQqk49";
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm md:text-xl mx-auto my-20 rounded-lg shadow-lg">
      <img
        src={imageUrl}
        alt="User"
        className="rounded-full w-36 sm:h-24 mx-out sm:w-24 md:w-36 md:h-36"
        
      />
      <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-lx">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
