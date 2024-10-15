import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { MdAudiotrack } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import ModulePopUp from './AddModulePopUp'; 
import SeasonPopUp from './SeasonPopUp';
import { useState } from 'react';

function Step7Season1Module() {
      const [isModulePopUpOpen, setIsModulePopUpOpen] = useState(false);
      const [isSeasonPopUpOpen, setIsSeasonPopUpOpen] = useState(false);

      const handleOpenModulePopUp = () => setIsModulePopUpOpen(true);
      const handleCloseModulePopUp = () => setIsModulePopUpOpen(false);
      const handleCloseSeasonPopUp = () => setIsSeasonPopUpOpen(false);
      const handleOpenSeasonPopUp = () => setIsSeasonPopUpOpen(true);
  return (
    <div>
       <div className=''>
          {/* Left section: Season and Chapters */}
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-semibold'>Season 1</h3>
            <RiDeleteBin6Line className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm" />
          </div>

          <div>
            <NavLink className='flex justify-between p-2 border-l-4 mt-4 itemc-center bg-white border-l-primary text-[#7C7C7C]' to={'/teacher/courses/create/step8'}>
              <li>Chapter 1</li>
              <AiOutlineCloseCircle className='text-red-500' />
            </NavLink>
            {/* Chapter Lessons */}
            <div>
              <div className='flex items-center justify-between gap-3 px-4 mt-2'>
                <div className='flex items-center gap-1'>
                  <MdAudiotrack />
                  <p className='text-[#7C7C7C]'>Lesson1</p>
                </div>
                <AiOutlineCloseCircle className='text-red-500' />
              </div>
              <div className='flex items-center justify-between gap-3 px-4 mt-2'>
                <div className='flex items-center gap-1'>
                  <IoIosVideocam />
                  <p className='text-[#7C7C7C]'>Lesson2</p>
                </div>
                <AiOutlineCloseCircle className='text-red-500' />
              </div>
              <NavLink className='flex justify-between p-2  mt-4 itemc-center text-[#7C7C7C]' to={'/teacher/courses/create/step8'}>
              <li>Assgnment 1</li>
              <AiOutlineCloseCircle className='text-red-500' />
            </NavLink>
              <NavLink className='flex justify-between p-2 mt-1 itemc-center text-[#7C7C7C]' to={'/teacher/courses/create/step8'}>
              <li>Exam 1</li>
              <AiOutlineCloseCircle className='text-red-500' />
            </NavLink>
            </div>

            {/* Add Module and Season Buttons */}
            <div className='mt-4 space-y-2'>
              <button onClick={handleOpenModulePopUp} className='px-3 py-2 font-semibold border rounded-lg text-md text-primary border-primary'>
                Add Module <span className='px-2 text-md'>+</span>
              </button>
              <button onClick={handleOpenSeasonPopUp} className='px-3 py-2 font-semibold text-white border-2 rounded-lg bg-primary'>
                Add Season <span className='px-2 text-lg'>+</span>
              </button>
            </div>
          </div>
        </div>
        {isModulePopUpOpen && <ModulePopUp onClose={handleCloseModulePopUp
            
        } />}
           {isSeasonPopUpOpen && <SeasonPopUp onClose={handleCloseSeasonPopUp} />}
    </div>
  )
}

export default Step7Season1Module
