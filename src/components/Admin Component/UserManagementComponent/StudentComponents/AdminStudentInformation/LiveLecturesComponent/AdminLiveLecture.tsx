// import React from 'react'

import LiveLectureTable from "./LiveLectureTable"

function AdminLiveLecture() {
  return (
    <div className="space-y-4">
      <div>
            <button className="px-4 py-3 text-lg font-semibold text-white rounded-md bg-primary">Total Attended <span className="text-xl">08</span></button>
      </div>
      <LiveLectureTable/>
    </div>
  )
}

export default AdminLiveLecture
