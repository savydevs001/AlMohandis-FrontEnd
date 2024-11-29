import React, { useState } from 'react';
import book from '../../../assets/book.webp';
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import DeleteConfirmationPopup from '../Courses Component/DeletePopUp';
import axios from 'axios';

interface CoursesByMeCardProps {
  courseId: string;
  name: string;
  published?: string;
  students?: string;
  button?: string;
  showButton: boolean;
}

const CoursesByMeCard: React.FC<CoursesByMeCardProps> = ({ courseId, name, published, students, button, showButton }) => {
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true); 
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/course/${courseId}/delete`);
      console.log('Course deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting course:', error);
    } finally {
      setIsDeletePopupOpen(false); 
    }
  };

  const handleCancelDelete = () => {
    setIsDeletePopupOpen(false); 
  };

  return (
    <div className='py-2'>
      <div className="p-5 mt-8 w-full lg:w-[17.5vw] transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg">
        <img className="rounded-lg" src={book} alt="" />
        <h1 className="mt-2 mb-1 text-2xl font-semibold">{name}</h1>

        {published && (
          <p className="text-sm text-[#666]">
            {published}
            <span className="px-2 font-semibold text-black text-md">20-4-2024</span>
          </p>
        )}

        {students && (
          <p className="text-sm text-[#666]">
            {students}
            <span className="px-2 font-semibold text-black text-md">0</span>
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
            onClick={handleDeleteClick} 
            className="p-1 text-2xl text-red-600 border border-red-600 rounded-md cursor-pointer" 
          />
        </div>
      </div>

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
