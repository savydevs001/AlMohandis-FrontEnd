// import React from 'react'

import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"
import ViewRegSubHeader from "../AdminRegisSubjComp/ViewRegSubject/ViewRegSubHeader"

function ViewGroup() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Groups"/>
      <ViewRegSubHeader/>
    </div>
  )
}

export default ViewGroup
