import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";

interface Step6Props {
  formData: {
    title: string;
    description: string;
    accessibility: string;
    additionalField1: string;
    additionalField2: string;
    finalComments: string; // Example field
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBack: () => void;
  handleNext: () => void;
}

const Step6: React.FC<Step6Props> = ({  handleBack, handleNext }) => {
  return (
      <div className='h-screen mt-12'>
      <div className='max-w-4xl p-8 shadow-2xl space-y-6 h-fit lg:h-[80%] mx-auto bg-cardBg'>
<h2 className='text-2xl font-semibold'>Modules</h2>

<div className='flex flex-col justify-between w-full gap-4 lg:flex-row'>
      <div className='w-full space-y-3 lg:w-1/2'>
            <h4 className='text-lg font-semibold'>Season1</h4>
            <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                  <label className='font-medium' htmlFor="">Module 1 Type</label>
                  <AiOutlineCloseCircle className='text-red-500' />

                  </div>
                  <select className='rounded-md' name="" id="">
                        <option value="">Chapter</option>
                        <option value="">Exams</option>
                        <option value="">Assignments</option>
                        <option value="">Attachment</option>
                  </select>
            </div>
            <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
                  <label className='font-medium' htmlFor="">Module 2 Type</label>
                  <AiOutlineCloseCircle className='text-red-500' />

                  </div>
                  <select className='rounded-md' name="" id="">
                        <option value="">Assignments</option>
                        <option value="">Exams</option>
                        <option value="">Chapter</option>
                        <option value="">Attachment</option>
                  </select>
            </div>
            <div>
            <div className='flex items-center justify-end'>
      <button className='px-3 py-2 font-semibold border-2 rounded-lg text-primary border-primary'>Add Module <span className='px-2 text-lg'>+</span></button>
      </div>
            </div>
      </div>
      <div className='p-4 space-y-3 bg-white border-2 lg:w-5/12 rounded-tr-xl rounded-br-xl border-l-black'>
        <div className='flex flex-col gap-2'>
        <button className='py-3 border bg-cardBg border-[#777] rounded-lg text-start px-5 font-semibold'>Chapter 1</button>
        <button className='py-3 border bg-cardBg border-[#777] rounded-lg text-start px-5 font-semibold'>Assigment 1</button>
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

export default Step6;
