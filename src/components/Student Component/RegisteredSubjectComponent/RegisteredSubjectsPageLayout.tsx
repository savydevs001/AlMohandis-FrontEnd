// import React from 'react'

import DashBoardHeader from "../../Teacher Component/Dashboard Component/DashBoardHeader"
import RegisteredSubjectCard from "./RegisteredSubjectCard"

function RegisteredSubjectsPageLayout() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Registered Subjects</h1>
            <DashBoardHeader/>
      </div>
      <div className="mt-8 space-y-4" >
           <RegisteredSubjectCard /> 
           <RegisteredSubjectCard/> 
           <RegisteredSubjectCard/> 
           <RegisteredSubjectCard/> 
           <RegisteredSubjectCard/> 
      </div>
    </div>
  )
}

export default RegisteredSubjectsPageLayout
