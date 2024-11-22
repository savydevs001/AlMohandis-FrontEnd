// import React from 'react'

import LiveLectureCard from "./LiveLectureCard"

function SaveLiveLecture() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <LiveLectureCard showButton ={false}/>
      <LiveLectureCard showButton ={false}/>
      <LiveLectureCard showButton ={false}/>
      <LiveLectureCard showButton ={false}/>
      <LiveLectureCard showButton ={false}/>
    </div>
  )
}

export default SaveLiveLecture
