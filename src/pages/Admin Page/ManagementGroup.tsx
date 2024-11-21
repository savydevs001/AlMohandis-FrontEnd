// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar"
import ManageGroupShowAllComp from "../../components/AdminComponent/ManagementGroupComp/ManagGroupShowComp"
import CreateManagementGroup from "../../components/AdminComponent/ManagementGroupComp/ManagementGroup/ManagementGroup"

function ManagementGroup() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar/>
           
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
<Routes>
  <Route path="/" element={<ManageGroupShowAllComp/>}/>
  <Route path="CreateManagementGroup" element={<CreateManagementGroup/>}/>
</Routes>

           </div>
         </div>
  )
}

export default ManagementGroup
