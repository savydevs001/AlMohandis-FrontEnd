// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminRegSubShowAllComp from "../../components/AdminComponent/AdminRegisSubjComp/RegSubComp"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar"
import ViewRegSubject from "../../components/AdminComponent/AdminRegisSubjComp/ViewRegSubject/ViewRegSubject"

function AdminRegisterdSubject() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
 <AdminSidebar/>
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
       <Routes>
        <Route path="/" element={<AdminRegSubShowAllComp/>}/>
        <Route path="subject/:id" element={<ViewRegSubject/>}/>
       </Routes>
      </div>

    </div>
  )
}

export default AdminRegisterdSubject
