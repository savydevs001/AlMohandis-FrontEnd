import React from 'react';
import { LuStar } from "react-icons/lu";
import BuyCourseHours from './BuyCourseHours';
import SeasonPrice from './SeasonPrice';
import { FaArrowRightLong } from "react-icons/fa6";

const VideoEmbed: React.FC = () => {
  return (
   <div className='w-full p-6 space-y-5 bg-white shadow-2xl rounded-2xl'>
      <div className='w-full '>
      <iframe
   className='w-[100%] h-[60%] rounded-2xl'

      src="https://www.youtube.com/embed/onj8Y4Oavjo?si=Oinx0iubNvlPrlFS"
      title="YouTube video player"
      frameBorder="0" // Camel case for React compatibility
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen // Use as a boolean attribute in JSX
    ></iframe>
      </div>
      <div className='flex items-center justify-between '>
            <div className='flex items-center gap-2 text-2xl'>
            <LuStar className='text-secondary' />
            <LuStar  className='text-secondary' />
            <LuStar className='text-secondary' /> <LuStar className=' text-secondary' />
            </div>
            <h3 className='text-xl'>768 Reviews</h3>
      </div>
      <div className='space-y-4'>
        <BuyCourseHours/>
        <div className='space-y-2'>
        <SeasonPrice title="Season 1: Season 1 Name" price="$75" />
        <SeasonPrice title="Season 2: Season 1 Name" price="$75" />
        <SeasonPrice title="Complete Course" price="$150" />
        </div>
      </div>
     <div className='flex items-center justify-end'>
     <button className='flex items-center gap-4 px-4 py-2 font-semibold text-white rounded-md bg-primary'>Buy Now
      <FaArrowRightLong />
      </button>
     </div>
   </div>
  );
};

export default VideoEmbed;

