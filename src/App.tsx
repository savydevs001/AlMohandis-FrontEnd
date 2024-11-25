import LandingPageRoutes from "./Routes/LandingPageRoutes"
import { BrowserRouter } from "react-router-dom"
import TeacherRoutes from "./Routes/TeacherRoutes"
import StudentRoutes from "./Routes/StudentRoutes"
import AdminPageRoute from "./Routes/AdminPageRoute"
import GuardianPageRoutes from "./Routes/GuardianPageRoutes"
import NotFound from "./Routes/NotFound"


function App() {
  return (
    <>
      <BrowserRouter>
        <LandingPageRoutes />
        <TeacherRoutes />
        <StudentRoutes/>
        <AdminPageRoute/>
        <GuardianPageRoutes/>
        <NotFound/>
      </BrowserRouter>
    </>
  )
}

export default App
