// import React from 'react'
import { AiOutlineScan } from "react-icons/ai";

import AdminProfileSetting from "../../AdminComponent/AdminProfileComponent/ProfileSetting/AdminProfileSetting"
import UserManagementHeader from "../../AdminComponent/UserManagementComponent/UserManagementHeader"

function GaurdianProfileComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Profile"/>
      <div>
      <AdminProfileSetting/>
      
      <div className="flex flex-col items-center bg-white border rounded-md lg:flex-row ">
          {/* Account Setting Header */}
          <div className="lg:w-[30%] w-full">
            <h1 className="text-lg font-semibold text-center">Add Student</h1>
          </div>
    
          {/* Account Setting Form */}
          <div className="lg:w-[70%] w-full border p-4">
            <form className="flex flex-col space-y-3">
              {/* Notification Toggle */}
              <div className="flex items-center justify-between">
                <p className="text-sm ">Scan QR Code to add Student</p>
                <AiOutlineScan className="text-lg" />

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GaurdianProfileComp
