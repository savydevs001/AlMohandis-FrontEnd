// import React from 'react'

// import ShowLessonHeader from "../../ShowLessonHeader"
import GradeCard from "./GradeCard"

function ShowGrades() {
  return (
    <div>
    {/* <ShowLessonHeader/> */}

    <div className="mt-8 space-y-6">
      <GradeCard/>
      <GradeCard/>
      <GradeCard/>
    </div>
    </div>
  )
}

export default ShowGrades
