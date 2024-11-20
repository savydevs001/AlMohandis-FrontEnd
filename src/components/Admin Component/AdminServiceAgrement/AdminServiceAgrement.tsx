// import React from 'react'

// import AdminAboutHeadings from "../AdminAboutUsComponent/AdminAboutHeadings"
import AdminInputField from "../AdminLandingPageComponent/AdminInputField"
// import LandingPageBtns from "../AdminLandingPageComponent/LandingPageBtns"
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"

function AdminServiceAgrement() {
  return (
      <div className="flex-1 space-y-5">
      <UserManagementHeader title="Privacy Policy"/>
      {/* <LandingPageBtns/> */}

      <div className="space-y-5">
        <AdminInputField onChange={() => { }} label="Main Heading" placeholder="Enter Main Heading data....."/>
         
         {/* <AdminAboutHeadings  headingText=" Heading 1" />
        <AdminAboutHeadings headingText=" Heading 2" />
        <AdminAboutHeadings headingText=" Heading 3" />
        <AdminAboutHeadings headingText=" Heading 4" />
        <AdminAboutHeadings headingText=" Heading 5" />
        <AdminAboutHeadings headingText=" Heading 6" />  */}
      </div>
      <div className="flex items-center justify-end ">
        <button className="px-4 py-2 font-semibold border rounded-md border-primary text-primary">Add Section +</button>
      </div>
    </div>
  )
}

export default AdminServiceAgrement



