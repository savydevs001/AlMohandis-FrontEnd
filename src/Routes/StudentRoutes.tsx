import { Routes, Route } from "react-router-dom";
import StudentDashboard from "../pages/Student Page/StudentDashboard";
import MyCourses from "../components/Student Component/StudentCourses Component/MyCourses Components/MyCourses";
import BuyCourses from "../components/Student Component/StudentCourses Component/Buy Courses Components/BuyCourses";
import VideoLesson from "../components/Student Component/StudentCourses Component/MyCourses Components/Course1 Component/Show Lessons Component/Lesson Vidoe Course/VideoLesson";
import ProtectedRoute from '../components/ProtectedRoute'; // Import the ProtectedRoute
import ExamQuestionsPage from "../components/Student Component/StudentCourses Component/MyCourses Components/Course1 Component/Show Lessons Component/Show Content Component/ShowExam Component/ShowExamQuestions Component/ExamQuestionsPage";
import CorrectOption from "../components/Student Component/StudentCourses Component/MyCourses Components/Course1 Component/Show Lessons Component/Show Content Component/ShowGraded Component/CorrectOptions/CorrectOption";
import Professors from "../pages/Student Page/Professors";
import StudentAssignments from "../pages/Student Page/StudentAssignments";
import StudentAttendence from "../pages/Student Page/StudentAttendence";
import RegisteredSubject from "../pages/Student Page/RegisteredSubject";
import Schudle from "../pages/Student Page/Schudle";


function StudentRoutes() {
  return (
    <Routes>
      <Route path="/StudentDashboard" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
      <Route path="/courses/myCourses/*" element={<ProtectedRoute allowedRoles={['student']}><MyCourses /></ProtectedRoute>} />
      <Route path="/videoLesson" element={<ProtectedRoute allowedRoles={['student']}><VideoLesson /></ProtectedRoute>} />
      <Route path="/courses/buyCourses/*" element={<ProtectedRoute allowedRoles={['student']}><BuyCourses /></ProtectedRoute>} />
      <Route path="/myassignments/*" element={<ProtectedRoute allowedRoles={['student']}><StudentAssignments /></ProtectedRoute>} />
      <Route path="/exams/:examId/:attempt" element={<ProtectedRoute allowedRoles={['student']}><ExamQuestionsPage /></ProtectedRoute>} />
      <Route path="/correctOptions" element={<ProtectedRoute allowedRoles={['student']}><CorrectOption /></ProtectedRoute>} />
      <Route path="/Professors/*" element={<ProtectedRoute allowedRoles={['student']}><Professors /></ProtectedRoute>} />
      <Route path="/StudentAttendance" element={<ProtectedRoute allowedRoles={['student']}><StudentAttendence /></ProtectedRoute>} />
      <Route path="/RegisteredSubject" element={<ProtectedRoute allowedRoles={['student']}><RegisteredSubject /></ProtectedRoute>} />
      <Route path="/StudentSchedule" element={<ProtectedRoute allowedRoles={['student']}><Schudle /></ProtectedRoute>} />
    </Routes>
  );
}

export default StudentRoutes;