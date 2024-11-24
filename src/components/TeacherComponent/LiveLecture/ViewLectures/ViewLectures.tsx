// import React from 'react'

import UserManagementHeader from "../../../AdminComponent/UserManagementComponent/UserManagementHeader"
import ViewOtherSavedVideo from "./ViewOtherSavedVideo"
import ViewVideo from "./ViewVideo"

function ViewLectures() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Live Lectures"/>
      <div className="flex flex-col gap-4 lg:flex-row">
            <div className="lg:w-[65%] w-full">
                  <ViewVideo/>
            </div>
            <div className="lg:w-[35%] w-full space-y-3">
                  <h4 className="font-semibold">Other Saved</h4>
                  <div className="space-y-4">
                  <ViewOtherSavedVideo/>
                  <ViewOtherSavedVideo/>
                  <ViewOtherSavedVideo/>
                  <ViewOtherSavedVideo/>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default ViewLectures
