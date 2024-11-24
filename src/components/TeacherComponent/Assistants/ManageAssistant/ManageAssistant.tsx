// import React from 'react'

import UserManagementHeader from "../../../AdminComponent/UserManagementComponent/UserManagementHeader"
import ManageAssistantHeader from "./ManageAssistantHeader"

function ManageAssistant() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Assistant Name"/>
      <ManageAssistantHeader/>
    </div>
  )
}

export default ManageAssistant
