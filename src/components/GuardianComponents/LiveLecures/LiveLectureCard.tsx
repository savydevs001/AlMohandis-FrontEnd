import React from 'react';
import book from '../../../assets/book.webp';

interface LiveLectureCardProps {
  showButton?: boolean; // Optional prop to control button visibility
}

const LiveLectureCard: React.FC<LiveLectureCardProps> = ({ showButton = true }) => {
  return (
    <div className="py-2">
      <div className="p-5 mt-8 transition-shadow duration-200 bg-white rounded-lg shadow-sm hover:shadow-md">
        <img className="rounded-lg" src={book} alt="Lecture" />
        <h1 className="mt-2 mb-1 text-2xl font-semibold">Name</h1>
        <p className="text-xs text-primary">Video</p>
        <p className="text-xl text-pTag">Name of Owner</p>

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
  );
}

export default LiveLectureCard;
