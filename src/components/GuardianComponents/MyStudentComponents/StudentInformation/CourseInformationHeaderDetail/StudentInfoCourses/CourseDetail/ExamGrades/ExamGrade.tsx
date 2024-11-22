// import React from 'react'

import ExamGradeCard from "./ExamGradeCard"

function ExamGrade() {
  return (
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
      <ExamGradeCard onView={() => {}}/>
    </div>
  )
}

export default ExamGrade
