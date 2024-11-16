// import React from 'react'

import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader"
import SystemLoadGraph from "./SystemLoadGraph"
import SystemStaticsDropDown from "./SystemStaticsDropDown"
import SystemStaticsTable from "./SystemStaticsTable"
import UserGrowthGraph from "./UserGrowthGraph"

function SystemStatisticShowAllComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="System Usage Statistics"/>
      <SystemStaticsDropDown/>
      <div className="flex flex-col items-center gap-6 lg:flex-row">
            <SystemLoadGraph/>
            <UserGrowthGraph/>
      </div>
      <div>
            <SystemStaticsTable/>
      </div>
    </div>
  )
}

export default SystemStatisticShowAllComp
