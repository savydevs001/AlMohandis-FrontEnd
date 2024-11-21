// import React from 'react'



import DashBoardHeader from "../../../TeacherComponent/DashboardComponent/DashBoardHeader"
import StudentAssignmentHeader from "../AssignmentHeader"
import AssignmentGradesCard from "./AssignmentGradesCard"

function AssignmentGrades() {
  return (
      <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
           <h1 className="text-2xl font-semibold">Assignment</h1>
           <DashBoardHeader/>
     </div>
     <StudentAssignmentHeader/>
      <div className="space-y-4 ">
  <AssignmentGradesCard/>
  <AssignmentGradesCard/>
  <AssignmentGradesCard/>
  <AssignmentGradesCard/>
  <AssignmentGradesCard/>
   </div>
    </div>
  )
}

export default AssignmentGrades
