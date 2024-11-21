// import React from 'react'

import DashBoardComponetsPage from "../../components/Admin Component/AdminDashBoardContent/DashBoardCompPag"
import AdminSidebar from "../../components/Admin Component/AdminSidebar"


function AdminDashboard() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
 <AdminSidebar/>
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <DashBoardComponetsPage/>
      </div>
    </div>
  )
}

export default AdminDashboard
