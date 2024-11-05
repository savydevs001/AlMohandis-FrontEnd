// import React from 'react'
import { Route, Routes } from "react-router-dom";
import StudentSidebar from "../../StudentSidebar";
import MyCoursesContent from "./MyCoursesContent";
import CourseDetail from "./Course1 Component/Course";
import VideoLesson from "./Course1 Component/Show Lessons Component/Lesson Vidoe Course/VideoLesson";

function MyCourses() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar />

      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <Routes>
          <Route path="/" element={<MyCoursesContent />} /> {/* Default view for MyCourses */}
          <Route path="/:courseId" element={<CourseDetail />} /> 
          <Route path="videoLesson" element = {<VideoLesson/>} />
        </Routes>
      </div>
    </div>
  );
}

export default MyCourses;
