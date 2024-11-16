import { Routes, Route } from "react-router-dom";
import ProtectedRoute from '../components/ProtectedRoute'; // Import the ProtectedRoute
import AdminDashboard from "../pages/Admin Page/AdminDashboard";
import UserManagement from "../pages/Admin Page/UserManagement";
import AdminStudentCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/AdminStudentCourse";
import ViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/ViewCourse/ViewCourse";
import StudentViewCourse from "../components/Admin Component/UserManagementComponent/StudentComponents/AdminStudentInformation/StudentCourses/StudentViewCourseComponent/StudentViewCourse";
import TeacherInformation from "../components/Admin Component/UserManagementComponent/AdminTeacherComponent/TeacherInformatioComponents/TeacherInformation";
import TeacherInfoShowComp from "../components/Admin Component/UserManagementComponent/AdminTeacherComponent/TeacherInformatioComponents/TeacherInfoShowComp";
import AssistantInformation from "../components/Admin Component/UserManagementComponent/AdminTeacherComponent/AdminAssistantComponent/AssistantInformationComponent/AssistantInformation";
import AdminGurardian from "../components/Admin Component/UserManagementComponent/AdminGuardianComponent/AdminGurardian";
import GaurdianInformation from "../components/Admin Component/UserManagementComponent/AdminGuardianComponent/GaurdianInformationComponent/GaurdianInformation";
import AdminManageAdmin from "../components/Admin Component/UserManagementComponent/AdminManageAdminComponents/AdminManageAdmin";
import AdminInformation from "../components/Admin Component/UserManagementComponent/AdminManageAdminComponents/AdminInformationCpomponent/AdminInformation";
import ContentManageMent from "../pages/Admin Page/ContentManageMent";
import CourseManagement from "../pages/Admin Page/CourseManagement";

function AdminPageRoute() {
  return (
    <Routes>
      <Route path="/AdminDashboard" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/UserManagement/*" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><UserManagement /></ProtectedRoute>} />
      <Route path="/AdminTeacher" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><TeacherInfoShowComp /></ProtectedRoute>} />
      <Route path="/AdminStudentCourses" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><AdminStudentCourse /></ProtectedRoute>} />
      <Route path="/ViewCourse" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><ViewCourse /></ProtectedRoute>} />
      <Route path="/StudentViewCourse" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><StudentViewCourse /></ProtectedRoute>} />
      <Route path="/TeacherInformation" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><TeacherInformation /></ProtectedRoute>} />
      <Route path="/AssistantInformation" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><AssistantInformation /></ProtectedRoute>} />
      <Route path="/AdminGuardianPage" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><AdminGurardian /></ProtectedRoute>} />
      <Route path="/GaurdianInformation" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><GaurdianInformation /></ProtectedRoute>} />
      <Route path="/AdminManagement" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><AdminManageAdmin /></ProtectedRoute>} />
      <Route path="/AdminInformation" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><AdminInformation /></ProtectedRoute>} />
      <Route path="/ContentManagement/*" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><ContentManageMent /></ProtectedRoute>} />
      <Route path="/CourseManagement/*" element={<ProtectedRoute allowedRoles={['admin', 'SUPER_ADMIN']}><CourseManagement /></ProtectedRoute>} />
    </Routes>
  );
}

export default AdminPageRoute;
