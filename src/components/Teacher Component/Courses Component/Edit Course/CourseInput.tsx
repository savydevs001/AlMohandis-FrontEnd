import React from 'react';

// Define the props interface
interface CourseInputProps {
  placeholder: string;
  title: string;
}

// Use the defined props interface in the function
const CourseInput: React.FC<CourseInputProps> = ({ placeholder, title }) => {
  return (
    <div className='flex flex-col w-full space-y-1'>
      <label className='font-medium text-md'>{title}</label>
      <input className='rounded-md text-md border-[#7777]' type="text" placeholder={placeholder} />
    </div>
  );
}

export default CourseInput;
