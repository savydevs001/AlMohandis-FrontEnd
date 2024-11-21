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


import ProtectedRoute from '../components/ProtectedRoute'; // Import the ProtectedRoute

import Schdule from '../pages/Teacher Page/Schudle';
import AudioEditor from '../components/AdminComponent/CourseManagementComp/CreateCourse/AdminCreateCourseSteps/RigthAudioModule/AudioEditor';
import GradeNow from '../components/TeacherComponent/Assignment/GradeNow/GradeNow';
import Draft from '../components/TeacherComponent/Courses Component/Draft';
import PendingCourse from '../components/TeacherComponent/Courses Component/PendingCourse';
import CreateCourse from '../components/TeacherComponent/Courses Component/CreateCourseComp/CreateCourse';
import EditCourse from '../components/TeacherComponent/Courses Component/Edit Course/EditCourse';
import MarkAttendence from '../components/TeacherComponent/Attendence Component/MarkAttendence/MarkAttendence';
import ViewAttendence from '../components/TeacherComponent/Attendence Component/ViewAttendence/ViewAttendence';
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