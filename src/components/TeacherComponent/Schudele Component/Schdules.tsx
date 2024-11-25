// import React from 'react'

import DashBoardHeader from "../DashboardComponent/DashBoardHeader"
import ClassesSchudle from "./ClassesSchudle"

function Schdules() {
  return (
    <div className="lg:w-full w-[90%] mx-auto">
       <div className="flex items-center justify-between w-full gap-4 p-2">
             <h1 className="text-2xl font-bold">Schedules</h1>
             <DashBoardHeader />
           </div>
           <div>
            <ClassesSchudle/>
            <ClassesSchudle/>
            <ClassesSchudle/>
           </div>
    </div>
  )
}

export default Schdules
