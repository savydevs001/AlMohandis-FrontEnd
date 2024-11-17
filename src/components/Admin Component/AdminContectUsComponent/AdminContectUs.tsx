// import React from 'react'

// import AdminInputField from "../AdminLandingPageComponent/AdminInputField"
// import LandingPageBtns from "../AdminLandingPageComponent/LandingPageBtns"
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"

function AdminContectUs() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Contact Us"/>
      {/* <LandingPageBtns /> */}
      <div className="space-y-7">
            {/* <AdminInputField label="Email Address" placeholder="....."/>
            <AdminInputField label="Phone Number" placeholder="....."/>
            <AdminInputField label="Address" placeholder="....."/> */}
      </div>
    </div>
  )
}

export default AdminContectUs
