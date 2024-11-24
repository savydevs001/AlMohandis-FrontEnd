// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminDashboard from "../pages/Admin Page/AdminDashboard"
import UserManagement from "../pages/Admin Page/UserManagement"
import AdminStudentCourse from "../components/AdminComponent/UserManagementComponent/StudentComponents/StudentInfo/StudentCourses/AdminStudentCourse"
import ViewCourse from "../components/AdminComponent/UserManagementComponent/StudentComponents/StudentInfo/StudentCourses/ViewCourse/ViewCourse"
import StudentViewCourse from "../components/AdminComponent/UserManagementComponent/StudentComponents/StudentInfo/StudentCourses/StudViewCourse/StudentViewCourse"
import TeacherInformation from "../components/AdminComponent/UserManagementComponent/TeacherComp/TeacherInformatio/TeacherInformation"
import TeacherInfoShowComp from "../components/AdminComponent/UserManagementComponent/TeacherComp/TeacherInformatio/TeacherInfo"
import AssistantInformation from "../components/AdminComponent/UserManagementComponent/TeacherComp/Assistant/AssistantInfoComp/AssistantInformation"
import AdminGurardian from "../components/AdminComponent/UserManagementComponent/Guardian/AdminGurardian"
import GaurdianInformation from "../components/AdminComponent/UserManagementComponent/Guardian/GaurdianInformation/GaurdianInformation"
import AdminManageAdmin from "../components/AdminComponent/UserManagementComponent/ManageAdmin/AdminManageAdmin"
import AdminInformation from "../components/AdminComponent/UserManagementComponent/ManageAdmin/AdminInfoCpomp/AdminInformation"
import ContentManageMent from "../pages/Admin Page/ContentManageMent"
import CourseManagement from "../pages/Admin Page/CourseManagement"
import CommunicationMessages from "../pages/Admin Page/CommunMessages"
import CommunicationAnnouncements from "../pages/Admin Page/CommuAnnounsment"
import SupportTicket from "../pages/Admin Page/SupportTicket"
import FinancialManagement from "../pages/Admin Page/FinancialManagement"
import ReportsandAnalytics from "../pages/Admin Page/ReportsandAnalytics"
import CoursePerformanceReport from "../components/AdminComponent/ReportsAndAnalytics/PerformanceReport/PerformanceReport"
import SystemUsageStatistics from "../components/AdminComponent/ReportsAndAnalytics/UsageStatictics/SystemUsageStatistics"
import AdminAssignment from "../pages/Admin Page/AdminAssignment"
import AdminExam from "../pages/Admin Page/AdminExam"
import AdminSchdules from "../pages/Admin Page/AdminSchdules"
import AdminLiveLectures from "../pages/Admin Page/AdminLiveLectures"
import LogsAudits from "../pages/Admin Page/LogsAudits"
import ManagementGroup from "../pages/Admin Page/ManagementGroup"

import AdminRegisterdSubject from "../pages/Admin Page/AdminRegisterdSubject"
import Groups from "../pages/Admin Page/Groups";
import AdminProfile from "../pages/Admin Page/AdminProfile"
import AdminAttendance from "../pages/Admin Page/AdminAttendance"
import AdminMarkAttendance from "../components/AdminComponent/Admin Attendance/MarkAttendance/MarkAttendacne"
import EditCourses from "../components/AdminComponent/CourseManagementComp/ActiveCoursesComponent/EditCourses"
// import EditCourse from "../components/TeacherComponent/Courses Component/Edit Course/EditCourse"

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
 <Route path="/editCourses" element = {<EditCourses/>} />
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
 <Route path="/AdminLiveLectures" element = {<AdminLiveLectures/>} />
 <Route path="/LogsAudits" element = {<LogsAudits/>} />
 <Route path="/ManagementGroup/*" element = {<ManagementGroup/>} />
 <Route path="/AdminRegisterdSubject/*" element = {<AdminRegisterdSubject/>} />
 <Route path="/AdminProfile" element = {<AdminProfile/>} />
 <Route path="/AdminViewAttendance" element = {<AdminAttendance/>} />
 <Route path="/Groups/*" element = {<Groups/>} />
 <Route path="/AdminMarkAttendance" element = {<AdminMarkAttendance/>} />



   </Routes>
   
  )
}

export default AdminPageRoute;
