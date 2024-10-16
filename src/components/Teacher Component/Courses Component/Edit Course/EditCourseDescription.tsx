import React from 'react';

// Define the props interface
interface EditCourseDescriptionProps {
  placeholder: string;
  title: string;
}

// Use the defined props interface in the function
const EditCourseDescription: React.FC<EditCourseDescriptionProps> = ({ placeholder, title }) => {
  return (
    <div className='flex flex-col w-[85%] space-y-1'>
      <label className='flex flex-col gap-1 font-medium text-md'>{title}</label>
     <textarea name="" id="" placeholder={placeholder} cols={40} rows={3} className='rounded-md bg-white border-[#6666]'></textarea>
    </div>
  );
}

export default EditCourseDescription;
