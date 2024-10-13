import React from 'react';
import book from '../../../assets/book.webp';
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

// Define the props type
interface CoursesByMeCardProps {
  name: string;
  published?: string;
  students?: string;
  button?: string;
  showButton: boolean; // Make sure this is a boolean
}

const CoursesByMeCard: React.FC<CoursesByMeCardProps> = ({ name, published, students, button, showButton }) => {
  return (
    <div>
      <div className="p-5 mt-8 rounded-lg w-72 lg:w-56 bg-cardBg">
        <img className="rounded-md" src={book} alt="" />
        <h1 className="mt-2 mb-1 text-2xl font-semibold">{name}</h1>
        
        {/* Conditionally show "Published" only if showButton is true */}
        { published && (
          <p className="text-sm text-[#666]">
            {published}
            <span className="px-2 font-semibold text-black text-md">20-4-2024</span>
          </p>
        )}
        
        {/* Students will always be shown */}
        {students && (
          <p className="text-sm text-[#666]">
            {students}
            <span className="px-2 font-semibold text-black text-md">23,7847</span>
          </p>
        )}

        <div className="flex items-center gap-2 mt-2">
          {/* Conditionally render the "Publish" button */}
          {showButton && (
            <button className="px-8 py-1 text-sm text-white rounded-md bg-primary">
              {button}
            </button>
          )}

          <GrEdit className="p-1 text-2xl text-green-800 border border-green-800 rounded-md" />
          <RiDeleteBin6Line className="p-1 text-2xl text-red-600 border border-red-600 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default CoursesByMeCard;
