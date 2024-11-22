// CreateTicketPopup.tsx
import React from 'react';

interface CreateTicketPopupProps {
  onClose: () => void;
}

const CreateTicketPopup: React.FC<CreateTicketPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="lg:w-[40%] w-[90%] p-6 bg-white rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Create New Ticket</h2>
        <form className='space-y-3'>
          {/* Add form fields here */}
          <div className="space-y-1">
            <label className="font-semibold">Subject</label>
            <input
              type="text"
              className="w-full px-3 py-1 rounded-md border-slate-300"
              placeholder="Write Subject of Ticket"
            />
          </div>
         <div className='flex items-center w-full gap-4'>
         <div className='flex flex-col space-y-1 w-[50%]'>
            <label htmlFor="" className='font-semibold'>Category</label>
            <select  className='rounded-lg border-slate-300' name="" id="">
                  <option value="">Select</option>
                  <option value="">Item 1</option>
                  <option value="">Item 2</option>
                  <option value="">Item 3</option>
                  <option value="">Item 4</option>
            </select>
          </div>
          <div className='flex flex-col space-y-1 w-[50%]'>
            <label htmlFor="" className='font-semibold'>Priority Level</label>
            <select className='rounded-lg border-slate-300' name="" id="">
                  <option value="">Select</option>
                  <option value="">Item 1</option>
                  <option value="">Item 2</option>
                  <option value="">Item 3</option>
                  <option value="">Item 4</option>
            </select>
          </div>
         </div>
         <div className='flex flex-col space-y-1'>
         <label className="font-semibold">Description</label>
         <textarea rows={3} className='rounded-lg border-slate-300' name="" id="" placeholder='Provide Supportive details or context'></textarea>
         </div>
          <div className="flex justify-end mt-4 space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketPopup;
