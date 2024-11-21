import React from 'react';

export const ExamPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg">
 
    <div className='w-full'>
          <input type="text" placeholder='Lesson type' className='w-full rounded-md border-slate-300' />
        </div>

        <div className='flex flex-col w-full space-y-1'>
          <label className='font-semibold' htmlFor="">Content Type</label>
          <select className='w-full rounded-md border-slate-300 '>
            <option value="">Exam</option>
            <option value="">Assignment</option>
            <option value="">Video Lesson</option>
            <option value="">Attachment</option>
          </select>
        </div>
 
<div className='flex flex-col w-full space-y-1'>
<label className='font-semibold' htmlFor="">Description</label>
<input type="text" placeholder='Enter Description here...' className='w-full rounded-md border-slate-300' />
</div>
<div>
<button
            className='px-4 py-3 mt-2 w-[40%] text-primary rounded border border-primary font-semibold'
          >
            Add Question +
          </button>
</div>
 
    <div className='flex items-center justify-end w-full gap-4'>
          <button className="px-4 py-2 mt-4 text-white rounded bg-primary" onClick={onClose}>
            Save
          </button>
          <button className="px-4 py-2 mt-4 font-semibold border rounded text-primary border-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
    </div>
  </div>
);
