import { useState } from 'react';
import UserManagementHeader from "../UserManagementHeader";
import AdminTeacherTable from "./AdminTeacherTable";
import AddTeacherPopup from './AddTeacherPopup'; // Popup component

function AdminTeacherShowAllComp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddTeacherClick = () => {
    setIsPopupOpen(true); // Open the popup when the "Add +" button is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className="w-full space-y-6">
      <UserManagementHeader title="Teacher Management" />
      <div className="space-y-6">
        <div className="flex items-center justify-end">
          <button
            className="px-4 py-2 text-white rounded-md bg-primary"
            onClick={handleAddTeacherClick} // Trigger the popup open on button click
          >
            Add +
          </button>
        </div>
        <AdminTeacherTable />
      </div>
      {isPopupOpen && <AddTeacherPopup onClose={handleClosePopup} />} {/* Conditionally render the popup */}
    </div>
  );
}

export default AdminTeacherShowAllComp;
