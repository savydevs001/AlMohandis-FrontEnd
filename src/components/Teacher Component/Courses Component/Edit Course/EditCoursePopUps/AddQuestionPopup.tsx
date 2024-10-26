import React from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";

export const AddQuestionPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleAddQuestion = () => {
    // Add the logic to store or handle the question here
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="lg:w-[60%] w-[90%] p-6 space-y-4 bg-white rounded-lg shadow-lg h-fit">
        <div className="flex flex-col gap-4">
          <div className='flex flex-col w-full gap-6 lg:flex-row'>
            <div className=' w-full lg:w-[40%] bg-white shadow-2xl p-2 rounded-md space-y-2'>
              <h5 className='w-full px-4 py-2 font-semibold border-2 rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
              <h5 className='w-full px-4 py-2 font-semibold border rounded-md bg-green-50 border-primary text-primary'>Question 1</h5>
            </div>
            <div className='w-full lg:w-[60%] space-y-4'>
              <div className='flex items-center justify-between border border-[#6666] p-4 rounded-lg'>
                <div>
                  <h5>What is the first Question</h5>
                  <p className='text-[#999] text-sm leading-0'>Simple Note about the question or clarification</p>
                </div>
                <div>
                  <IoIosInformationCircleOutline />
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <input className='w-[40%] rounded-lg outline-none' type="text" placeholder='Option 1' />
                <input className='w-[40%] rounded-lg outline-none' type="text" placeholder='Option 2' />
              </div>
              <div className='flex items-center gap-3'>
                <input className='w-[40%] rounded-lg outline-none' type="text" placeholder='Option 1' />
                <input className='w-[40%] rounded-lg outline-none' type="text" placeholder='Option 2' />
              </div>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="">Correct Answer</label>
                <input className='w-[40%] rounded-lg outline-none' type="text" placeholder='Correct Answer' />
              </div>
              <div className="mt-4 space-x-4">
                <button
                  className="px-3 py-1 text-white rounded bg-primary"
                  onClick={handleAddQuestion}
                >
                  Save Change
                </button>
                <button
                  className="px-3 py-1 text-white border rounded bg-primary"
                  onClick={onClose} // Close the entire form
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
