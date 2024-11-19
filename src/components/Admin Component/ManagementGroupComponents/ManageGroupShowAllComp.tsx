// import React from 'react'

import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"
import ManagementGroupCards from "./ManagementGroupCards"

function ManageGroupShowAllComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Management Group"/>
      <div className="flex items-center justify-end">
            <button className="px-4 py-2 text-white rounded-md bg-primary">Create +</button>
      </div>
      <div>
            <ManagementGroupCards/>
      </div>
    </div>
  )
}

export default ManageGroupShowAllComp
