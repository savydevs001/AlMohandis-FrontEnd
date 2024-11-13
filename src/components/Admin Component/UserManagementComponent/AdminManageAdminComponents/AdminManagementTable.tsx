// import React from 'react'

import { useState } from 'react';
import { NavLink } from "react-router-dom";
import PermissionsPopup from './AdminPermissions/PermissionsPopup';
// Import the popup component

function AdminManagementTable() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="overflow-x-auto">
      <div>
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">ID</th>
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">Email</th>
              <th className="px-4 py-2 border border-black">Joining Date</th>
              <th className="px-4 py-2 border border-black">Designation</th>
              <th className="px-4 py-2 border border-black">Permissions</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: '20-02-2023', joiningDate: 'Administrator' },
              { id: '01IST10', name: 'Jane Doe', email: 'jane@gmail.com', typeClass: '15-03-2023', joiningDate: 'Moderator' },
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">
                  <span onClick={openPopup} className="text-pink-500 border-b border-pink-500 cursor-pointer">View</span>
                </td>
                <td className="px-4 py-2 border border-black">
                  <NavLink to='/AdminInformation' className="text-pink-500 border-b border-pink-500 cursor-pointer">View</NavLink> | 
                  <span className="text-red-600 border-b border-red-600 cursor-pointer">Delete</span> |
                  <span className="text-blue-600 border-b border-blue-500 cursor-pointer">Edit</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render the popup if isPopupOpen is true */}
      {isPopupOpen && <PermissionsPopup onClose={closePopup} />}
    </div>
  );
}

export default AdminManagementTable;
