// import React from 'react'

import UserManagementHeader from "../../Admin Component/UserManagementComponent/UserManagementHeader"
import MyStudentCard from "./MyStudentCard"

function MyStudentShowComp() {
  return (
    <div className="flex-1 space-y-6" >
      <UserManagementHeader title="My Students"/>
      <div className="flex items-center justify-end">
        <button className="px-4 py-2 text-white rounded-md bg-primary">Add Student +</button>
      </div>
      <div className="space-y-4">
        <MyStudentCard/>
        <MyStudentCard/>
        <MyStudentCard/>
        <MyStudentCard/>
        <MyStudentCard/>
        <MyStudentCard/>
      </div>
    </div>
  )
}

export default MyStudentShowComp
