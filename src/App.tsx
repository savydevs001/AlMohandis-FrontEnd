import LandingPageRoutes from "./Routes/LandingPageRoutes"
import { BrowserRouter } from "react-router-dom"
import TeacherRoutes from "./Routes/TeacherRoutes"
import StudentRoutes from "./Routes/StudentRoutes"
import AdminPageRoute from "./Routes/AdminPageRoute"


function App() {
  return (
    <>
      <BrowserRouter>
        <LandingPageRoutes />
        <TeacherRoutes />
        <StudentRoutes/>
        <AdminPageRoute/>
      </BrowserRouter>
    </>
  )
}

export default App
