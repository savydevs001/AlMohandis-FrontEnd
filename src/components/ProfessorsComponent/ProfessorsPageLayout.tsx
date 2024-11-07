// import React from 'react'

import DashBoardHeader from "../Teacher Component/Dashboard Component/DashBoardHeader"
import ProfessorsCard from "./ProfessorsCard"

function ProfessorsPageLayout() {
  return (
    <div className="flex-1">
   <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Registered Professors</h1>
      <DashBoardHeader/>
   </div>
   <div className="grid grid-cols-1 gap-4 mt-6 mb-6 md:grid-cols-2 lg:grid-cols-4 ">
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
      <ProfessorsCard/>
   </div>
    </div>
  )
}

export default ProfessorsPageLayout
