import React from 'react';
import ProgressBar from '../StudentDashboard/ProgressBar';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

// Define the props type for the component
interface CourseCardProps {
  img: string;
  courseTitle: string;
  instructorName: string;
  progress: number;
  courseId: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ img, courseTitle, instructorName, progress,courseId }) => {
  return (
    <div className="flex flex-wrap p-3 bg-white shadow-lg rounded-xl lg:justify-between">
      <div className='lg:w-[12%] w-[25%]'>
        <img className='rounded-lg' src={img} alt={`${courseTitle} Thumbnail`} />
      </div>
      <div className='lg:w-[65%] w-[75%] lg:border-r-2 px-4 border-l-black space-y-2'>
        <h1 className='text-xl font-semibold'>{courseTitle}</h1>
        <h1 className='text-xl text-gray-600'>{instructorName}</h1>
        <ProgressBar progress={progress} />
      </div>
      <div className='flex items-center mt-3 lg:mt-0'>
    <NavLink to={`${courseId}`}>
    <button className='flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white rounded-md bg-primary'>
          Go to Courses
          <FaArrowRightLong />
        </button>
    </NavLink>
      </div>
    </div>
  );
};

export default CourseCard;
