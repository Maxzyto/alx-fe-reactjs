function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm md:text-x-l mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k"
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
