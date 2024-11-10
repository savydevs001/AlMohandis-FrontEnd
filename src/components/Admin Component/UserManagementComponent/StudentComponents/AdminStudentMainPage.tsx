// import React from 'react'

import UserManagementHeader from "../UserManagementHeader"
import ShowAllStudentsTable from "./ShowAllStudentsTable"

function AdminStudentMainPage() {
  return (
    <div className="space-y-6">
    <UserManagementHeader title = 'Student Management'/>
    <div className="flex items-center justify-end">
    <button className="px-4 py-2 text-lg text-white rounded-lg bg-primary">Add +</button>
    </div>
    <div>
      <ShowAllStudentsTable/>
    </div>
    </div>
  )
}

export default AdminStudentMainPage
