import { useState } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiLoveSong } from "react-icons/gi";
import { IoVideocam } from "react-icons/io5";
import AddModuleBtns from './AddModuleBtns';

interface Module {
  name: string;
  lessons?: { type: string; title: string }[]; // Optional lessons for Chapter modules
}

interface Part {
  name: string;
  modules: Module[];
}

interface Step6LeftSideProps {
  parts: Part[];
  onDeletePart: (partName: string) => void; // Function to handle part deletion
}

function Step6LeftSide({ parts, onDeletePart }: Step6LeftSideProps) {
  return (
    <div className="w-full border-2 border-purple-600 p-3">
      {parts.map((part, partIndex) => (
        <div key={partIndex}>
          <div className="flex items-center justify-between px-4">
            <h1 className="text-2xl font-semibold text-[#333]">{part.name}</h1>
            <RiDeleteBinLine 
              className="p-1 text-2xl text-red-500 border border-red-500 rounded-md" 
              onClick={() => onDeletePart(part.name)} // Call delete function
            />
          </div>
          <div className="p-4 space-y-4">
            {part.modules.map((module, moduleIndex) => {
              const [isDropdownOpen, setIsDropdownOpen] = useState(false);
              const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

              return (
                <div key={moduleIndex}>
                  <div 
                    className="flex items-center justify-between p-2 px-6 border-l-4 cursor-pointer bg-neutral-50 border-primary"
                    onClick={module.name === 'Chapter' ? toggleDropdown : undefined}
                  >
                    <li className="flex items-center gap-2 list-none text-md text-pTag">
                      {module.name} {module.name === 'Chapter' && (isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                    </li>
                    <IoIosCloseCircleOutline className="ml-2 text-lg text-red-500" />
                  </div>

                  {/* Dropdown Menu for Chapter */}
                  {isDropdownOpen && module.name === 'Chapter' && (
                    <div className="">
                      <ul className="px-5 ">
                        {module.lessons && module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className='flex items-center justify-between cursor-pointer hover:bg-gray-200'>
                            <div className='flex items-center'>
                              {lesson.type === 'Audio' ? <GiLoveSong /> : <IoVideocam />}
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">{lesson.title}</li>
                            </div>
                            <IoIosCloseCircleOutline className="ml-2 text-lg text-red-500" />
                          </div>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <AddModuleBtns />
    </div>
  );
}

export default Step6LeftSide;