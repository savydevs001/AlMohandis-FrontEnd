// import React from 'react'

import LandingPageRoutes from "./Routes/LandingPageRoutes"
import { BrowserRouter } from "react-router-dom"
import TeacherRoutes from "./Routes/TeacherRoutes"

function App() {
  return (
<>
<BrowserRouter>
<LandingPageRoutes/>
<TeacherRoutes/>
</BrowserRouter>
</>
  )
}

export default App
