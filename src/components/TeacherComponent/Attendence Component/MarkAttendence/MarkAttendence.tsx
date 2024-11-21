import { useState } from 'react';
import Sidebar from '../../Sidebar';
import AttendenceHeader from '../AttendenceHeader';
import AttendenceSheet from './AttendenceSheet';
import AddStudentPopup from './AddStudentPopup';

function MarkAttendence() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar/>
      
      <div className='flex-1 lg:p-6'>
        <div className="mx-auto mt-3 lg:flex bg-gray-50 lg:mt-0">
          <AttendenceHeader/>
        </div>
        <div className='px-2 lg:px-0'>
          <button 
            className='px-6 py-1 font-semibold border-2 rounded-lg text-primary border-primary' 
            onClick={() => {
              setIsPopupOpen(true);
              console.log("Popup state set to open:", isPopupOpen);
            }}
          >
            Add Student <span className='text-2xl'>+</span>
          </button>
        </div>
        <div className='py-4 space-y-2' >
          <AttendenceSheet/>
          <AttendenceSheet/>
          <AttendenceSheet/>
        </div>

        {/* Popup Component */}
        <AddStudentPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        />
      </div>
    </div>
  );
}

export default MarkAttendence;
