// import React from 'react'

import { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io"
import { ExamPopup } from "../Courses Component/Edit Course/EditCoursePopUps/ExamPopUp";
import DashBoardHeader from "../Dashboard Component/DashBoardHeader";

function View() {

      const [activePopup, setActivePopup] = useState<string | null>(null);

    
      const closePopup = () => {
        setActivePopup(null);
      };
      

  return (
   
             <div className="w-full">
   <div className="flex items-center justify-between w-full gap-4 p-2">
          <h1 className="text-2xl font-bold">Exams</h1>
          <DashBoardHeader />
        </div>
      <div className="">
            <div className="flex justify-end w-full mt-6 mb-6">
                  <button
                    onClick={() => setActivePopup('exam')}
                  className="px-4 py-2 font-medium text-white rounded-md bg-primary">Edit Exam</button>
            </div>
        <div className="flex flex-col items-center gap-4 lg:items-start ">
          <div className='flex flex-col items-center w-full gap-6 lg:flex-row lg:items-start'>
            <div className=' w-[90%] lg:w-[40%] bg-white shadow-xl border p-3 rounded-lg space-y-2 text-lg'>
              <h5 className='w-full px-4 py-2 font-semibold border-2 rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
            </div>
            <div className='w-[90%] lg:w-[60%] space-y-4'>
              <div className='flex items-center justify-between border border-[#6666] p-4 rounded-lg bg-white'>
                <div>
                  <h5 className="text-xl font-medium">What is the first Question</h5>
                  <p className='text-[#999] bg-white text-md leading-0'>Simple Note about the question or clarification</p>
                </div>
                <div>
                  <IoIosInformationCircleOutline />
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <input className='w-[40%] py-4 rounded-2xl outline-none text-lg' type="text" placeholder='Option 1' />
                <input className='w-[40%] py-4 text-lg rounded-2xl outline-none' type="text" placeholder='Option 2' />
              </div>
              <div className='flex items-center gap-3'>
                <input className='w-[40%] py-4 text-lg  rounded-2xl outline-none' type="text" placeholder='Option 1' />
                <input className='w-[40%] py-4 text-lg  rounded-2xl outline-none' type="text" placeholder='Option 2' />
              </div>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="">Correct Answer</label>
                <input className='w-[40%] bg-white py-3 text-lg  rounded-2xl outline-none' type="text" placeholder='Correct Answer' />
              </div>
            
            </div>
          </div>
        </div>
      </div>

       {/* Conditionally render the popup */}
       {activePopup === 'exam' && <ExamPopup onClose={closePopup} />}
    </div>
  )
}

export default View
