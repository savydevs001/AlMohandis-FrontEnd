import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface AddModulePopupProps {
  onClose: () => void;
}

const AddModulePopup: React.FC<AddModulePopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="w-[90%] p-5 bg-white rounded-lg shadow-lg lg:w-1/3">
        <div className="flex items-center justify-end mb-4">
          <AiOutlineCloseCircle className="text-2xl text-red-600 cursor-pointer" onClick={onClose} />
        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-md" htmlFor="moduleTitle">Select type of Module</label>
            <select className='w-full rounded-md outline-none' name="" id="">
                    <option value="">Chapter</option>
                    <option value="">Exam</option>
                    <option value="">Assignment</option>
                    <option value="">Attachment</option>
                  </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-md" htmlFor="moduleDescription">Season</label>
            <select className='w-full rounded-md outline-none' name="" id="">
                    <option value="">Season 1</option>
                    <option value="">Season 2</option>
                    <option value="">Season 3</option>
                    <option value="">Season 4</option>
                  </select>
          </div>
          <div className='flex gap-4'>
          <button className="px-4 py-2 text-white rounded-lg bg-primary" type="submit">Add</button>
          <button onClick={onClose} className="px-4 py-2 text-white rounded-lg bg-primary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModulePopup;
