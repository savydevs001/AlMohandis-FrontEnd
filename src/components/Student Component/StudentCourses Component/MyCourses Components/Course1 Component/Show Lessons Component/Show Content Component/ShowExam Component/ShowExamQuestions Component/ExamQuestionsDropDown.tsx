import React, { useState } from "react";
import { CiLock } from "react-icons/ci";

// Define the component
const ExamQuestionsDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown button */}
      <button
        onClick={toggleDropdown}
        className="px-6 py-3 font-semibold text-black bg-white border rounded-lg border-pTag"
      >
        View List of Questions
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute p-4 mb-2 bg-white border border-gray-300 rounded-md shadow-lg w-96 bottom-full">
          <ul className="space-y-3">
            <div className="flex items-center justify-between p-3 text-lg font-semibold border cursor-pointer hover:bg-gray-100 rounded-xl">
            <li >Option 1</li>
            <CiLock />
            </div>
            <div className="flex items-center justify-between p-3 text-lg font-semibold border cursor-pointer hover:bg-gray-100 rounded-xl">
            <li >Option 1</li>
            <CiLock />
            </div>
            <div className="flex items-center justify-between p-3 text-lg font-semibold border cursor-pointer hover:bg-gray-100 rounded-xl">
            <li >Option 1</li>
            <CiLock />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExamQuestionsDropDown;





