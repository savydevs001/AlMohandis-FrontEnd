import LandingPageRoutes from "./Routes/LandingPageRoutes"
import { BrowserRouter } from "react-router-dom"
import TeacherRoutes from "./Routes/TeacherRoutes"
import StudentRoutes from "./Routes/StudentRoutes"
import AdminPageRoute from "./Routes/AdminPageRoute"
import GuardianPageRoutes from "./Routes/GuardianPageRoutes"


function App() {
  return (
    <>
      <BrowserRouter>
        <LandingPageRoutes />
        <TeacherRoutes />
        <StudentRoutes/>
        <AdminPageRoute/>
        <GuardianPageRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
