import LandingPageRoutes from "./Routes/LandingPageRoutes"
import { BrowserRouter } from "react-router-dom"
import TeacherRoutes from "./Routes/TeacherRoutes"
import StudentRoutes from "./Routes/StudentRoutes"

function App() {
  return (
    <>
      <BrowserRouter>
        <LandingPageRoutes />
        <TeacherRoutes />
        <StudentRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
