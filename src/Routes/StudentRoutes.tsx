import { Routes, Route } from "react-router-dom";
import StudentDashboard from "../pages/Student Page/StudentDashboard";
import MyCourses from "../components/StudentComponent/StudentCourses/MyCourses Components/MyCourses";
import BuyCourses from "../components/StudentComponent/StudentCourses/BuyCourses/BuyCourses";
import VideoLesson from "../components/StudentComponent/StudentCourses/MyCourses Components/Course1 Component/ShowLessons/Lesson Vidoe Course/VideoLesson";
import ProtectedRoute from '../components/ProtectedRoute'; 
import ExamQuestionsPage from "../components/StudentComponent/StudentCourses/MyCourses Components/Course1 Component/ShowLessons/ShowContent/ShowExam/ShowExamQuestion/ExamQuestions";
import CorrectOption from "../components/StudentComponent/StudentCourses/MyCourses Components/Course1 Component/ShowLessons/ShowContent/ShowGraded/CorrectOptions/CorrectOption";
import Professors from "../pages/Student Page/Professors";
import StudentAssignments from "../pages/Student Page/StudentAssignments";
import StudentAttendence from "../pages/Student Page/StudentAttendence";
import RegisteredSubject from "../pages/Student Page/RegisteredSubject";
import Schudle from "../pages/Student Page/Schudle";
import StudentFavourites from "../pages/Student Page/StudentFavourites";
import StudentChat from "../pages/Student Page/StudentChat";
import StudentSupportTicket from "../pages/Student Page/StudentSupportTicket";
import StudentLiveChat from "../pages/Student Page/StudentLiveChat";
import StudentProfile from "../pages/Student Page/StudentProfile";
import StudentLiveLectures from "../pages/Student Page/StudentLiveLectures";


function StudentRoutes() {
  return (
    <Routes>
      <Route path="/StudentDashboard" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
      <Route path="/myCourses/*" element={<ProtectedRoute allowedRoles={['student']}><MyCourses /></ProtectedRoute>} />
      <Route path="/videoLesson" element={<ProtectedRoute allowedRoles={['student']}><VideoLesson /></ProtectedRoute>} />
      <Route path="/buyCourses/*" element={<ProtectedRoute allowedRoles={['student']}><BuyCourses /></ProtectedRoute>} />
      <Route path="/myassignments/*" element={<ProtectedRoute allowedRoles={['student']}><StudentAssignments /></ProtectedRoute>} />
      <Route path="/exams/:examId/:attempt" element={<ProtectedRoute allowedRoles={['student']}><ExamQuestionsPage /></ProtectedRoute>} />
      <Route path="/correctOptions" element={<ProtectedRoute allowedRoles={['student']}><CorrectOption /></ProtectedRoute>} />
      <Route path="/Professors/*" element={<ProtectedRoute allowedRoles={['student']}><Professors /></ProtectedRoute>} />
      <Route path="/StudentAttendance" element={<ProtectedRoute allowedRoles={['student']}><StudentAttendence /></ProtectedRoute>} />
      <Route path="/RegisteredSubject" element={<ProtectedRoute allowedRoles={['student']}><RegisteredSubject /></ProtectedRoute>} />
      <Route path="/StudentSchedule" element={<ProtectedRoute allowedRoles={['student']}><Schudle /></ProtectedRoute>} />
      <Route path="/StudentFavourites" element={<ProtectedRoute allowedRoles={['student']}><StudentFavourites /></ProtectedRoute>} />
      <Route path="/StudentChat" element={<ProtectedRoute allowedRoles={['student']}><StudentChat /></ProtectedRoute>} />
      <Route path="/StudentSupportTicket" element={<ProtectedRoute allowedRoles={['student']}><StudentSupportTicket /></ProtectedRoute>} />
      <Route path="/StudentLiveChat" element={<ProtectedRoute allowedRoles={['student']}><StudentLiveChat /></ProtectedRoute>} />
      <Route path="/StudentProfile" element={<ProtectedRoute allowedRoles={['student']}><StudentProfile /></ProtectedRoute>} />
      <Route path="/StudentLiveLectures" element={<ProtectedRoute allowedRoles={['student']}><StudentLiveLectures /></ProtectedRoute>} />
    </Routes>
  );
}

export default StudentRoutes;