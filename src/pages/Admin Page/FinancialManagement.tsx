// import React from 'react'

import FinalcialManagementShowAllComp from "../../components/Admin Component/AdminFinanManag/FinalcialMangComp"
import AdminSidebar from "../../components/Admin Component/AdminSidebar"

function FinancialManagement() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar/>
           
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
            <FinalcialManagementShowAllComp/>
           </div>
         </div>
  )
}

export default FinancialManagement
