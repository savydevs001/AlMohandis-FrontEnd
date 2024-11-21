import React from 'react';
import Sidebar from '../../components/TeacherComponent/Sidebar';
import CoursesNav from '../../components/TeacherComponent/Courses Component/CoursesCards';
// import CoursesByMeCard from "../../components/Teacher Component/Courses Component/CoursesByMeCard";
import CoursesCards from '../../components/TeacherComponent/Courses Component/CoursesCards';


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
