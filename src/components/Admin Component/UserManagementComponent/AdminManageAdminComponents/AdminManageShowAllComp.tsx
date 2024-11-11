// import React from 'react'

import UserManagementHeader from "../UserManagementHeader"
import AdminManagementTable from "./AdminManagementTable"

function AdminManageShowAllComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Admin Management"/>
      <div className="space-y-6">
            <div className="flex justify-end">
                  <button className="px-4 py-2 text-lg text-white rounded-md bg-primary">Add +</button>
            </div>
            <AdminManagementTable/>
      </div>
    </div>
  )
}

export default AdminManageShowAllComp
