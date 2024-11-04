// import React from 'react'

import StudentSidebar from "../../../../../StudentSidebar"
import StudentDashboardHeader from "../StudentDashboardHeader"
import VideoLessonComponents from "./VideoLessonComponents"
// import StudentDashboardHeader from "../StudentDashboardHeader"


function VideoLesson() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
    <StudentSidebar />

    <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
<div className="w-full">
<StudentDashboardHeader/>
  <VideoLessonComponents/>
<div>
</div>
</div>
    </div>
  </div>
  )
}

export default VideoLesson
