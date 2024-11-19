// import React from 'react'

import AdminSidebar from "../../components/Admin Component/AdminSidebar"
import LogsAuditsShowAllComp from "../../components/Admin Component/LogsAuditsComponent/LogsAuditsShowAllComp"

function LogsAudits() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar/>
           
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
<LogsAuditsShowAllComp/>
           </div>
         </div>
  )
}

export default LogsAudits
