// import React from 'react'

import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader"
import ViewRegSubHeader from "./ViewRegSubHeader"

function ViewRegSubject() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Registered Subject"/>
      <ViewRegSubHeader/>
    </div>
  )
}

export default ViewRegSubject
