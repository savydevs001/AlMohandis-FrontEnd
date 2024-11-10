import  { useState } from 'react';
import RegisteredStudentTable from "./RegisteredStudentTable";
import TeacherPopup from './TeacherPopup';

function AdminRegisteredStudent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    console.log("Button clicked"); // Debugging log
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button 
          
          className="px-4 py-3 text-lg font-semibold text-white rounded-md bg-primary"
        >
          Registered Teachers <span className="text-xl">08</span>
        </button>
        <button
        onClick={handleOpenPopup} 
        className="px-4 py-2 text-lg font-semibold border rounded-md text-primary border-primary">
          Register With Teacher
        </button>
      </div>
      
      <RegisteredStudentTable />

      {/* Conditionally render the TeacherPopup component */}
      {isPopupOpen && <TeacherPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default AdminRegisteredStudent;
