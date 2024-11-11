// import React from 'react'

import UserManagementHeader from "../../../UserManagementHeader"
import AssistantInfomationShowTables from "./AssistantInfomationShowTables"

function AssistantInfoShowComp() {
  return (
    <div className="flex-1">
      <UserManagementHeader title="Assistant Information"/>
      <div>
           <AssistantInfomationShowTables  />
      </div>
    </div>
  )
}

export default AssistantInfoShowComp
