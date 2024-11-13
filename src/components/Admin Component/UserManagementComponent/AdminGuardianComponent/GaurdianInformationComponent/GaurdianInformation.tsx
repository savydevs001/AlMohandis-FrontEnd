// import React from 'react'

import AdminSidebar from "../../../AdminSidebar"
import GaurdianInfoShowComp from "./GaurdianInfoShowComp"

function GaurdianInformation() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar/>
           
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
             {/* <DashBoardComponetsPage/> */}
             <GaurdianInfoShowComp/>
           </div>
         </div>
  )
}

export default GaurdianInformation
