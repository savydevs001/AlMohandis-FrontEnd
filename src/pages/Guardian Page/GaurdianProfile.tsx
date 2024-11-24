// import React from 'react'

import GaurdianProfileComp from "../../components/GuardianComponents/GaurdianProfile/GaurdianProfileComp"
import GuardianSidebar from "../../components/GuardianComponents/GuardianSidebar"

function GaurdianProfile() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <GuardianSidebar/>
           
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
            <GaurdianProfileComp/>
           </div>
         </div>
  )
}

export default GaurdianProfile
