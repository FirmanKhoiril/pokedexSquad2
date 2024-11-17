import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl px-4 sm:px-8 mb-6">
      <div className="flex items-center space-x-1">
        <label htmlFor="sort" className="text-base font-medium text-gray-900">
          Sort by
        </label>
        <select
          id="sort"
          name="sort"
          className="rounded-md px-2 py-1 text-base font-medium text-gray-900 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          <option value="number">Number</option>
          <option value="name">Name</option>
          <option value="type">Type</option>
        </select>
      </div>

      <div className="flex items-center space-x-2 mt-4 sm:mt-0">
        <span className="text-base font-medium text-gray-900">
          Number range
        </span>
        <input
          type="text"
          placeholder="0001"
          className="border border-blue-500 rounded-md px-3 py-2 text-base font-medium text-gray-900 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <span className="text-gray-900">-</span>
        <input
          type="text"
          placeholder="0009"
          className="border border-blue-500 rounded-md px-3 py-2 text-base font-medium text-gray-900 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Filter;