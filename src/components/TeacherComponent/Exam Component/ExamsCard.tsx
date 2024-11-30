// import React from 'react'

import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6"
import { ExamPopup } from "../Courses Component/Edit Course/EditCoursePopUps/ExamPopUp";
import { NavLink } from "react-router-dom";

function ExamsCard({ examTitle, courseName, partName, moduleType }) {

      const [activePopup, setActivePopup] = useState<string | null>(null);

    
      const closePopup = () => {
        setActivePopup(null);
      };
      
  return (
      <div>
      {/* Ungraded Assignment Card */}
      <div className="flex justify-between w-full px-4 py-4 space-y-1 bg-white border rounded-lg shadow-sm border-neutral-200">
        <div className="space-y-1">
          <h3 className="font-semibold">{examTitle}</h3>
          <p className="text-[#7C7C7C]">{partName}</p>
          <p className="text-[#7C7C7C]">
            Create on<span className="font-medium text-black">25-10-2023</span>
          </p>
          <p className="font-normal">{courseName} <span>-</span>{moduleType}</p>
        <div className="space-x-2">
      <NavLink to={'viewExam'}>
      <button className="px-3 py-2 font-medium text-white rounded-md bg-primary">
            View
          </button>
      </NavLink>
       <NavLink to={'viewAttemps'}>
       <button className="px-3 py-2 font-medium text-white rounded-md bg-primary">
            View Attemps
          </button>
       </NavLink>
        </div>
        </div>
        <div>
          <FaRegPenToSquare 
            onClick={() => setActivePopup('exam')}
            className="font-sans text-xl cursor-pointer"
          />
        </div>
      </div>

      {/* Conditionally render the popup */}
      {activePopup === 'exam' && <ExamPopup onClose={closePopup} />}

    
    </div>
  )
}

export default ExamsCard
