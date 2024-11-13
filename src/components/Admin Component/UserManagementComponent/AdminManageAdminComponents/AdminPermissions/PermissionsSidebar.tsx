// Sidebar.tsx
import React from 'react';

const PermissionSidebar: React.FC = () => {
  return (
    <div className="h-full p-4 bg-gray-100 lg:w-64">
      <div className="mb-4">
        <select className="w-full p-2 border border-gray-300 rounded">
          <option>Select items</option>
          <option>Item 1</option>
          <option>Item 2</option>
        </select>
      </div>
      <h2 className="mb-4 text-lg font-semibold text-teal-700">Items</h2>
      <ul className="space-y-2">
        <li className="text-gray-700 cursor-pointer">Management Group 1</li>
        <li className="text-gray-700 cursor-pointer">Management Group 2</li>
      </ul>
    </div>
  );
};

export default PermissionSidebar;
