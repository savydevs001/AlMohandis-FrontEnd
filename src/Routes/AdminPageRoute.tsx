// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminDashboard from "../pages/Admin Page/AdminDashboard"
import UserManagement from "../pages/Admin Page/UserManagement"
import AdminStudentCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/StudentInfo/StudentCourses/AdminStudentCourse"
import ViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/StudentInfo/StudentCourses/ViewCourse/ViewCourse"
import StudentViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/StudentInfo/StudentCourses/StudViewCourse/StudentViewCourse"
import TeacherInformation from "../components/Admin Component/UserManagementComponent/TeacherComp/TeacherInformatio/TeacherInformation"
import TeacherInfoShowComp from "../components/Admin Component/UserManagementComponent/TeacherComp/TeacherInformatio/TeacherInfo"
import AssistantInformation from "../components/Admin Component/UserManagementComponent/TeacherComp/Assistant/AssistantInfoComp/AssistantInformation"
import AdminGurardian from "../components/Admin Component/UserManagementComponent/Guardian/AdminGurardian"
import GaurdianInformation from "../components/Admin Component/UserManagementComponent/Guardian/GaurdianInformation/GaurdianInformation"
import AdminManageAdmin from "../components/Admin Component/UserManagementComponent/ManageAdmin/AdminManageAdmin"
import AdminInformation from "../components/Admin Component/UserManagementComponent/ManageAdmin/AdminInfoCpomp/AdminInformation"
import ContentManageMent from "../pages/Admin Page/ContentManageMent"
import CourseManagement from "../pages/Admin Page/CourseManagement"
import CommunicationMessages from "../pages/Admin Page/CommunicationMessages"
import CommunicationAnnouncements from "../pages/Admin Page/CommunicationAnnounsment"
import SupportTicket from "../pages/Admin Page/SupportTicket"
import FinancialManagement from "../pages/Admin Page/FinancialManagement"
import ReportsandAnalytics from "../pages/Admin Page/ReportsandAnalytics"
import CoursePerformanceReport from "../components/Admin Component/ReportsAndAnalytics/PerformanceReport/PerformanceReport"
import SystemUsageStatistics from "../components/Admin Component/ReportsAndAnalytics/UsageStatictics/SystemUsageStatistics"
import AdminAssignment from "../pages/Admin Page/AdminAssignment"
import AdminExam from "../pages/Admin Page/AdminExam"
import AdminSchdules from "../pages/Admin Page/AdminSchdules"
import AdminLiveLectures from "../pages/Admin Page/AdminLiveLectures"
import LogsAudits from "../pages/Admin Page/LogsAudits"
import ManagementGroup from "../pages/Admin Page/ManagementGroup"

import AdminRegisterdSubject from "../pages/Admin Page/AdminRegisterdSubject"
import AdminProfile from "../pages/Admin Page/AdminProfile"
import AdminAttendance from "../pages/Admin Page/AdminAttendance"
import AdminMarkAttendance from "../components/Admin Component/Admin Attendance/MarkAttendance/MarkAttendacne"

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
 <Route path="/AdminLiveLectures" element = {<AdminLiveLectures/>} />
 <Route path="/LogsAudits" element = {<LogsAudits/>} />
 <Route path="/ManagementGroup/*" element = {<ManagementGroup/>} />
 <Route path="/AdminRegisterdSubject/*" element = {<AdminRegisterdSubject/>} />
 <Route path="/AdminProfile" element = {<AdminProfile/>} />
 <Route path="/AdminViewAttendance" element = {<AdminAttendance/>} />
 <Route path="/AdminMarkAttendance" element = {<AdminMarkAttendance/>} />



   </Routes>
   
  )
}

export default AdminPageRoute;
