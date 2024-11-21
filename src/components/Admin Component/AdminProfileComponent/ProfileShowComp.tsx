// import React from 'react'

import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"
import AdminProfileSetting from "./ProfileSetting/AdminProfileSetting"

function AdminProfileShowComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Profile"/>
      <div>
            <AdminProfileSetting/>
      </div>
    </div>
  )
}

export default AdminProfileShowComp
