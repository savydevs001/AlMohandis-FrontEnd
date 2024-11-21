// import React from 'react'

import ProgressBar from "../../../../StudentDashboard/ProgressBar"
import LessonInstrctions from "./LessonInstrctions"

function ShowProgress() {
  return (
    <div className="p-4 bg-white shadow-md">
      <h1 className="text-xl font-semibold"> Progress</h1>
      <ProgressBar progress={75}/>
      <p className="mt-1 text-xs">2 Lectured remaining to get back on track</p>
      <div>
            <LessonInstrctions/>
      </div>
    </div>
  )
}

export default ShowProgress
