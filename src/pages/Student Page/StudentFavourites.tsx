// import React from 'react'
import { AiOutlineScan } from "react-icons/ai";

import UserManagementHeader from "../../components/AdminComponent/UserManagementComponent/UserManagementHeader"
import StudentSidebar from "../../components/StudentComponent/StudentSidebar"
import PromotionalVideo from "../../components/LandingPageComponent/Promotional Content/PromotionalVideo";

function StudentFavourites() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
<div className="flex-1 space-y-6">
<UserManagementHeader title="Favorites"/>
<div className="flex items-center justify-end">
      <button className="flex items-center gap-4 px-4 py-2 text-lg font-semibold text-white rounded-md bg-primary">Scan
      <AiOutlineScan />
      </button>
</div>
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
</div>
</div>
      </div>
    </div>
  )
}

export default StudentFavourites
