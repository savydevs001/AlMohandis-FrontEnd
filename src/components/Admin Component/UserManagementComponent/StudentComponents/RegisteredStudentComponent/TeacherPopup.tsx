// TeacherPopup.tsx
import React from 'react';

type TeacherPopupProps = {
  onClose: () => void;
};

const TeacherPopup: React.FC<TeacherPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg w-[40%]">
       <div>
           <div className='flex items-center gap-4 space-y-2'>
            <label className='w-[20%] font-semibold' htmlFor="">Department</label>
            <input className='w-[70%] py-1 rounded-md' type="text" placeholder='Computer Science' />
            </div> 
           <div className='flex items-center gap-4 space-y-2'>
            <label className='w-[20%] font-semibold' htmlFor="">Teacher</label>
            <select className='w-[70%] rounded-md' name="" id="">
                  <option value="">Select</option>
                  <option value="">Teacher 1</option>
                  <option value="">Teacher 1</option>
                  <option value=""></option>
            </select>
            </div> 
            <div className='flex items-center gap-4 space-y-2'>
            <label className='w-[20%] font-semibold' htmlFor="">Subject</label>
            <select className='w-[70%] rounded-md' name="" id="">
                  <option value="">Select</option>
                  <option value="">Teacher 1</option>
                  <option value="">Teacher 1</option>
                  <option value=""></option>
            </select>
            </div> 
       </div>
        <div className='flex items-center justify-center gap-4'>
            <button  className="px-4 py-2 mt-4 text-white rounded bg-primary">Register</button>
        <button
          className="px-4 py-2 mt-4 text-white rounded bg-primary"
          onClick={onClose}
        >
          Cancel
        </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherPopup;
