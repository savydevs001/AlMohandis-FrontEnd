// import React from 'react'

import AdminRegSubShowAllComp from "../../components/AdminComponent/AdminRegisSubjComp/RegSubComp"
import Sidebar from "../../components/TeacherComponent/Sidebar"


function Subjects() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar/>
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <AdminRegSubShowAllComp/>
        
      </div>
    </div>
  )
}

export default Subjects
