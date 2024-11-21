// import React from 'react'

import { useState } from "react";
import UserManagementHeader from "../UserManagementHeader"
import AddStudentPopUp from "./AddStudentPopUp";
import ShowAllStudentsTable from "./ShowAllStudentsTable"

function AdminStudentMainPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddTeacherClick = () => {
    setIsPopupOpen(true); // Open the popup when the "Add +" button is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };
  
  return (
    <div className="space-y-6">
    <UserManagementHeader title = 'Student Management'/>
    <div className="flex items-center justify-end">
    <button
     onClick={handleAddTeacherClick} 
    className="px-4 py-2 text-lg text-white rounded-lg bg-primary">Add +</button>
    </div>
    <div>
      <ShowAllStudentsTable/>
    </div>
    {isPopupOpen && <AddStudentPopUp onClose={handleClosePopup} />} {/* Conditionally render the popup */}
    </div>
  )
}

export default AdminStudentMainPage
