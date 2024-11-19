// import React from 'react'

import AdminProfileShowComp from "../../components/Admin Component/AdminProfileComponent/AdminProfileShowComp"
import AdminSidebar from "../../components/Admin Component/AdminSidebar"

function AdminProfile() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
    <AdminSidebar/>
         
         <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
  <AdminProfileShowComp/>
         </div>
       </div>
  )
}

export default AdminProfile
