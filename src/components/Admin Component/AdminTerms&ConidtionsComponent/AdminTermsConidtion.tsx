// import React from 'react'

// import AdminAboutHeadings from "../AdminAboutUsComponent/AdminAboutHeadings"
// import AdminInputField from "../AdminLandingPageComponent/AdminInputField"
// import LandingPageBtns from "../AdminLandingPageComponent/LandingPageBtns"
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"

function AdminTermsConidtion() {
  return (
    <div className="flex-1 space-y-5">
      <UserManagementHeader title="Terms and Conditions"/>
      {/* <LandingPageBtns/> */}

      <div className="space-y-5">
        {/* <AdminInputField label="Main Heading" placeholder="Enter Main Heading data....."/>
        
        <AdminAboutHeadings headingText=" Heading 1" />
        <AdminAboutHeadings headingText=" Heading 2" />
        <AdminAboutHeadings headingText=" Heading 3" />
        <AdminAboutHeadings headingText=" Heading 4" />
        <AdminAboutHeadings headingText=" Heading 5" />
        <AdminAboutHeadings headingText=" Heading 6" />
        <AdminAboutHeadings headingText=" Heading 7" />
        <AdminAboutHeadings headingText=" Heading 8" />
        <AdminAboutHeadings headingText=" Heading 9" />
        <AdminAboutHeadings headingText=" Heading 10" />
        <AdminAboutHeadings headingText=" Heading 11" />
        <AdminAboutHeadings headingText=" Heading 12" /> */}
      </div>
      <div className="flex items-center justify-end ">
        <button className="px-4 py-2 font-semibold border rounded-md border-primary text-primary">Add Section +</button>
      </div>
    </div>
  )
}

export default AdminTermsConidtion
