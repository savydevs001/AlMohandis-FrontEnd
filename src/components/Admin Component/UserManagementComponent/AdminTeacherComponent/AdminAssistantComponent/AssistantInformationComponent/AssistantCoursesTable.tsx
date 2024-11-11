// import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the prop types
type AssistantCoursesTableProps = {
  onViewClick?: () => void;
};


// Define the component
function AssistantCoursesTable({ onViewClick }: AssistantCoursesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="text-white bg-primary">
            <th className="px-4 py-2 border border-black">Course Name</th>
            <th className="px-4 py-2 border border-black">Teacher</th>
            <th className="px-4 py-2 border border-black">Assignment Date</th>
            <th className="px-4 py-2 border border-black">Status</th>
            <th className="px-4 py-2 border border-black">Permissions</th>
            <th className="px-4 py-2 border border-black">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-[#D1D6D6]">
          {/* Sample data rows */}
          {[
            { id: 'Basic of Python', name: 'John Daniel', assistant: '28-03-2024', startDate: 'Active', status: 'Published' },
            { id: 'Advanced JavaScript', name: 'Jane Smith', assistant: '05-04-2024', startDate: 'Inactive', status: 'Draft' },
            // More rows as needed...
          ].map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-black">{row.id}</td>
              <td className="px-4 py-2 border border-black">{row.name}</td>
              <td className="px-4 py-2 border border-black">{row.assistant}</td>
              <td className="px-4 py-2 text-green-500 border border-black">{row.startDate}</td>
              <td className="px-4 py-2 border border-black">
                <NavLink to="" className="text-pink-500 border-b border-pink-500 cursor-pointer">
                  View
                </NavLink>
              </td>
              <td className="px-4 py-2 border border-black">
                {/* Button with onViewClick event */}
                <button onClick={() => onViewClick?.()} className="text-pink-500 border-b border-pink-500 cursor-pointer">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssistantCoursesTable;
