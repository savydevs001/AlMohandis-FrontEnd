import React, { useState } from 'react';
import book from '../../../assets/book.webp';
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import DeleteConfirmationPopup from '../Courses Component/DeletePopUp'; // Import the new popup component

// Define the props type
interface CoursesByMeCardProps {
  name: string;
  published?: string;
  students?: string;
  button?: string;
  showButton: boolean; // Make sure this is a boolean
}

const CoursesByMeCard: React.FC<CoursesByMeCardProps> = ({ name, published, students, button, showButton }) => {
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // State to control the popup visibility

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true); // Show the popup when delete is clicked
  };

  const handleConfirmDelete = () => {
    // Perform the delete operation here
    console.log('Item deleted');
    setIsDeletePopupOpen(false); // Close the popup after deletion
  };

  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false); // Close the popup if the user cancels
  };

  return (
    <div className=''>
      <div className="p-5 mt-8 rounded-lg lg:w-56 bg-cardBg">
        <img className="rounded-md" src={book} alt="" />
        <h1 className="mt-2 mb-1 text-2xl font-semibold">{name}</h1>
        
        { published && (
          <p className="text-sm text-[#666]">
            {published}
            <span className="px-2 font-semibold text-black text-md">20-4-2024</span>
          </p>
        )}
        
        {students && (
          <p className="text-sm text-[#666]">
            {students}
            <span className="px-2 font-semibold text-black text-md">23,7847</span>
          </p>
        )}

        <div className="flex items-center gap-2 mt-2">
          {showButton && (
            <button className="px-8 py-1 text-sm text-white rounded-md bg-primary">
              {button}
            </button>
          )}

          <NavLink to={'/editCourse'}>
            <GrEdit className="p-1 text-2xl text-green-800 border border-green-800 rounded-md" />
          </NavLink>

          <RiDeleteBin6Line 
            onClick={handleDeleteClick} // Show the popup on delete icon click
            className="p-1 text-2xl text-red-600 border border-red-600 rounded-md cursor-pointer" 
          />
        </div>
      </div>

      {/* Conditionally render the DeleteConfirmationPopup */}
      {isDeletePopupOpen && (
        <DeleteConfirmationPopup 
          onConfirm={handleConfirmDelete} 
          onCancel={handleCancelDelete} 
        />
      )}
    </div>
  );
}

export default CoursesByMeCard;
