import React from 'react';
import SearchableDropdown from '../../Communication/Messages/SearchableDropdown';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface StudentAddPopupProps {
  show: boolean;
  onClose: () => void;
}

const StudentAddPopup: React.FC<StudentAddPopupProps> = ({ show, onClose }) => {
  if (!show) return null; // Don't render if not visible

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog w-[30%]"
    >
      <div className="p-6 bg-white shadow-lg lg:w-[30%] w-[90%] rounded-lg space-y-4">
      
        <form>
        <div className="flex flex-col w-full mb-4 space-y-1">
       
      <SearchableDropdown label="" placeholder="Search Student" options={["Student Name", "Student Name", "Student Name", "Student Name"]} onSelect={() => {}}/>
      </div>

      <div className="flex items-center justify-between px-6 mt-2 text-red-600">
            <p className="text-md text-pTag">Student 1 Name</p>
            <IoIosCloseCircleOutline />

           </div>
      <div className="flex items-center justify-between px-6 mt-2 mb-4 text-red-600">
            <p className="text-md text-pTag">Student 1 Name</p>
            <IoIosCloseCircleOutline />

           </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold border text-primary border-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentAddPopup;
