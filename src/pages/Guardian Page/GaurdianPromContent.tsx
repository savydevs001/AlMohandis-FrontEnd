// import React from 'react'

import UserManagementHeader from "../../components/AdminComponent/UserManagementComponent/UserManagementHeader"
import GuardianSidebar from "../../components/GuardianComponents/GuardianSidebar"
import PromotionalReels from "../../components/LandingPageComponent/Promotional Content/PromotionalReels"
import PromotionalVideo from "../../components/LandingPageComponent/Promotional Content/PromotionalVideo"

function GaurdianPromContent() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <GuardianSidebar/>
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
         <div className="flex-1">
            <UserManagementHeader title="Promotional Content"/>
           <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-4">
           <PromotionalVideo/>
           <PromotionalVideo/>
           <PromotionalVideo/>
           <PromotionalVideo/>
           <PromotionalVideo/>
           <PromotionalVideo/>
           <PromotionalVideo/>
           <PromotionalVideo/>
           </div>
           <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-4">
            <PromotionalReels/>
            <PromotionalReels/>
            <PromotionalReels/>
            <PromotionalReels/>
            <PromotionalReels/>
           </div>
         </div>
           </div>
         </div>
  )
}

export default GaurdianPromContent
