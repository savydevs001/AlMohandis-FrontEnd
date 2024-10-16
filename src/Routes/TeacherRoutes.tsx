import { Routes, Route } from 'react-router-dom'
// import DashBoard from '../pages/Teacher Page/DashBoard'
import LiveLectures from '../pages/Teacher Page/LiveLectures'
import Courses from '../pages/Teacher Page/Courses'
import Assignment from '../pages/Teacher Page/Assignment'
import Exams from '../pages/Teacher Page/Exams'
import Attendence from '../pages/Teacher Page/Attendence'
import Chat from '../pages/Teacher Page/Chat'
import Assistants from '../pages/Teacher Page/Assistants'
import Subjects from '../pages/Teacher Page/Subjects'
import Support from '../pages/Teacher Page/Support'
import PromotionalContent from '../pages/Teacher Page/PromotionalContent'
import Schudle from '../pages/Teacher Page/Schudle'
import Draft from '../components/Teacher Component/Courses Component/Draft'
import PendingCourse from '../components/Teacher Component/Courses Component/PendingCourse'
import CreateCourse from '../components/Teacher Component/Courses Component/Create Course Component/CreateCourse'
import AudioEditor from '../components/Teacher Component/Courses Component/Create Course Component/AudioEditor'
import EditCourse from '../components/Teacher Component/Courses Component/Edit Course/EditCourse'

const TeacherRoutes: React.FC = () => {
  return (
  <>
  <Routes>
    {/* <Route path="/dashboard" element={<DashBoard />} /> */}
    <Route path="/liveLectures" element={<LiveLectures />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/assignments" element={<Assignment />} />
    <Route path="/exams" element={<Exams />} />
    <Route path="/attendence" element={<Attendence />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/assistant" element={<Assistants />} />
    <Route path="/subjects" element={<Subjects />} />
    <Route path="/support" element={<Support />} />
    <Route path="/promotionalContent" element={<PromotionalContent />} />
    <Route path="/schedule" element={<Schudle />} />
    <Route path="/draft" element={<Draft />} />
    <Route path="/pending" element={<PendingCourse />} />
    <Route path="/createCourse" element={<CreateCourse />} />
    <Route path="/AudioEditor" element={<AudioEditor />} />
    <Route path="/editCourse" element={<EditCourse />} />

  </Routes>
  </>
  )
}

export default TeacherRoutes
