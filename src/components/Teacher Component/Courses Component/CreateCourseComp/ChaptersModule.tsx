import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdAudiotrack } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";

interface ChapterProps {
  chapterName: string;
  onRemove: () => void;
}

const Chapter: React.FC<ChapterProps> = ({ chapterName, onRemove }) => {
  const [isChapterOpen, setIsChapterOpen] = useState(false);

  const toggleChapter = () => setIsChapterOpen((prev) => !prev);

  return (
    <div>
      <p className='flex justify-between p-2 border-l-4 mt-4 itemc-center bg-white border-l-primary text-[#7C7C7C]'>
        <li>{chapterName}</li>
        <div className='flex items-center gap-2'>
          <span onClick={toggleChapter} className='cursor-pointer'>
            {isChapterOpen ? (
              <IoIosArrowUp className='text-[#7C7C7C] text-lg' />
            ) : (
              <IoIosArrowDown className='text-[#7C7C7C] text-lg' />
            )}
          </span>
          <AiOutlineCloseCircle className='text-red-500' onClick={onRemove} />
        </div>
      </p>
      
      {isChapterOpen && (
        <div className='pl-4'>
          {/* Chapter Lessons */}
          <div className='flex items-center justify-between gap-3 mt-2'>
            <div className='flex items-center gap-1'>
              <MdAudiotrack />
              <p className='text-[#7C7C7C]'>Lesson 1</p>
            </div>
            <AiOutlineCloseCircle className='text-red-500' />
          </div>
          <div className='flex items-center justify-between gap-3 mt-2'>
            <div className='flex items-center gap-1'>
              <IoIosVideocam />
              <p className='text-[#7C7C7C]'>Lesson 2</p>
            </div>
            <AiOutlineCloseCircle className='text-red-500' />
          </div>
          <p className='flex justify-between p-2 mt-4 itemc-center text-[#7C7C7C]'>
            <li>Assignment 1</li>
            <AiOutlineCloseCircle className='text-red-500' />
          </p>
          <p className='flex justify-between p-2 mt-1 itemc-center text-[#7C7C7C]'>
            <li>Exam 1</li>
            <AiOutlineCloseCircle className='text-red-500' />
          </p>
        </div>
      )}
    </div>
  );
};

export default Chapter;
