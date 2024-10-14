import React from 'react';
import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
interface Step4Props {
  formData: {
    title: string;
    description: string;
    accessibility: string;
    additionalField1: string; // Example field
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const Step4: React.FC<Step4Props> = ({ handleNext, handleBack }) => {
  return (
      <div className='h-screen mt-12'>
      <div className='max-w-4xl h-[80%] p-8 mx-auto space-y-3 shadow-2xl  bg-cardBg'>
<h2 className='text-2xl font-semibold'>Instructors</h2>
<div className='flex flex-col space-y-4'>
  
<div className=''>
<h5 className='font-medium'>Select Instructor 1 from list</h5> 
      <select className='py-2 rounded-md w-80 bg-cardBg' name="" id="">
            <option className='py-1 text-sm bg-cardBg' value="">Teacher Name</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher Name</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher Name</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher Name</option>
      </select>
</div>
<div className='lg:px-32'>
<button className='px-6 py-2 font-semibold border-2 rounded-lg text-primary border-primary'>Add Instructor <span className='px-2 text-lg'>+</span></button>
</div>
</div>

<div className='flex items-center gap-2 py-12 h-fit'>
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
