import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiContractLeftLine } from "react-icons/ri";
// import { RxPinRight } from "react-icons/rx";

interface Step1Props {
  formData: { title: string; description: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className='h-screen mt-12'>
      <div className='max-w-4xl shadow-2xl p-8 space-y-6 h-[80%] mx-auto bg-cardBg'>
<h2 className='text-2xl font-semibold'>Basic Information</h2>
<div className='flex flex-col'>
      <label className='font-medium rounded-md' htmlFor="">Course Title</label>
      <input
  type="text"
  className='rounded-md bg-cardBg border-[#6666]'
  name="title"
  placeholder="Enter your Title"
  value={formData.title}
  onChange={handleInputChange}
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
  value={formData.description}
  onChange={handleInputChange}
/>
</div>
<div className='flex items-center gap-2'>
      <NavLink className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' to={'/courses'}>
      <RiContractLeftLine />
      Back</NavLink>
  <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' onClick={handleNext}>Next

  </button>
</div>
</div>
    </div>
  );
};

export default Step1;
