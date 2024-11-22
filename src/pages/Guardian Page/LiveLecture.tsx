// import React from 'react'

import GuardianSidebar from "../../components/GuardianComponents/GuardianSidebar"
import LiveLectureComp from "../../components/GuardianComponents/LiveLecures/LiveLectureComp"

function LiveLecture() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <GuardianSidebar/>
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <LiveLectureComp/>
           </div>
         </div>
  )
}

export default LiveLecture
