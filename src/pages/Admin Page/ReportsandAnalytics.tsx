// import React from 'react'

import AdminSidebar from "../../components/Admin Component/AdminSidebar"
import UserActivityReport from "../../components/Admin Component/ReportsAndAnalytics/ActivityReports/UserActivityReport"

function ReportsandAnalytics() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
 <AdminSidebar/>
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
<UserActivityReport/>
      </div>
    </div>
  )
}

export default ReportsandAnalytics
