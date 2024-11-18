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
import ContentManageMent from "../pages/Admin Page/ContentManageMent"
import CourseManagement from "../pages/Admin Page/CourseManagement"
import CommunicationMessages from "../pages/Admin Page/CommunicationMessages"
import CommunicationAnnouncements from "../pages/Admin Page/CommunicationAnnounsment"
import SupportTicket from "../pages/Admin Page/SupportTicket"
import FinancialManagement from "../pages/Admin Page/FinancialManagement"
import ReportsandAnalytics from "../pages/Admin Page/ReportsandAnalytics"
import CoursePerformanceReport from "../components/Admin Component/ReportsAndAnalytics/CoursePerformanceReport/CoursePerformanceReport"
import SystemUsageStatistics from "../components/Admin Component/ReportsAndAnalytics/SystemUsageStatictics/SystemUsageStatistics"
import AdminAssignment from "../pages/Admin Page/AdminAssignment"
import AdminExam from "../pages/Admin Page/AdminExam"
import AdminSchdules from "../pages/Admin Page/AdminSchdules"

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
 <Route path="/ContentManagement/*" element = {<ContentManageMent/>} />
 <Route path="/CourseManagement/*" element = {<CourseManagement/>} />
 <Route path="/CommunicationMessages" element = {<CommunicationMessages/>} />
 <Route path="/CommunicationAnnouncements" element = {<CommunicationAnnouncements/>} />
 <Route path="/CommunicationSupportTicket" element = {<SupportTicket/>} />
 <Route path="/FinancialManagement" element = {<FinancialManagement/>} />
 <Route path="/ReportandAnalytics" element = {<ReportsandAnalytics/>} />
 <Route path="/CoursePerformanceReport" element = {<CoursePerformanceReport/>} />
 <Route path="/SystemUsageStatistics" element = {<SystemUsageStatistics/>} />
 <Route path="/AdminAssignment/*" element = {<AdminAssignment/>} />
 <Route path="/AdminExam/*" element = {<AdminExam/>} />
 <Route path="/AdminSchdules" element = {<AdminSchdules/>} />



   </Routes>
   
  )
}

export default AdminPageRoute;
