// import React from 'react'

import UserManagementHeader from "../../AdminComponent/UserManagementComponent/UserManagementHeader"
import NotificationHeader from "./NotificationHeader"

function NotificationComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Notification"/>
      <NotificationHeader/>
    </div>
  )
}

export default NotificationComp
