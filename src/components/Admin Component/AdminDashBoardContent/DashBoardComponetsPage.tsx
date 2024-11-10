// import React from 'react'

import DashBoardHeader from "../../Teacher Component/Dashboard Component/DashBoardHeader"
import ActiveViewCards from "./ActiveViewCards"

function DashBoardComponetsPage() {
  return (
    <div className="flex-1">
     <div className='flex items-center justify-between gap-2 lg:gap-0'>
     <h1 className="text-xl font-bold lg:text-2xl ">Dashboard</h1>
     <DashBoardHeader/>
     </div>
     <div>
      <ActiveViewCards/>
     </div>
    </div>
  )
}

export default DashBoardComponetsPage
