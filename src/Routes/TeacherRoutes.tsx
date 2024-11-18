import { Routes, Route } from 'react-router-dom';
import LiveLectures from '../pages/Teacher Page/LiveLectures';
import Courses from '../pages/Teacher Page/Courses';
import Assignment from '../pages/Teacher Page/Assignment';
import Exams from '../pages/Teacher Page/Exams';
import Attendence from '../pages/Teacher Page/Attendence';
import Chat from '../pages/Teacher Page/Chat';
import Assistants from '../pages/Teacher Page/Assistants';
import Subjects from '../pages/Teacher Page/Subjects';
import Support from '../pages/Teacher Page/Support';
import PromotionalContent from '../pages/Teacher Page/PromotionalContent';

import Draft from '../components/Teacher Component/Courses Component/Draft';
import PendingCourse from '../components/Teacher Component/Courses Component/PendingCourse';
import CreateCourse from '../components/Teacher Component/Courses Component/Create Course Component/CreateCourse';
import EditCourse from '../components/Teacher Component/Courses Component/Edit Course/EditCourse';
import ProtectedRoute from '../components/ProtectedRoute'; // Import the ProtectedRoute
import GradeNow from '../components/Teacher Component/Assignment Component/GradeNow/GradeNow';
import MarkAttendence from '../components/Teacher Component/Attendence Component/MarkAttendence/MarkAttendence';
import ViewAttendence from '../components/Teacher Component/Attendence Component/ViewAttendence/ViewAttendence';
import Schdule from '../pages/Teacher Page/Schudle';
import AudioEditor from '../components/Admin Component/CourseManagementComponents/AdminCreateCourseComponent/AdminCreateCourseSteps/RigthAudioModule/AudioEditor';
// import DashBoard from '../pages/Teacher Page/DashBoard';

const TeacherRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/liveLectures" element={<ProtectedRoute allowedRoles={['teacher']}><LiveLectures /></ProtectedRoute>} />
      <Route path="/courses/*" element={<ProtectedRoute allowedRoles={['teacher']}><Courses /></ProtectedRoute>} />
      <Route path="/assignments/*" element={<ProtectedRoute allowedRoles={['teacher']}><Assignment /></ProtectedRoute>} />
      <Route path="/exams/*" element={<ProtectedRoute allowedRoles={['teacher']}><Exams /></ProtectedRoute>} />
      <Route path="/gradeNow" element={<ProtectedRoute allowedRoles={['teacher']}><GradeNow /></ProtectedRoute>} />
      <Route path="/attendence" element={<ProtectedRoute allowedRoles={['teacher']}><Attendence /></ProtectedRoute>} />
      <Route path="/chat" element={<ProtectedRoute allowedRoles={['teacher']}><Chat /></ProtectedRoute>} />
      <Route path="/assistant" element={<ProtectedRoute allowedRoles={['teacher']}><Assistants /></ProtectedRoute>} />
      <Route path="/subjects" element={<ProtectedRoute allowedRoles={['teacher']}><Subjects /></ProtectedRoute>} />
      <Route path="/support" element={<ProtectedRoute allowedRoles={['teacher']}><Support /></ProtectedRoute>} />
      <Route path="/promotionalContent" element={<ProtectedRoute allowedRoles={['teacher']}><PromotionalContent /></ProtectedRoute>} />
      <Route path="/draft" element={<ProtectedRoute allowedRoles={['teacher']}><Draft /></ProtectedRoute>} />
      <Route path="/pending" element={<ProtectedRoute allowedRoles={['teacher']}><PendingCourse /></ProtectedRoute>} />
      <Route path="/createCourse" element={<ProtectedRoute allowedRoles={['teacher']}><CreateCourse /></ProtectedRoute>} />
      <Route path="/editCourse" element={<ProtectedRoute allowedRoles={['teacher']}><EditCourse /></ProtectedRoute>} />
      <Route path="/markAttendence" element={<ProtectedRoute allowedRoles={['teacher']}><MarkAttendence /></ProtectedRoute>} />
      <Route path="/viewAttendence" element={<ProtectedRoute allowedRoles={['teacher']}><ViewAttendence /></ProtectedRoute>} />
      <Route path="/schedule" element={<ProtectedRoute allowedRoles={['teacher']}><Schdule /></ProtectedRoute>} />
      <Route path="/AudioEditor" element={<ProtectedRoute allowedRoles={['teacher']}><AudioEditor /></ProtectedRoute>} />

    </Routes>
  );
};

export default TeacherRoutes;