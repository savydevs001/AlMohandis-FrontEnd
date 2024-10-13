// import React from 'react'
import CardContent from "../../components/Teacher Component/Dashboard Component/CardContent"
import Sidebar from "../../components/Teacher Component/Sidebar"



function DashBoard() {
  return (
    <div className="flex flex-col w-full min-h-screen lg:flex-row">
      <Sidebar/>
      
      <div className="flex-1 lg:w-full w-[90%] mx-auto lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0">
        <CardContent />
      </div>
    </div>
  )
}

export default DashBoard
