// import React from 'react'

import { Route, Routes } from "react-router-dom"
import GuardianNotification from "../pages/Guardian Page/GuardianNotification"
import MyStudent from "../pages/Guardian Page/MyStudent"

function GuardianPageRoutes() {
  return (
    <div>
      <Routes>
            <Route path="/GuardianNotification" element={<GuardianNotification />} />
            <Route path="/MyStudent/*" element={<MyStudent />} />
      </Routes>
    </div>
  )
}

export default GuardianPageRoutes
