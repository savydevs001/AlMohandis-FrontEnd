// import React from 'react'

import UserManagementHeader from "../../UserManagementHeader"
import GaurdianGeneralInfo from "./GaurdianGeneralInfo"

function GaurdianInfoShowComp() {
  return (
    <div className="flex-1">
      <UserManagementHeader title="Gaurdian Information"/>

      <div>
            <GaurdianGeneralInfo/>
      </div>
    </div>
  )
}

export default GaurdianInfoShowComp
