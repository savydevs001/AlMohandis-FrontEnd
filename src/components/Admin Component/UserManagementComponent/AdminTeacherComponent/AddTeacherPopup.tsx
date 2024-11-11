import React from 'react';

interface AddTeacherPopupProps {
  onClose: () => void; // Prop to handle closing the popup
}

const AddTeacherPopup: React.FC<AddTeacherPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md lg:w-[35%] w-[90%]">
        <form className='space-y-2'>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Full Name</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='John Daniel' />
         </div>
         <div className='flex items-center'>
            <div className='w-[25%]'>
            <label className='w-[100%] font-semibold' htmlFor="">ID</label>
            <p className='text-pTag'>(auto)</p>
            </div>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='21-CS-38' />
         </div>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Gender</label>
            <div className='flex items-center gap-4'>
<p className='px-3 py-1 text-white rounded-full bg-primary'>Female</p>
<p className='px-3 py-1 text-white rounded-full bg-pTag'>Male</p>
            </div>
         </div>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Joining</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='28-02-2023' />
         </div>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Email</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='hello@gmail.com' />
         </div>
         <div className='flex items-center'>
            <div className='w-[25%]'>
            <label className='w-[100%] font-semibold' htmlFor="">Password</label>
            <p className='text-pTag'>(auto)</p>
            </div>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='1896587' />
         </div>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Share Password</label>
            <div className='flex items-center gap-4'>
<p className='px-4 py-1 border rounded-lg text-primary border-primary'>SMS</p>
<p className='px-4 py-1 border rounded-lg text-primary border-primary'>Whatsapp</p>
            </div>
         </div>

         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Date of Birth</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='24-02-2005' />
         </div>

         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Phone</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='+923897902' />
         </div>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Department</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='Computer Science' />
         </div>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Level</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='Professor' />
         </div>
         <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="">Experience</label>
            <input className='w-[70%] rounded-md py-1 border-slate-300' type="text" placeholder='4 Year' />
         </div>


         
          {/* Add more form fields as needed */}
          <div className="flex justify-center space-x-4">
          <button
              type="submit"
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose} // Close the popup
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Cancel
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPopup;
