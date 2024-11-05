// import React from 'react'

import LessonContent from "../Show Content Component/LessonContent"
import VideoPlayer from "./VideoPlayer"

function VideoLessonComponents() {
  return (
    <div className="flex flex-col w-full gap-4 mt-7 lg:flex-row">
      <div className="lg:w-[62%] w-full p-2">
            <VideoPlayer/>
      </div>
      <div className="lg:w-[38%] w-full">
      <LessonContent/>
            </div>
    </div>
  )
}

export default VideoLessonComponents
