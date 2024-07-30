import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { loadState, clearState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" />;

  const handleLogout = () => {
    clearState("user"); // Clear user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen">
      <div className="w-[20%] p-6 bg-blue-400">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white mb-6">
          <h2 className="text-lg font-bold">Frontend Mentor</h2>
          <p className="text-sm">Feedback Board</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full p-3 bg-red-500 text-white font-bold rounded-lg mb-6 hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex space-x-2 mb-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full">
              All
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              UI
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              UX
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Enhancement
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Bug
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Feature
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Roadmap</h3>
            <a href="#" className="text-blue-500">
              View
            </a>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                Planned
              </span>
              <span>2</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                In-Progress
              </span>
              <span>3</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                Live
              </span>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] p-8 overflow-auto h-full">
        <Outlet />
      </div>
    </div>
  );
};
