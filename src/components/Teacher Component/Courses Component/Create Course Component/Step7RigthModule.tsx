// Step7RigthModule.tsx
import React, { useState } from "react";
import UploadPopUp from './UploadPopup'; 

interface Step7RigthModuleProps {
  title: string; // New prop for title
}

const Step7RigthModule: React.FC<Step7RigthModuleProps> = ({ title }) => {
  const [isLessonFilePopUpOpen, setIsLessonFilePopUpOpen] = useState(false);
  const [isAttachmentPopUpOpen, setIsAttachmentPopUpOpen] = useState(false);

  const handleOpenLessonFilePopUp = () => setIsLessonFilePopUpOpen(true);
  const handleCloseLessonFilePopUp = () => setIsLessonFilePopUpOpen(false);
    
  const handleOpenAttachmentPopUp = () => setIsAttachmentPopUpOpen(true);
  const handleCloseAttachmentPopUp = () => setIsAttachmentPopUpOpen(false);

  return (
    <div>
       <div className='flex justify-between w-full gap-4'>
            <div className='space-y-4 w-[90%]'>
             <div>
             <label className="font-semibold" htmlFor="">Title</label>
             <input className='w-full py-2 rounded-md' type="text" placeholder='Lesson 1 Title' />
             </div>
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
                  <label htmlFor="">{title}</label> {/* Use the title prop here */}
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
          {isLessonFilePopUpOpen && <UploadPopUp onClose={handleCloseLessonFilePopUp} />}
          {isAttachmentPopUpOpen && <UploadPopUp onClose={handleCloseAttachmentPopUp} />}
    </div>
  );
};

export default Step7RigthModule;
