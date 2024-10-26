import React from 'react';
import CoursesNav from '../../components/Teacher Component/Courses Component/CoursesNav';
import CoursesCards from '../../components/Teacher Component/Courses Component/CoursesCards';
import Sidebar from '../../components/Teacher Component/Sidebar';
import { Routes, Route, useLocation } from "react-router-dom";
import Draft from '../../components/Teacher Component/Courses Component/Draft';
import PendingCourse from '../../components/Teacher Component/Courses Component/PendingCourse';
import CreateCourse from '../../components/Teacher Component/Courses Component/Create Course Component/CreateCourse';
import EditCourse from '../../components/Teacher Component/Courses Component/Edit Course/EditCourse';

const Courses: React.FC = () => {
  const location = useLocation(); // Hook to get the current URL

  // Check if we are on the "Create Course" or "Edit Course" page
  const isSpecialPage = location.pathname === '/courses/createCourse' || location.pathname === '/courses/editCourse';

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      
      {/* Sidebar will always show */}
      <Sidebar />
      
      <div className="items-start justify-between flex-1 p-3 lg:p-6">
        
        {/* Conditionally render CoursesNav and CoursesCards based on the route */}
        {!isSpecialPage && (
          <>
            <CoursesNav />
            {location.pathname === '/courses' && <CoursesCards />}
          </>
        )}
    

        <Routes>
          <Route path="draft" element={<Draft />} />
          <Route path="pending" element={<PendingCourse />} />
          <Route path="createCourse" element={<CreateCourse />} />
          <Route path="editCourse" element={<EditCourse />} />
        </Routes>
      </div>
    </div>
  );
};

export default Courses;
