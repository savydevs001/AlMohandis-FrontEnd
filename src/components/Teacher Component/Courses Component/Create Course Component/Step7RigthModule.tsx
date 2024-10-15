// Step7RigthModule.tsx
import React, { useState, useEffect, useRef } from "react";
import FileUpload from "./FileUpload"; 

interface Step7RigthModuleProps {
  title: string; // New prop for title
}

const Step7RigthModule: React.FC<Step7RigthModuleProps> = ({ title }) => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const waveSurfer = useRef<any>(null); // Adjust the type as per your waveSurfer instance

  // Load the audio file when it changes
  useEffect(() => {
    if (audioFile && waveSurfer.current) {
      const objectUrl = URL.createObjectURL(audioFile);
      waveSurfer.current.load(objectUrl);
      return () => URL.revokeObjectURL(objectUrl); // Clean up the URL
    }
  }, [audioFile]);

  const handleAudioUpload = (file: File | null) => {
    setAudioFile(file); // Set the uploaded audio file
  };

  return (
    <div>
      <div className='flex justify-between w-full gap-4'>
        <div className='space-y-4 w-[90%]'>
          <div>
            <label className="font-semibold">Title</label>
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
              <select className='w-full border-none rounded-md outline-none'>
                <option value="">Audio Lesson</option>
                <option value="">Video Lesson</option>
              </select>
            </div>
            <div className='flex flex-col gap-1'>
              <label>{title}</label> {/* Use the title prop here */}
              <textarea className='w-full border rounded-md'></textarea>
            </div>
          </div>
        </div>

        {/* Lesson File and Attachment Upload Sections */}
        <div className='space-y-4'>
          <div className='w-[100%]'>
            <label className='font-semibold'>Lesson File</label>
            <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
              <p className="mb-14">Browse and choose the files you want to upload from your computer</p>
              
              {/* <FileUpload onFileSelect={handleAudioUpload} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Uncomment these lines if you need the popups */}
      {/* {isLessonFilePopUpOpen && <UploadPopUp onClose={handleCloseLessonFilePopUp} />}
      {isAttachmentPopUpOpen && <UploadPopUp onClose={handleCloseAttachmentPopUp} />} */}
    </div>
  );
};

export default Step7RigthModule;
