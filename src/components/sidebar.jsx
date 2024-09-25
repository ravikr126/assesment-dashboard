import React, { useState } from "react";
import { FiHome, FiChevronLeft, FiChevronRight } from "react-icons/fi"; // React icons
import Home from "./home";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-white border-r transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className={`${isOpen ? "block" : "hidden"} font-bold text-lg`}>
            Onefinnet
          </h1>
          <button
            className="text-gray-600"
            onClick={toggleSidebar}
          >
            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>


        <ul className="mt-5">
          <li className="flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-gray-100 transition-all">
            <FiHome className="text-xl" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
          </li>
        
        </ul>
      </div>

      <div className="flex-1 p-6">
        <Home/>
      </div>
    </div>
  );
};

export default Sidebar;
