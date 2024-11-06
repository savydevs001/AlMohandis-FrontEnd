// import React from 'react'

import StudentSidebar from "../../../../../../../StudentSidebar"
import ExamQuestionShowComponent from "./ExamQuestionShowComponent"

function ExamQuestionsPage() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar />

      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
       <ExamQuestionShowComponent/>
      </div>
    </div>
  )
}

export default ExamQuestionsPage
