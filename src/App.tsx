// import React from 'react'

import LandingPageRoutes from "./Routes/LandingPageRoutes"
import { BrowserRouter } from "react-router-dom"
import TeacherRoutes from "./Routes/TeacherRoutes"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <BrowserRouter>
        <LandingPageRoutes />
        <TeacherRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
