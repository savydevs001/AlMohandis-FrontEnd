// import React from 'react'

import UserManagementHeader from "../../../Admin Component/UserManagementComponent/UserManagementHeader"
import GradeNowCard from "./GradeNowCard"
import GradeNowShowPdf from "./GradeNowShowPdf"

function GradeNowShowComp() {
  return (
    <div className="flex-1 space-y-10">
<UserManagementHeader title="Course 1 - Lesson - Assignment 1"/>
<div className="flex flex-col gap-4 lg:flex-row">
<div className="lg:w-[60%] bg-red-800">
<GradeNowShowPdf/>
</div>
<div className="lg:w-[40%] space-y-4">
      <GradeNowCard/>
      <GradeNowCard/>
      <GradeNowCard/>
      <GradeNowCard/>
      <GradeNowCard/>
</div>
</div>
    </div>
  )
}

export default GradeNowShowComp
