import React from 'react';
// import CoursesByMeCard from "../../components/Teacher Component/Courses Component/CoursesByMeCard";

import Sidebar from "../../components/Teacher Component/Sidebar";
import CoursesNav from '../../components/Teacher Component/Courses Component/CoursesNav';
import CoursesCards from '../../components/Teacher Component/Courses Component/CoursesCards'

const Courses: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar />
      <div className="items-start justify-between flex-1 p-6"> 
       <CoursesNav/>
       <CoursesCards/>
      </div>
    </div>
  );
};

export default Courses;
