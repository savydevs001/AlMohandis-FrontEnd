// import React from 'react'

import DashBoardHeader from "../DashboardComponent/DashBoardHeader"

function AttendenceHeader() {
  return (
    <div className="w-full">
       <div className="flex items-center justify-between w-full gap-4 p-2">
             <h1 className="text-2xl font-bold">Attendence</h1>
             <DashBoardHeader />
           </div>
    </div>
  )
}

export default AttendenceHeader
