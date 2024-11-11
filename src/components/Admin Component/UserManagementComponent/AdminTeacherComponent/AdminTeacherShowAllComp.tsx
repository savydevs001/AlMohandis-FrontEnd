// import React from 'react'

import UserManagementHeader from "../UserManagementHeader"
import AdminTeacherTable from "./AdminTeacherTable"

function AdminTeacherShowAllComp() {
  return (
    <div className="w-full space-y-6">
    <UserManagementHeader title = 'Teacher Management'/>
    <div className="space-y-6">
      <div className="flex items-center justify-end">
      <button className="px-4 py-2 text-white rounded-md bg-primary">Add +</button>
      </div>
      <AdminTeacherTable/>
    </div>
    </div>
  )
}

export default AdminTeacherShowAllComp
