import React from 'react';
import book from '../../../assets/book.webp';
import { NavLink } from 'react-router-dom';

interface LiveLectureCardProps {
  showButton?: boolean; // Optional prop to control button visibility
}

const LiveLectureCards: React.FC<LiveLectureCardProps> = ({ showButton = true }) => {
  return (
    <NavLink to='ViewLectures'>
    <div className="py-2">
      <div className="p-5 mt-8 transition-shadow duration-200 bg-white border rounded-lg shadow-sm hover:shadow-md">
        <img className="rounded-lg" src={book} alt="Lecture" />
        <h1 className="mt-2 mb-1 text-2xl font-semibold">Title</h1>
        <p className="text-md text-pTag">02:00</p>
        <p className="text-md text-pTag">78484 people watched</p>

        {/* Conditionally render the button based on the showButton prop */}
        {showButton && (
          <div className="flex items-center gap-2 mt-2">
            <button className="w-full py-1 font-semibold border rounded-md text-md text-primary border-primary">
              Join Now
            </button>
          </div>
        )}
      </div>
    </div>
    </NavLink>
  );
}

export default LiveLectureCards;



