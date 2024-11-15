import { useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiLoveSong } from "react-icons/gi";
import { IoVideocam } from "react-icons/io5";
import AddModuleBtns from './AddModuleBtns';


function Step6LeftSide() {
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full p-3">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-2xl font-semibold text-[#333]">Part 1</h1>
        <RiDeleteBinLine className="p-1 text-2xl text-red-500 border border-red-500 rounded-md" />
      </div>

      <div className="p-4 space-y-4">
        {/* Chapter Box with Dropdown Toggle */}
        <div 
          className="flex items-center justify-between p-2 px-6 border-l-4 cursor-pointer bg-neutral-50 border-primary"
          onClick={toggleDropdown}
        >
          <li className="flex items-center gap-2 list-none text-md text-pTag">
            Chapter 1
            {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </li>
          <IoIosCloseCircleOutline className="ml-2 text-lg text-red-500" />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="">
            <ul className="px-5 ">
              <div className='flex items-center justify-between mt-1 cursor-pointer hover:bg-gray-200'>
           <div className='flex items-center'>
           <GiLoveSong />
           <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">Audio</li>
           </div>
              <IoIosCloseCircleOutline className="ml-2 text-lg text-red-500" />
              </div>
              <div className='flex items-center justify-between cursor-pointer hover:bg-gray-200'>
           <div className='flex items-center'>
           <IoVideocam />
           <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">Video</li>
           </div>
              <IoIosCloseCircleOutline className="ml-2 text-lg text-red-500" />
              </div>
              <li className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200">Assignment</li>
              <li className="px-4 py-2 font-semibold cursor-pointer hover:bg-gray-200">Exam</li>
            </ul>
          </div>
        )}
         <div 
          className="flex items-center justify-between p-2 px-6 border-l-4 cursor-pointer bg-neutral-50 border-primary"
        >
          <li className="flex items-center gap-2 list-none text-md text-pTag">
            Exam 1
          </li>
          <IoIosCloseCircleOutline className="ml-2 text-lg text-red-500" />
        </div>
        <div 
          className="flex items-center justify-between p-2 px-6 border-l-4 cursor-pointer bg-neutral-50 border-primary"
        >
          <li className="flex items-center gap-2 list-none text-md text-pTag">
            Assignment 1
          </li>
          <IoIosCloseCircleOutline className="ml-2 text-lg text-red-500" />
        </div>
      </div>
      <AddModuleBtns/>
    </div>
  );
}

export default Step6LeftSide;
