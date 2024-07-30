import React from "react";
import { FaLightbulb } from "react-icons/fa";

const SuggestionsBar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <FaLightbulb className="w-6 h-6 text-yellow-400" />
        <span className="text-white font-bold text-lg">6 Suggestions</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-white">
          Sort by :{" "}
          <select className="bg-gray-800 text-white border-none outline-none ml-1">
            <option value="most-upvotes">Most Upvotes</option>
            <option value="least-upvotes">Least Upvotes</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
          + Add Feedback
        </button>
      </div>
    </div>
  );
};

export default SuggestionsBar;
