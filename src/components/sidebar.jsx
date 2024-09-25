import React, { useState } from "react";
import { FiHome, FiChevronLeft, FiChevronRight } from "react-icons/fi"; 
import Home from "./home";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentComponent, setCurrentComponent] = useState("home"); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDashboardClick = () => {
    setCurrentComponent("home"); 
  };

  const isActive = currentComponent === "home";

  return (
    <div className="flex h-screen">
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
          <li
            className={`flex items-center space-x-4 px-4 py-3 transition-all cursor-pointer ${
              isActive ? "bg-gray-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`} 
            onClick={handleDashboardClick} 
          >
            <FiHome className="text-xl" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        {currentComponent === "home" && <Home />} 
      </div>
    </div>
  );
};

export default Sidebar;
