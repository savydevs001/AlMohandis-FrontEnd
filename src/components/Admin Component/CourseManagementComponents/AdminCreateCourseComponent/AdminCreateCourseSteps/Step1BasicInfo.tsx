// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiContractLeftLine } from "react-icons/ri";


interface BasicInfo_StepProps {
  handleNext: () => void;
}

const Step1BasicInfo: React.FC<BasicInfo_StepProps> = ({ handleNext }) => {

  

  

    
  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl shadow-2xl p-8 space-y-6 h-[80%] mx-auto bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Basic Information</h2>
        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="">Course Title</label>
          <input
            type="text"
            className='rounded-md bg-cardBg border-[#6666]'
            name="title"
            placeholder="Enter your Title"
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer">
            <input 
              type="file" 
              className="absolute w-full h-full opacity-0 cursor-pointer" // Handle file change
            />
            <div className="px-4 py-2 text-gray-700 bg-white border-2 border-gray-400" >
            </div>
          </label>
        </div>
      
        <div className='flex items-center gap-2'>
          <NavLink className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' to={'/courses'}>
            <RiContractLeftLine />
            Back
          </NavLink>
          <button 
 className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' 
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1BasicInfo; 
