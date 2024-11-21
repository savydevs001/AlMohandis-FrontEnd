// import React from 'react'

import AdminPermissoinToggle from "./PermissoinToggle"

function AdminPermissionSect() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
     <div className="border lg:w-[50%]">
      <AdminPermissoinToggle/>
     </div>
     <div className="border lg:w-[50%]">
      <AdminPermissoinToggle/>
     </div>
    </div>
  )
}

export default AdminPermissionSect
