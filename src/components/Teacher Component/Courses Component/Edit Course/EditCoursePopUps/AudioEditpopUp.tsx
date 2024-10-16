import React from 'react';
// import Step7RigthModule from '../../Create Course Component/Step7RigthModule';
import AudioEditor from '../../Create Course Component/AudioEditor';




export const AudioLessonPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (

      
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-[90%] h-[90%] max-w-4xl p-6">
      <div className='flex'>
      <div>
      <div className='flex flex-col justify-between w-full gap-4'>
        <div className='space-y-4 w-[90%]'>
          <div>
            {/* <label className="font-semibold">Title</label> */}
            <input className='w-full py-2 rounded-md' type="text" placeholder='Lesson 1 Title' />
          </div>
          <div className='space-y-4'>
            <div className='mt-3 space-y-2'>
              <div className='flex items-center gap-3'>
                <input className='w-3 h-3 rounded-sm text-primary' type="checkbox" />
                <p className='text-sm text-[#7C7C7C]'>Promoted Content</p>
              </div>
              <div className='flex items-center gap-3'>
                <input className='w-3 h-3 rounded-sm text-primary' type="checkbox" />
                <p className='text-sm text-[#7C7C7C]'>Available for Free</p>
              </div>
            </div>
            <div className='space-y-1'>
              <h5>Content type</h5>
              <select className='w-full border-none rounded-md outline-none bg-cardBg'>
                <option value="">Audio Lesson</option>
                <option value="">Video Lesson</option>
              </select>
            </div>
            <div className='flex flex-col gap-1'>
              <label>Description</label> {/* Use the title prop here */}
              <textarea className='w-full border rounded-md'></textarea>
            </div>
          </div>
        </div>

        {/* Lesson File and Attachment Upload Sections */}
        <div className='space-y-4'>
          <div className='w-[100%]'>
            <label className='font-semibold'>Lesson File</label>
            <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
              {/* <p className="mb-14">Browse and choose the files you want to upload from your computer</p> */}
              <input type="file" />
              
              {/* <FileUpload onFileSelect={handleAudioUpload} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Uncomment these lines if you need the popups */}
      {/* {isLessonFilePopUpOpen && <UploadPopUp onClose={handleCloseLessonFilePopUp} />}
      {isAttachmentPopUpOpen && <UploadPopUp onClose={handleCloseAttachmentPopUp} />} */}
    </div>
      <AudioEditor/>
      </div>
    <div className='mt-4 space-x-4'>
      <button className='px-4 py-2 text-white transition rounded bg-primary hover:bg-primary-dark'>Save Change</button>
    <button
        className="px-4 py-2 text-white transition rounded bg-primary hover:bg-primary-dark"
        onClick={onClose}
      >
        Close
      </button>
    </div>
    </div>
  </div>
);
