import React from 'react';
import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
interface Step2Props {
  formData: { accessibility: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const Step2: React.FC<Step2Props> = ({   handleNext, handleBack }) => {
  return (
      <div className='mt-12 '>
      <div className='max-w-4xl p-8 mx-auto space-y-3 shadow-2xl h-fit bg-cardBg'>
<h2 className='text-2xl font-semibold'>Accessibility Settings</h2>
<div className='flex flex-col space-y-4'>
   <div className='flex items-center gap-4'>
      <input className='w-3 h-3 text-primary' type="checkBox" />
      <p className='text-[#555]'>Free</p>
      </div> 
      <div className='flex items-center gap-10 lg:gap-36'>
             <h5 className='font-semibold'>Type</h5>    
             <div className='flex items-center gap-2'>
                  <p className='px-4 py-1 text-sm text-white rounded-full bg-primary'>Institute</p>
                  <p className='px-4 py-1 text-sm text-white rounded-full bg-primary'>Externel</p>
                  </div> 
      </div>
      <div className='flex items-center gap-10 lg:gap-16'>
             <h5 className='font-semibold'>Academic Stage</h5>    
             <div className='flex flex-wrap items-center gap-1'>
                  <p className='px-4 py-1 text-sm text-white rounded-full bg-[#999]'>All</p>
                  <p className='px-4 py-1 text-sm text-white rounded-full bg-primary'>Stage 1</p>
                  <p className='px-4 py-1 text-sm text-white rounded-full bg-primary'>Stage 2</p>
                  <p className='px-4 py-1 text-sm text-white rounded-full bg-[#999]'>Stage 3</p>
                  <p className='px-4 py-1 text-sm text-white rounded-full bg-primary'>Stage 4</p>
                  </div> 
      </div>
<div className='space-y-3'>
<h5 className='font-semibold'>Buying Status</h5>  
<div className='flex items-center gap-4 px-5'>
      <input className='w-3 h-3 text-primary' type="checkBox" />
      <p className='text-[#555] text-sm'>Bought From Another teacher</p>
      </div> 
      <select className='py-1 lg:mx-16 rounded-xl bg-cardBg lg:w-96 w-80' name="" id="">
            <option className='py-1 text-sm bg-cardBg' value="">Select Teacher</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher 1</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher 2</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher 3</option>
      </select>
      <div className='flex items-center gap-4 px-5'>
      <input className='w-3 h-3 text-primary' type="checkBox" />
      <p className='text-[#555] text-sm'>Bought From Another teacher</p>
      </div> 
</div>
<div className='space-y-3'>
<h5 className='font-semibold'>Groups</h5> 
      <select className='py-2 rounded-md w-80 bg-cardBg' name="" id="">
            <option className='py-1 text-sm bg-cardBg' value="">All</option>
            <option className='py-1 text-sm bg-cardBg' value="">Group 1</option>
            <option className='py-1 text-sm bg-cardBg' value="">Group 2</option>
            <option className='py-1 text-sm bg-cardBg' value="">Group 3</option>
      </select>
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

export default Step2;
