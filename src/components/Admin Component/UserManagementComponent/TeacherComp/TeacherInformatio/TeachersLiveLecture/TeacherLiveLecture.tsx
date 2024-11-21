// import React from 'react'

import TeacherLiveLectureTable from "./LiveLectureTable"

function TeacherLiveLecture() {
  return (
    <div>
        <div className="space-y-4">
      <div>
            <button className="px-4 py-3 text-lg font-semibold text-white rounded-md bg-primary">Registered Teachers <span className="text-xl">08</span></button>
      </div>
      {/* <LiveLectureTable/> */}
      <TeacherLiveLectureTable/>
    </div>
    </div>
  )
}

export default TeacherLiveLecture
