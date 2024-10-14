import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface UploadPopupProps {
  onClose: () => void;
}

const UploadPopup: React.FC<UploadPopupProps> = ({ onClose }) => {
  return (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col bg-white items-center p-6 mt-6 space-y-6 border rounded-lg shadow-md w-[30%]'>
       <div className='flex justify-end w-full text-xl ' onClick={onClose}>
       <AiOutlineCloseCircle className='text-red-500' />
       </div>
       <label htmlFor="moduleType" className='font-semibold'>Select Type of Module</label>
       <select
         id="moduleType"
         className='w-[90%] p-2 border rounded-lg outline-none'
       >
         <option value="Vdocipher">Vdocipher</option>
         <option value="Youtube">Youtube</option>
       </select>
 
       <div className='w-full p-4 space-y-4'>
         <h4 className='text-lg font-semibold text-center'>
           Upload File from your Device
         </h4>
         <div className='w-full h-40 p-4 space-y-2 border-2 border-dashed rounded-lg border-neutral-300'>
             <input type="file" className='w-full border-2 display-none bg-none '/>
           <p className='text-center'>
             Click to browse or drag and drop your files
           </p>
         </div>
         <button
           className='px-3 py-1 mt-4 ml-20 text-sm font-semibold text-white rounded-full bg-primary hover:bg-primary-dark'
           
         >
           New Upload
         </button>
       </div>
 
     </div>
  </div>
  );
};

export default UploadPopup;
