// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AssistantsComp from "../../components/TeacherComponent/Assistants/AssistantsComp"
import Sidebar from "../../components/TeacherComponent/Sidebar"
import ManageAssistant from "../../components/TeacherComponent/Assistants/ManageAssistant/ManageAssistant"

function Assistants() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
    <Sidebar/>
    
    <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
     <Routes>
      <Route path="/" element={<AssistantsComp/>}/>
      <Route path="ManageAssistant" element={<ManageAssistant/>}/>
     </Routes>
    </div>
  </div>
  )
}

export default Assistants
