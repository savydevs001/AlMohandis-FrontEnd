// import React from 'react'

import UserManagementHeader from "../UserManagementHeader"
import AdminGaurdianTable from "./AdminGaurdianTable"

function AdminGaurdianShowCop() {
  return (
    <div className="flex-1 space-y-12">
      <UserManagementHeader title="Guardian Management"/>
      <div className="">
            <AdminGaurdianTable/>
      </div>
    </div>
  )
}

export default AdminGaurdianShowCop
