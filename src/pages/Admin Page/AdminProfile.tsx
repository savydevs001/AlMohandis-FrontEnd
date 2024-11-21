// import React from 'react'

import AdminProfileShowComp from "../../components/AdminComponent/AdminProfileComponent/ProfileShowComp"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar"

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
