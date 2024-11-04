// import React from 'react'

import { Route, Routes } from "react-router-dom"
import StudentDashboard from "../pages/Student Page/StudentDashboard"
import MyCourses from "../components/Student Component/StudentCourses Component/MyCourses Components/MyCourses"
import BuyCourses from "../components/Student Component/StudentCourses Component/Buy Courses Components/BuyCourses"
import VideoLesson from "../components/Student Component/StudentCourses Component/MyCourses Components/Course1 Component/Show Lessons Component/Lesson Vidoe Course/VideoLesson"

function StudentRoutes() {
  return (
<>
<Routes>
      <Route path="/StudentDashboard" element={<StudentDashboard />} />
      <Route path="/courses/myCourses/*" element={<MyCourses />} />
      <Route path="/videoLesson" element={<VideoLesson />} />
      <Route path="/courses/buyCourses" element={<BuyCourses />} />
</Routes>
</>
  )
}

export default StudentRoutes
