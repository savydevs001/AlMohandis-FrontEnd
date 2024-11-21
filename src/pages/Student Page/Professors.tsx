
import { Route, Routes } from "react-router-dom"
import ProfessorsPageLayout from "../../components/ProfessorsComponent/ProfessorsPageLayout"
import StudentSidebar from "../../components/Student Component/StudentSidebar"
import ProfessorViewDetail from "../../components/ProfessorsComponent/ProfessorView/ProfessorViewDetail"

function Professors() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
      <Routes>
      <Route path="/" element={<ProfessorsPageLayout/>}/>
      <Route path="professorsDetail" element={<ProfessorViewDetail/>}/>            
      </Routes>
      </div>

    </div>
  )
}

export default Professors
