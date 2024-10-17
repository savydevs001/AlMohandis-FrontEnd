// AddModulePopUp.js
import React from 'react';

interface AddAnotherPopUpProps {
  onClose: () => void; // Function to close the popup
}

const AddAnotherPopUp: React.FC<AddAnotherPopUpProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-md shadow-lg w-[30%] space-y-4">
      <div className='space-y-2'>
              <h5 className='font-semibold'>Chapters </h5>
              <select className='w-full border-none rounded-md outline-none bg-cardBg'>
                <option value="">Chaptre 1</option>
                <option value="">Chaptre 2</option>
              </select>
            </div>
            <div className='space-y-2'>
              <h5 className='font-semibold'>Content type</h5>
              <select className='w-full border-none rounded-md outline-none bg-cardBg'>
                <option value="">Audio Lesson</option>
                <option value="">Video Lesson</option>
              </select>
            </div>
        <div className="flex justify-end gap-4 mt-8">
          <button className='px-4 py-2 text-white rounded-md bg-primary'>Save</button>
          <button className="px-4 py-2 text-white rounded-md bg-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAnotherPopUp;
