// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminDashboard from "../pages/Admin Page/AdminDashboard"
import UserManagement from "../pages/Admin Page/UserManagement"
import AdminStudentCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/AdminStudentCourse"
import ViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/ViewCourse/ViewCourse"
import StudentViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/StudentViewCourseComponent/StudentViewCourse"
import TeacherInformation from "../components/Admin Component/UserManagementComponent/AdminTeacherComponent/TeacherInformatioComponents/TeacherInformation"
import TeacherInfoShowComp from "../components/Admin Component/UserManagementComponent/AdminTeacherComponent/TeacherInformatioComponents/TeacherInfoShowComp"
import AssistantInformation from "../components/Admin Component/UserManagementComponent/AdminTeacherComponent/AdminAssistantComponent/AssistantInformationComponent/AssistantInformation"
import AdminGurardian from "../components/Admin Component/UserManagementComponent/AdminGuardianComponent/AdminGurardian"
import GaurdianInformation from "../components/Admin Component/UserManagementComponent/AdminGuardianComponent/GaurdianInformationComponent/GaurdianInformation"
import AdminManageAdmin from "../components/Admin Component/UserManagementComponent/AdminManageAdminComponents/AdminManageAdmin"
import AdminInformation from "../components/Admin Component/UserManagementComponent/AdminManageAdminComponents/AdminInformationCpomponent/AdminInformation"

function AdminPageRoute() {
  return (
   <Routes>
 <Route path="/AdminDashboard" element = {<AdminDashboard/>} />
 <Route path="/UserManagement/*" element = {<UserManagement/>} />
 <Route path="/AdminTeacher" element ={
      <TeacherInfoShowComp/>}  />
 <Route path="/AdminStudentCourses" element ={<AdminStudentCourse/>}  />
 <Route path="/ViewCourse" element = {<ViewCourse/>} />
 <Route path="/StudentViewCourse" element = {<StudentViewCourse/>} />
 <Route path="/TeacherInformation" element = {<TeacherInformation/>} />
 <Route path="/AssistantInformation" element = {<AssistantInformation/>} />
 <Route path="/AdminGuardianPage" element = {<AdminGurardian/>} />
 <Route path="/GaurdianInformation" element = {<GaurdianInformation/>} />
 <Route path="/AdminManagement" element = {<AdminManageAdmin/>} />
 <Route path="/AdminInformation" element = {<AdminInformation/>} />

   </Routes>
   
  )
}

export default AdminPageRoute
