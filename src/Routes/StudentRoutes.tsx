import { Routes, Route } from "react-router-dom";
import StudentDashboard from "../pages/Student Page/StudentDashboard";
import MyCourses from "../components/Student Component/StudentCourses Component/MyCourses Components/MyCourses";
import BuyCourses from "../components/Student Component/StudentCourses Component/Buy Courses Components/BuyCourses";
import VideoLesson from "../components/Student Component/StudentCourses Component/MyCourses Components/Course1 Component/Show Lessons Component/Lesson Vidoe Course/VideoLesson";
import ProtectedRoute from '../components/ProtectedRoute'; // Import the ProtectedRoute

function StudentRoutes() {
  return (
    <Routes>
      <Route path="/StudentDashboard" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
      <Route path="/courses/myCourses/*" element={<ProtectedRoute allowedRoles={['student']}><MyCourses /></ProtectedRoute>} />
      <Route path="/videoLesson" element={<ProtectedRoute allowedRoles={['student']}><VideoLesson /></ProtectedRoute>} />
      <Route path="/courses/buyCourses" element={<ProtectedRoute allowedRoles={['student']}><BuyCourses /></ProtectedRoute>} />
    </Routes>
  );
}

export default StudentRoutes;