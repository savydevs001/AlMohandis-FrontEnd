import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { AssignmentPopup } from '../../Courses Component/Edit Course/EditCoursePopUps/AssignmentPopUp';
import { NavLink } from "react-router-dom";

function UngradedAssignmentCard() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  // const handleFileUpload = (file: File | null) => {
  //   console.log(file);
  // };

  const closePopup = () => {
    setActivePopup(null);
  };

  // Get current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      {/* Ungraded Assignment Card */}
      <div className="flex justify-between w-full px-4 py-4 space-y-1 bg-white border rounded-lg shadow-sm border-neutral-200">
        <div className="space-y-1">
          <h3 className="font-semibold">Assignment 1</h3>
          <p className="text-[#7C7C7C]">
            Posted on <span className="font-medium text-black">{currentDate}</span>
          </p>
          <p className="font-medium">Course Name - Chapter 1</p>
          <NavLink to='/gradeNow'>
          <button className="px-3 py-2 font-medium text-white rounded-md bg-primary">
            Grade Now
          </button>
          </NavLink>
        </div>
        <div>
          <FaRegPenToSquare 
            onClick={() => setActivePopup('assignment')}
            className="text-xl font-thin cursor-pointer"
          />
        </div>
      </div>

      {/* Conditionally render the popup */}
      {activePopup === 'assignment' && (
        <AssignmentPopup
          // handleFileUpload={handleFileUpload}
          onClose={closePopup} // Pass closePopup function to close the popup
        />
      )}
    </div>
  );
}

export default UngradedAssignmentCard;
