import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface UploadPopupProps {
  onClose: () => void;
  // onNewUploadClick: () => void;
  onFileSelect?: (file: File | null) => void;
}

const UploadPopup: React.FC<UploadPopupProps> = ({ onClose, onFileSelect }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    console.log("Selected file:", file);
    onFileSelect && onFileSelect(file);
  };

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col bg-white items-center p-6 mt-6 space-y-6 border rounded-lg shadow-md lg:w-[30%] w-[90%]'>
        <div className='flex justify-end w-full text-xl ' onClick={onClose}>
          <AiOutlineCloseCircle className='text-red-500' />
        </div>
        <label htmlFor="moduleType" className='font-semibold'>Select Type of Module</label>
        <select id="moduleType" className='w-[90%] p-2 border rounded-lg outline-none'>
          <option value="Vdocipher">Vdocipher</option>
          <option value="Youtube">Youtube</option>
        </select>

        <div className='w-full p-4 space-y-4'>
          <h4 className='text-lg font-semibold text-center'>Upload File from your Device</h4>
          <div className='w-full h-40 p-4 space-y-2 border-2 border-dashed rounded-lg border-neutral-300'>
            <input type='file' className='text-center' onChange={handleChange}/>
          </div>
          <button
            className='px-3 py-1 mt-4 text-sm font-semibold text-white rounded-full bg-primary hover:bg-primary-dark'
            // onClick={onNewUploadClick} // Opens file selection dialog
          >
            New Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPopup;
