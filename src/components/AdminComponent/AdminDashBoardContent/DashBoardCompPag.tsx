// import React from 'react'


import DashBoardHeader from "../../TeacherComponent/DashboardComponent/DashBoardHeader"
import ActiveViewCards from "./ActiveViewCards"
import CourseApproval from "./CourseApproval/CourseApproval"
import DashboardRecentActivity from "./DashboardActivity"
import DashboardSysteNotification from "./DashboardNotifi"
import UserCompletionRate from "./UserCompletionRate"
import USerGrowthGraph from "./USerGrowthGraph"


function DashBoardComponetsPage() {
  return (
    <div className="flex-1 space-y-6">
     <div className='flex items-center justify-between gap-2 lg:gap-0'>
     <h1 className="text-xl font-bold lg:text-2xl ">Dashboard</h1>
     <DashBoardHeader/>
     </div>
     <div>
      <ActiveViewCards/>
     </div>
     <div className="flex flex-col items-center gap-4 lg:flex-row">
      <DashboardRecentActivity/>
      <USerGrowthGraph/>
      <UserCompletionRate/>
     </div>
     <div className="flex flex-col gap-4 lg:flex-row"  >
      <DashboardSysteNotification/>
      <CourseApproval/>
     </div>
    </div>
  )
}

export default DashBoardComponetsPage
