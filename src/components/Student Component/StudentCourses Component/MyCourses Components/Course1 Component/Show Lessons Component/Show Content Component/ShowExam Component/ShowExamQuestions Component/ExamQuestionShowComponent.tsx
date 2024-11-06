// import React from 'react'

import ExamQuestion from "./ExamQuestion"
import ExamQuestionsHeader from "./ExamQuestionsHeader"

function ExamQuestionShowComponent() {
  return (
    <div className="flex-1">
      <ExamQuestionsHeader/>
      <ExamQuestion/>
    </div>
  )
}

export default ExamQuestionShowComponent
