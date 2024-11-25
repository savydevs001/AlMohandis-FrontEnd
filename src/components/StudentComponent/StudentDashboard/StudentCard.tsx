import React from 'react';
import ProgressBar from './ProgressBar';

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  progress?: number;
  showProgress?: boolean;
}

const StudentCard: React.FC<CardProps> = ({ icon, title, description, progress, showProgress }) => {
  return (
    <div className="p-4 space-y-2 transition-shadow duration-200 bg-white border rounded-lg shadow-sm hover:shadow-md">
      {/* Icon Section */}
      <div className="p-2 text-xl bg-teal-100 rounded-full text-primary w-fit">
        {icon}
      </div>

      {/* Title Section */}
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>

      {/* Description Section */}
    

      {/* Conditional Progress or Text Section */}
      {showProgress && progress !== undefined ? (
        <div className="mt-4">
        <ProgressBar progress={75}/>
          <p className="mt-3 text-xs text-gray-600">{description}</p>
        </div>
      ) : (
       <div className='space-y-2'>
             <p className="text-sm font-semibold text-primary">2 Upcoming Exams</p>
             <div className='flex flex-col text-xs'>
                  <span>1 in current Week </span>
                  <span>1 Coming week</span>
             </div>
       </div>
     
         // Placeholder text for last card
      )}

      {/* Button Section */}
      <button 
        className="px-3 py-1 mt-4 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50"
        aria-label={`View ${title}`}
      >
        View
      </button>
    </div>
  );
};

export default StudentCard;
