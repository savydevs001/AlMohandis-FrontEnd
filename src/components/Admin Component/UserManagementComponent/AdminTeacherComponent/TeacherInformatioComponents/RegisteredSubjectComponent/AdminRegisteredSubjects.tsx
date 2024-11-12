import  { useState } from 'react';
import TeacherPopup from '../../../StudentComponents/RegisteredStudentComponent/TeacherPopup';

import RegisteredSubjectTable from './RegisteredSubjectTable';


function AdminRegisteredSubjects() {
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
          
          className="px-4 py-3 text-sm font-semibold text-white rounded-md lg:text-lg bg-primary"
        >
          Total Subject <span className="lg:text-xl">08</span>
        </button>
        <button
        onClick={handleOpenPopup} 
        className="px-4 py-2 font-semibold border rounded-md lg:py-1 lg:text-lg text-primary border-primary">
          Add New Subject
        </button>
      </div>
<RegisteredSubjectTable/>
      {/* Conditionally render the TeacherPopup component */}
      {isPopupOpen && <TeacherPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default AdminRegisteredSubjects;



