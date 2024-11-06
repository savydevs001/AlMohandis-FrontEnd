import React, { useRef, useState } from 'react';
import { IoIosLink } from 'react-icons/io';
import ShowLessonHeader from '../../ShowLessonHeader';

const SingleAssignment: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

//   const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to trigger file input dialog
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
    <div className="flex-1 p-5 space-y-5">
      <ShowLessonHeader/>
      <div className="flex items-start justify-between">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Assignment 1</h1>
          <p className="w-[100%] font-sans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores quo vel fugit totam, voluptatibus ipsa? 
            Unde nemo veniam ex doloremque, sint consequatur optio impedit beatae aperiam ullam quas provident. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quis quia blanditiis hic nam et laboriosam 
            consequatur quo, ducimus voluptatibus dicta facere aperiam, esse reprehenderit suscipit, vero neque sed cumque?
          </p>
        </div>
 
      </div>
      <div className="flex flex-col space-y-1">
      <label className="font-semibold text-md" htmlFor="">
        Assignment
      </label>
      
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={(e) => console.log(e.target.files)} // Handle file selection here
      />
      
      {/* Custom button */}
      <button
        onClick={handleFileClick}
        className="w-full py-1 border rounded-lg border-pTag hover:bg-gray-300"
      >
        Choose File
      </button>
    </div>

      <div className="space-y-2">
            <h4 className='font-semibold'>Your Solution</h4>
        {/* Show the file name if a file is selected */}
        {fileName && (
          <div className="w-full p-2 text-xs text-gray-700 border rounded-lg ">
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
     
      <button className="px-4 py-2 font-semibold text-white rounded-md bg-primary">Submit</button>
    </div>
  );
};

export default SingleAssignment;
