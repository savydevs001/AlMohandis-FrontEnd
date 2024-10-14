import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { MdAudiotrack } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";
import ModulePopUp from './AddModulePopUp'; // Module popup
import SeasonPopUp from './SeasonPopUp';    // Season popup
import UploadPopUp from './UploadPopup';    // Upload popup

const Step7: React.FC = () => {
  // State to handle Module popup visibility
  const [isModulePopUpOpen, setIsModulePopUpOpen] = useState(false);

  // State to handle Season popup visibility
  const [isSeasonPopUpOpen, setIsSeasonPopUpOpen] = useState(false);

  // State to handle Lesson File popup visibility
  const [isLessonFilePopUpOpen, setIsLessonFilePopUpOpen] = useState(false);

  // State to handle Attachment popup visibility
  const [isAttachmentPopUpOpen, setIsAttachmentPopUpOpen] = useState(false);

  // Functions to open/close Module popup
  const handleOpenModulePopUp = () => setIsModulePopUpOpen(true);
  const handleCloseModulePopUp = () => setIsModulePopUpOpen(false);

  // Functions to open/close Season popup
  const handleOpenSeasonPopUp = () => setIsSeasonPopUpOpen(true);
  const handleCloseSeasonPopUp = () => setIsSeasonPopUpOpen(false);

  // Functions to open/close Lesson File popup
  const handleOpenLessonFilePopUp = () => setIsLessonFilePopUpOpen(true);
  const handleCloseLessonFilePopUp = () => setIsLessonFilePopUpOpen(false);

  // Functions to open/close Attachment popup
  const handleOpenAttachmentPopUp = () => setIsAttachmentPopUpOpen(true);
  const handleCloseAttachmentPopUp = () => setIsAttachmentPopUpOpen(false);

  return (
    <div className='h-screen mt-12'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
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
              <div className='flex items-center justify-between gap-3 px-4 mt-2'>
                <div className='flex items-center gap-1'>
                  <RiPagesLine />
                  <p className='text-[#7C7C7C]'>Assignment</p>
                </div>
                <AiOutlineCloseCircle className='text-red-500' />
              </div>
              <div className='flex items-center justify-between gap-3 px-4 mt-2'>
                <div className='flex items-center gap-1'>
                  <GrAttachment />
                  <p className='text-[#7C7C7C]'>Attachment</p>
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

        {/* Right section: Lesson details */}
        <div className='flex-1 p-4 border border-neutral-300'>
          <div className='flex justify-between w-full gap-4'>
            <div className='space-y-4 w-[90%]'>
              <input className='w-full py-2 rounded-md' type="text" placeholder='Lesson 1 Title' />
              <div className='space-y-4'>
                <div className='mt-3 space-y-2'>
                  <div className='flex items-center gap-3'>
                    <input className='w-3 h-3 rounded-sm text-primary' type="checkBox" />
                    <p className='text-sm text-[#7C7C7C]'>Promoted Content</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <input className='w-3 h-3 rounded-sm text-primary' type="checkBox" />
                    <p className='text-sm text-[#7C7C7C]'>Available for Free </p>
                  </div>
                </div>
                <div className='space-y-1'>
                  <h5>Content type </h5>
                  <select className='w-full border-none rounded-md outline-none' name="" id="">
                    <option value="">Audio Lesson</option>
                    <option value="">Video Lesson</option>
                    <option value="">Assignment</option>
                    <option value="">Attachment</option>
                  </select>
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="">Description</label>
                  <textarea className='w-full border rounded-md' name="" id=""></textarea>
                </div>
              </div>
            </div>

            {/* Lesson File and Attachment Upload Sections */}
            <div className='space-y-4'>
              <div className='w-[100%]'>
                <label className='font-semibold' htmlFor="">Lesson File</label>
                <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
                  <p>Browse and chose the files you want to upload from your computer</p>
                  <button onClick={handleOpenLessonFilePopUp} className='px-2 py-0 text-xl font-semibold text-white border rounded-md bg-primary'>+</button>
                </div>
              </div>
              <div className='w-[100%]'>
                <label className='font-semibold' htmlFor="">Attachment</label>
                <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
                  <p>Browse and chose the files you want to upload from your computer</p>
                  <button className='px-2 py-0 text-xl font-semibold text-white border rounded-md bg-primary' onClick={handleOpenAttachmentPopUp}>+ </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Pop-up */}
      {isModulePopUpOpen && <ModulePopUp onClose={handleCloseModulePopUp} />}

      {/* Season Pop-up */}
      {isSeasonPopUpOpen && <SeasonPopUp onClose={handleCloseSeasonPopUp} />}

      {/* Lesson File Pop-up */}
      {isLessonFilePopUpOpen && <UploadPopUp onClose={handleCloseLessonFilePopUp} />}

      {/* Attachment Pop-up */}
      {isAttachmentPopUpOpen && <UploadPopUp onClose={handleCloseAttachmentPopUp} />}
    </div>
  );
};

export default Step7;
