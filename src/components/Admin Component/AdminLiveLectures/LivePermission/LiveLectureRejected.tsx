// import React from 'react'

import LiveLectureRejectedCards from "./LiveLecRejCards"

function LiveLectureRejected() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 w-[100%]">
      <LiveLectureRejectedCards/>
      <LiveLectureRejectedCards/>
      <LiveLectureRejectedCards/>
      <LiveLectureRejectedCards/>
      <LiveLectureRejectedCards/>
    </div>
  )
}

export default LiveLectureRejected
