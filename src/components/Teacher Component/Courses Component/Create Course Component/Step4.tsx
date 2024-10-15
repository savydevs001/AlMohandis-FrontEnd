import React from 'react';
import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
interface Step4Props {
  formData: {
    title: string;
    description: string;
    accessibility: string;
    additionalField1: string;
    additionalField2: string; // Example field
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const Step4: React.FC<Step4Props> = ({ formData, handleInputChange, handleNext, handleBack }) => {
  return (
      <div className='h-screen mt-12'>
      <div className='max-w-4xl p-8 mx-auto space-y-6 shadow-2xl h-fit bg-cardBg'>
<h2 className='text-2xl font-semibold'>Season 1</h2>
<div className='flex flex-col'>
      <label className='font-medium rounded-md' htmlFor="">Title</label>
      <input
  type="text"
  className='rounded-md bg-cardBg border-[#6666]'
  name="title"
  placeholder="Enter your Title"
  value={formData.title}
  onChange={handleInputChange}
/>
</div>
<div className='flex flex-col justify-between w-full lg:flex-row gap-14'>
<div className='w-full space-y-4 lg:w-1/2'>
<div className='flex flex-col gap-1'>
      <label className='font-medium rounded-md' htmlFor="">Price</label>
      <input
  type="text"
  className='rounded-md bg-cardBg border-[#6666]'
  name="title"
  placeholder="$99.00"
  value={formData.title}
  onChange={handleInputChange}
/>
</div>
<div className='flex flex-col gap-1'>
      <label className='font-medium rounded-md' htmlFor="">Opening Date</label>
      <input
  type="Date"
  className='rounded-md bg-cardBg border-[#6666]'
  name="title"
  placeholder="$99.00"
  value={formData.title}
  onChange={handleInputChange}
/>
</div>
      </div>      
<div className='w-full space-y-4 lg:w-1/2'>
      <div className='space-y-4'>
      <div className='flex flex-col gap-1'>
      <label className='font-medium rounded-md' htmlFor="">Course Completion time</label>
      <input
  type="text"
  className='rounded-md bg-cardBg border-[#6666]'
  name="title"
  placeholder="4 Weeks"
  value={formData.title}
  onChange={handleInputChange}
/>
</div>
      <div className='flex flex-col gap-1'>
      <div className='flex items-center gap-3'>
            <input className='w-3 h-3 rounded-full text-primary' type="checkBox" />
            <p>No Expiration</p>
      </div>
      <div className='flex items-center gap-3'>
            <input className='w-3 h-3 rounded-full text-primary' type="checkBox" />
            <p>No Expiration</p>
      </div>
      <input
  type="date"
  className='rounded-md bg-cardBg border-[#6666]'
  name="title"
  placeholder="4 Weeks"
  value={formData.title}
  onChange={handleInputChange}
/>
<div className='flex items-center gap-3'>
            <input className='w-3 h-3 rounded-full text-primary' type="checkBox" />
            <p>Avialable Days</p>
      </div>
</div>
      </div>
      
      <div className='flex items-center justify-end'>
      {/* <button className='px-3 py-2 font-semibold border-2 rounded-lg text-primary border-primary'>Add Season <span className='px-2 text-lg'>+</span></button> */}
      </div>
      </div>      
</div>




<div className='flex items-center gap-2'>
<button className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' onClick={handleBack}>
<RiContractLeftLine />
      Back

</button>
  <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' onClick={handleNext}>Next
  <RxPinRight    />
  </button>
</div>
</div>
    </div>
  );
};

export default Step4;
