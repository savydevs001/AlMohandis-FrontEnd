import React from 'react';

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-4 space-y-4 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg">
      {/* Icon Section */}
      <div className="p-2 text-xl bg-teal-100 rounded-full text-primary w-fit">
        {icon}
      </div>

      {/* Title Section */}
      <h3 className="mb-2 text-lg font-bold">{title}</h3>

      {/* Description Section */}
      <p className="text-sm text-gray-600">{description}</p>

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

export default Card;
