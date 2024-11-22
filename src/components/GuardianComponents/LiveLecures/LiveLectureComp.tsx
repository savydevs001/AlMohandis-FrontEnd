// import React from 'react'

import UserManagementHeader from "../../AdminComponent/UserManagementComponent/UserManagementHeader"
import LiveLectureHeader from "./LiveLectureHeader"

function LiveLectureComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Live Lectures"/>
      <LiveLectureHeader/>
    </div>
  )
}

export default LiveLectureComp
