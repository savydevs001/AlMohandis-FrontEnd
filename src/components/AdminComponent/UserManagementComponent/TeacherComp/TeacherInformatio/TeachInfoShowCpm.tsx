// import React from 'react'

import UserManagementHeader from "../../UserManagementHeader"
import TeacherGeneralInfo from "./TeacherGeneralInfo"

function TeacherInformationShowCpm() {
  return (
    <div className="flex-1">
      <UserManagementHeader title = 'Teacher Information'/>
      <div>
            <TeacherGeneralInfo/>
      </div>
    </div>
  )
}

export default TeacherInformationShowCpm
