import React, { useRef, useState } from 'react';
import { IoIosLink } from 'react-icons/io';
import DashBoardHeader from '../../../TeacherComponent/DashboardComponent/DashBoardHeader';


const SubmitedAssignmentView: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileClick = () => {
      fileInputRef.current?.click();
    };
  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex-1 space-y-5">
       <div className="flex items-center justify-between gap-6 lg:gap-0">
            <h1 className="text-2xl font-semibold">Assignment</h1>
            <DashBoardHeader/>
      </div>
      <div className="flex items-start justify-between mt-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Assignment 1</h1>
      <div className='w-full'>
      <p className="w-[60%] font-sans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores quo vel fugit totam, voluptatibus ipsa? 
            Unde nemo veniam ex doloremque, sint consequatur optio impedit beatae aperiam ullam quas provident. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quis quia blanditiis hic nam et laboriosam 
            consequatur quo, ducimus voluptatibus dicta facere aperiam, esse reprehenderit suscipit, vero neque sed cumque?
          </p>
          
      </div>
        </div>
        <p className="text-xs text-pTag w-[60%]">Submitted on 28-02-2024</p>
      </div>

      <div className="mt-6 space-y-2">
        <h5 className="text-sm font-semibold">Question 1</h5>
        <p className="text-xs w-[60%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis laboriosam est nobis ipsa totam unde 
          consequatur dolore ipsam beatae ipsum!?
        </p>
      </div>
      <div className="flex flex-col space-y-1 w-[60%]">
        <label className="font-semibold text-md" htmlFor="">
          Assignment
        </label>
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {/* Custom button */}
        <button
          onClick={handleFileClick}
          className="w-full py-1 border rounded-lg border-pTag hover:bg-gray-300"
        >
          Choose Filea
        </button>
      </div>
      <div className="space-y-2">
        {/* Show the file name if a file is selected */}
        {fileName && (
          <div className="w-[60%] border border-BgCard p-2 rounded text-xs text-gray-700">
            Selected file: {fileName}
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef} // Attach the ref to the file input
          className="hidden" // Hide the input element
          onChange={handleFileChange} // Trigger on file selection
        />
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleIconClick}>
          <IoIosLink />
          <p className="text-sm text-primary">Add your work</p>
        </div>
      </div>
      <div className='flex flex-col space-y-1'>
        <label className='text-sm font-semibold' htmlFor="">Add Comment</label>
        <input className='w-[60%] py-1 rounded-lg border-pTag ' type="text" placeholder='Add Text' />
      </div>
    </div>
  );
};

export default SubmitedAssignmentView;


;