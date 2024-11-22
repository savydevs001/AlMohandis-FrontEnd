// import React from 'react'

import LiveLectureCard from "./LiveLectureCard"

function LiveLectureShowCard() {
  return (
    <div className="grid gap-4 grid-col-1 lg:grid-cols-4">
      <LiveLectureCard />
      <LiveLectureCard />
      <LiveLectureCard />
      <LiveLectureCard />
      <LiveLectureCard />
    </div>
  )
}

export default LiveLectureShowCard
