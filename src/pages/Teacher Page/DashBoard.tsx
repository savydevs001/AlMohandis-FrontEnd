// import React from 'react'

import CardContent from "../../components/TeacherComponent/DashboardComponent/CardContent"
import Sidebar from "../../components/TeacherComponent/Sidebar"




function DashBoard() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar/>
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <CardContent />
      </div>
    </div>
  )
}

export default DashBoard
