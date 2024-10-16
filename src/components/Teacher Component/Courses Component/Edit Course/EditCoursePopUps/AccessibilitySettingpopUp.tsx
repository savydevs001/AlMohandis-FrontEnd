import React from 'react';
// import { RxPinRight } from 'react-icons/rx';

const AccessibilityPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-xl p-6 text-[.8vw] bg-white rounded-lg shadow-lg">
        
      <div className='mt-0 '>
      <div className='p-2 mx-auto space-y-3 h-fit'>
<h2 className='text-2xl font-semibold'>Accessibility Settings</h2>
<div className='flex flex-col space-y-4'>
   <div className='flex items-center gap-4'>
      <input className='w-3 h-3 text-primary' type="checkBox" />
      <p className='text-[#555]'>Free</p>
      </div> 
      <div className='flex items-center gap-10 lg:gap-36'>
             <h5 className='font-semibold'>Type</h5>    
             <div className='flex items-center gap-2 text-[.8vw]'>
                  <p className='px-4 py-1 text-white rounded-full bg-primary'>Institute</p>
                  <p className='px-4 py-1 text-white rounded-full -sm bg-primary'>Externel</p>
                  </div> 
      </div>
      <div className='flex items-center gap-10 lg:gap-16'>
             <h5 className='font-semibold'>Academic Stage</h5>    
             <div className='flex flex-wrap items-center gap-1 text-[.9vw]'>
                  <p className='px-4 py-1 text-white rounded-full bg-[#999]'>All</p>
                  <p className='px-3 py-1 text-white rounded-full bg-primary'>Stage 1</p>
                  <p className='px-3 py-1 text-white rounded-full bg-primary'>Stage 2</p>
                  <p className='px-3 py-1 text-white rounded-full bg-[#999]'>Stage 3</p>
                  <p className='px-3 py-1 text-white rounded-full bg-primary'>Stage 4</p>
                  </div> 
      </div>
<div className='space-y-3'>
<h5 className='font-semibold'>Buying Status</h5>  
<div className='flex items-center gap-4 px-5'>
      <input className='w-2 h-2 text-primary' type="checkBox" />
      <p className='text-[#555] text-[.9vw]'>Bought From Another teacher</p>
      </div> 
      <select className='py-1 lg:mx-16 rounded-xl bg-cardBg lg:w-80 w-80 text-[.9vw]' name="" id="">
            <option className='py-1 text-[.9vw] bg-cardBg' value="">Select Teacher</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher 1</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher 2</option>
            <option className='py-1 text-sm bg-cardBg' value="">Teacher 3</option>
      </select>
      <div className='flex items-center gap-4 px-5 text-[.9vw]'>
      <input className='w-2 h-2 text-primary' type="checkBox" />
      <p className='text-[#555] '>Bought From Another teacher</p>
      </div> 
</div>
<div className='space-y-3'>
<h5 className='font-semibold'>Groups</h5> 
      <select className='py-2 rounded-md w-80 bg-cardBg text-[.9vw]' name="" id="">
            <option className='py-1 text-sm bg-cardBg' value="">All</option>
            <option className='py-1 text-sm bg-cardBg' value="">Group 1</option>
            <option className='py-1 text-sm bg-cardBg' value="">Group 2</option>
            <option className='py-1 text-sm bg-cardBg' value="">Group 3</option>
      </select>
</div>

</div>

<div className='space-x-4'>
<button className="px-4 py-2 text-white rounded bg-primary">Save Changes</button>
<button 
            className="px-4 py-2 border rounded border-primary text-primary" 
            onClick={onClose}
          >
            Cancel
          </button>
         
</div>
</div>
</div>

    </div>
        
        </div>
  );
};

export default AccessibilityPopup;
