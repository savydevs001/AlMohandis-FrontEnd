// import React from 'react'

import UserManagementHeader from "../../UserManagementHeader"
import AdminGeneralInformation from "./AdminGeneralInfo"

function AdminInformationShowComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Admin Information"/>
      <div>
<AdminGeneralInformation/>
      </div>
    </div>
  )
}

export default AdminInformationShowComp
