// import React from 'react'

import ProgressBar from "../../../../../../Student Component/StudentDashboard Component/ProgressBar"

function CourseDetail() {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
     <div>
      <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold">Course Name</h1>
            <span className="text-xs bg-[#0900FF1F] text-[#0900FF] rounded-2xl px-2 py-1 font-semibold">In Progress</span>
      </div>
      <h5 className="text-xl">Teacher Name</h5>
      <h5 className="text-xl font-semibold">Start Date : <span className="font-normal">20-06-2023</span></h5>
      <h5 className="text-xl font-semibold">Expected End Date : <span className="font-normal">20-06-2023</span></h5>
     </div>
     <div className="space-y-2 bg-white shadow-sm lg:w-[30%] p-3">
      <h2 className="text-xl font-semibold">Progress</h2>
      <div>
            <ProgressBar progress={75} />
      </div>
      <p className="text-sm">15/20 Lessons Watched</p>
      <p className="text-sm">3/5 Assignments Submitted</p>
      <p className="text-sm">2/3 Exams Completed</p>
     </div>
    </div>
  )
}

export default CourseDetail
