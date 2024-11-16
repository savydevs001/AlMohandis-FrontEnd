// import React from 'react'

import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader"
import ActiveDaysUserGraph from "./ActiveDaysUserGraph"
import LoginFrequencyGraph from "./LoginFrequencyGraph"
import MostActiveUserGraph from "./MostActiveUserGraph"
import PeakLoginDay from "./PeakLoginDay"
import TotalActiveUserCard from "./TotalActiveUserCard"
import UserActivityDropDown from "./UserActivityDropDown"

function UserActivityReport() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="User Activity Reports"/>
      <div>
            <UserActivityDropDown/>
      </div>
      <div className="flex flex-col items-center gap-4 lg:flex-row">
            <TotalActiveUserCard/>
            <PeakLoginDay/>
      </div>
      <div className="flex flex-col items-center gap-6 lg:flex-row">
            <LoginFrequencyGraph/>
            <MostActiveUserGraph/>
      </div>
      <div>
           <ActiveDaysUserGraph/> 
      </div>
    </div>
  )
}

export default UserActivityReport
