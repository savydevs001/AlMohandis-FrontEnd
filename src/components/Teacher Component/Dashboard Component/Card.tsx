// import React from 'react'; // Not needed in modern React

function Card({ icon, title, description }) {
      return (
        <div className="p-4 space-y-4 bg-white rounded-lg shadow-md">
          {/* Icon Section */}
          <div className='p-2 text-xl bg-teal-100 rounded-full text-primary w-fit'>
            {icon}
          </div>
    
          {/* Title Section */}
          <h3 className="mb-2 text-lg font-bold">{title}</h3>
    
          {/* Description Section */}
          <p className="text-sm text-gray-600">{description}</p>
    
          {/* Button Section */}
          <button className="px-3 py-1 mt-4 text-sm text-white rounded-md bg-primary">
            View
          </button>
        </div>
      );
    }
    
    export default Card;
    