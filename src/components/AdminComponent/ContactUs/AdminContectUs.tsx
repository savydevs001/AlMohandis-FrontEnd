// import React from 'react'

// import AdminInputField from "../AdminLandingPageComponent/AdminInputField"
// import LandingPageBtns from "../AdminLandingPageComponent/LandingPageBtns"
import AdminInputField from "../Landing/AdminInputField"
import LandingPageBtns from "../Landing/LandingPageBtns"
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"

function AdminContectUs() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Contact Us"/>
      <LandingPageBtns onPublish={() => { }} />
      <div className="space-y-7">
            <AdminInputField onChange={() => { }} label="Email Address" placeholder="....."/>
            <AdminInputField onChange={() => { }} label="Phone Number" placeholder="....."/>
            <AdminInputField onChange={() => { }} label="Address" placeholder="....."/>
      </div>
    </div>
  )
}

export default AdminContectUs
