import React, { useState } from 'react';
import { IoVideocam } from "react-icons/io5";

type ModuleProps = {
  title: string;
  lessonCount: number;
  lessons: string[];
  seasonName: string;
};

const ModuleDropdown: React.FC<ModuleProps> = ({ title, lessonCount, lessons,seasonName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full my-4">
      <h2 className='mb-4 text-xl font-semibold'>{seasonName}</h2>
      {/* Module header that toggles the dropdown */}
      <div
        className={`flex items-center justify-between p-3 font-semibold rounded-md cursor-pointer 
          ${isOpen ? 'bg-primary text-white' : 'bg-white text-black border border-[#777]'}`}
        onClick={toggleDropdown}
      >
        <span>{title}</span>
        <span>{lessonCount} Lessons</span>
      </div>

      {/* Lesson dropdown, only visible when isOpen is true */}
      {isOpen && (
        <div className="bg-gray-100 border border-t-0 border-black rounded-b-md">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 px-4 text-gray-700"
            >
              <span>{lesson}</span>
              <span className="text-md">
                {index % 2 === 0 ? '🎵' : <IoVideocam />}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleDropdown;
