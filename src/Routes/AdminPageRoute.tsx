// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminDashboard from "../pages/Admin Page/AdminDashboard"
import UserManagement from "../pages/Admin Page/UserManagement"
import AdminStudentCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/AdminStudentCourse"
import ViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/ViewCourse/ViewCourse"
import StudentViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/StudentViewCourseComponent/StudentViewCourse"

function AdminPageRoute() {
  return (
   <Routes>
 <Route path="/AdminDashboard" element = {<AdminDashboard/>} />
 <Route path="/UserManagement/*" element = {<UserManagement/>} />
 <Route path="/AdminStudentCourses" element ={<AdminStudentCourse/>}  />
 <Route path="/ViewCourse" element = {<ViewCourse/>} />
 <Route path="/StudentViewCourse" element = {<StudentViewCourse/>} />
   </Routes>
   
  )
}

export default AdminPageRoute
