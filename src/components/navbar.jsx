import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo Section */}
          <div className="flex items-center py-4">
            <h1 className="text-lg font-bold text-gray-800">Onefinnet</h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <button className="text-gray-600 hover:text-black">
              Start searching
            </button>

            {/* Notifications Icon */}
            <button className="text-gray-600 hover:text-black">
              <span role="img" aria-label="bell">🔔</span>
            </button>

            {/* Settings Icon */}
            <button className="text-gray-600 hover:text-black">
              <span role="img" aria-label="settings">⚙️</span>
            </button>

            {/* Profile Icon */}
            <button className="text-gray-600 hover:text-black">
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
